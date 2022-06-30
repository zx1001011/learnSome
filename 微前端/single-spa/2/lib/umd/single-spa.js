(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.singleSpa = {}));
})(this, (function (exports) { 'use strict';

    const NOT_LOADED = 'NOT_LOADED';
    const LOADING_SOURCE_CODE = 'LOADING_SOURCE_CODE';
    const NOT_BOOTSTRAPPED = 'NOT_BOOTSTRAPPED';
    const BOOTSTRAPPING = 'BOOTSTRAPPING';
    const NOT_MOUNTED = 'NOT_MOUNTED';
    const MOUNTING = 'MOUNTING';
    const MOUNTED = 'MOUNTED';
    const UNMOUNTING = 'UNMOUNTING';

    function shouldBeActive(app) {
        return app.activeWhen(window.location)
    }

    async function toBootstrapPromise(app) {
        if (app.status !== NOT_BOOTSTRAPPED) {
            return app;
        }
        app.status = BOOTSTRAPPING;
        await app.bootstrap(app.customProps);
        app.status = NOT_MOUNTED;
        return app;
    }

    function flattenFnArray(fns) {
        fns = Array.isArray(fns) ? fns : [fns];
        // 通过promise链来链式调用  多个方法组合成一个方法
        // Promise.resolve().then(()=>fn1(props)).then(()=>fn2(props))
        return (props) => fns.reduce((p, fn) => p.then(() => fn(props)), Promise.resolve())
        // return (props) => fns.reduce((p, fn) => {
        //     console.log(props)
        //     console.log(p)
        //     console.log(fn)
        //     p.then(() => fn(props))
        // }, Promise.resolve());
    }


    async function toLoadPromise(app) {
        if (app.loadPromise) {
            return app.loadPromise;  // 缓存机制， 防止重复
        }
        return (app.loadPromise = Promise.resolve().then(async () => {
            app.status = LOADING_SOURCE_CODE;
            let { bootstrap, mount, unmount } = await app.loadApp(app.customProps);
            app.status = NOT_BOOTSTRAPPED;
            app.bootstrap = async () => { };
            app.bootstrap = flattenFnArray(bootstrap);
            app.mount = flattenFnArray(mount);
            app.unmount = flattenFnArray(unmount);
            delete app.loadPromise;
            return app;
        }))
    }

    async function toMountPromise(app) {
        if (app.status !== NOT_MOUNTED) {
            return app;
        }
        app.status = MOUNTING;
        await app.mount(app.customProps);
        app.status = MOUNTED;
        return app;
    }

    async function toUnmountPromise(app) {
        if (app.status != MOUNTED) {
            return app;
        }
        app.status = UNMOUNTING;
        await app.unmount(app.customProps);
        app.status = NOT_MOUNTED;
        return app;
    }

    let started = false;
    function start() {
        // 除了加载，需要挂载应用
        started = true;
        reroute();
    }

    // hashchange <- hash 模式

    const routingEventsListeningTo = ['hashchange', 'popstate'];
    function urlReroute() {
        reroute();
    }
    const captureEventListeners = {
        hashChange: [],
        popstate: []  // 应用切换完成后会调用
    };
    // 绑定 路由改变的事件
    window.addEventListener('hashchange', urlReroute);
    window.addEventListener('popstate', urlReroute);

    // 缓存 hashchange 和 popstate , 自定义绑定的事件
    const originalAddEventListener = window.addEventListener;
    const originalRemoveEventListener = window.removeEventListener;

    window.addEventListener = function (eventName, fn) {
        if (routingEventsListeningTo.indexOf(eventName) >= 0
            && captureEventListeners[eventName] && !captureEventListeners[eventName].some(listener => listener == fn)) {
            captureEventListeners[eventName].push(fn); // 暂存进来
            return;
        }
        return originalAddEventListener.apply(this, arguments);
    };
    window.removeEventListener = function (eventName, fn) { // 还原
        if (routingEventsListeningTo.indexOf(eventName) >= 0) {
            captureEventListeners[eventName] = captureEventListeners[eventName].filter(l => l !== fn);
            return;
        }
        return originalRemoveEventListener.apply(this, arguments);
    };
    // 处理 用户 js 调用 window.history 修改事件
    function patchedUpdateState(updateState, methodName) {
        return function () {
            const urlBefore = window.location.href;
            updateState.apply(this, arguments); // 调用切换的方法
            const urlAfter = window.location.href;
            if (urlBefore !== urlAfter) {
                urlReroute(new PopStateEvent('popstate')); // 新产生一个事件 popstate 
            }
        }
    }
    window.history.pushState = patchedUpdateState(window.history.pushState);
    window.history.replaceState = patchedUpdateState(window.history.replaceState);

    function reroute() {
        const { appsToUnmount, appsToMount, appsToLoad } = getAppChanges();
        // start 和 registerApplication 加载了两次
        if (started) {
            // app 装载
            return performanceAppChanges();
        } else {
            // 注册应用，进行预先加载
            return loadApps();
        }

        async function performanceAppChanges() {
            // Promise.all 暂时不写了
            appsToUnmount.map(toUnmountPromise);
            appsToLoad.map(async (app) => {
                // 无时无刻都要根据路由来判断 app 的生命周期，所以在 这些函数内部应该都要做一些判断
                app = await toLoadPromise(app);
                app = await toBootstrapPromise(app);
                return toMountPromise(app);
            });
            appsToMount.map(async (app) => {
                app = await toBootstrapPromise(app);
                return toMountPromise(app);
            });
        }
        async function loadApps() {
            await Promise.all(appsToLoad.map(toLoadPromise));
        }
    }

    /**
     * 不写返回值了，也不做校验了
     * @param {*} appName xxx
     * @param {*} loadApp xxx
     * @param {*} activeWhen xxx
     * @param {*} customProps xxx
     */
    const apps = [];
    function registerApplication(appName, loadApp, activeWhen, customProps) {
        apps.push({  // 注册完毕
            name: appName,
            loadApp,
            activeWhen,
            customProps,
            status: NOT_LOADED    // 应用的生命周期
        });
        reroute(); // 加载应用
    }

    function getAppChanges() {
        const appsToUnmount = [];
        const appsToMount = [];
        const appsToLoad = [];
        apps.forEach(app => {
            // 先不考虑出错了
            // const appShouldBeActive = app.status !== SKIP_BECAUSE_BROKEN && shouldBeActive(app)
            const appShouldBeActive = shouldBeActive(app);
            switch (app.status) {
                case NOT_LOADED:
                case LOADING_SOURCE_CODE:
                    if (appShouldBeActive) {
                        appsToLoad.push(app);
                    }
                    break;
                case NOT_MOUNTED:
                case NOT_BOOTSTRAPPED:
                case BOOTSTRAPPING:
                    if (appShouldBeActive) {
                        appsToMount.push(app);
                    }
                    break;
                case MOUNTING:
                case MOUNTED:
                    if (appShouldBeActive) {
                        appsToUnmount.push(app);
                    }
                    break;
            }
        });
        return { appsToUnmount, appsToMount, appsToLoad }
    }

    exports.registerApplication = registerApplication;
    exports.start = start;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=single-spa.js.map
