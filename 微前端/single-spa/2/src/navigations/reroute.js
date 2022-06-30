import { getAppChanges } from "../applications/app";
import { toBootstrapPromise } from "../lifecycles/bootstrap";
import { toLoadPromise } from "../lifecycles/load";
import { toMountPromise } from "../lifecycles/mount";
import { toUnmountPromise } from "../lifecycles/unmount";
import { started } from "../start";
import './navigator-events';

export function reroute() {
    const { appsToUnmount, appsToMount, appsToLoad } = getAppChanges()
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
        let unmountPromises = appsToUnmount.map(toUnmountPromise);
        appsToLoad.map(async (app) => {
            // 无时无刻都要根据路由来判断 app 的生命周期，所以在 这些函数内部应该都要做一些判断
            app = await toLoadPromise(app);
            app = await toBootstrapPromise(app);
            return toMountPromise(app);
        })
        appsToMount.map(async (app) => {
            app = await toBootstrapPromise(app);
            return toMountPromise(app);
        })
    }
    async function loadApps() {
        let apps = await Promise.all(appsToLoad.map(toLoadPromise));
    }
}