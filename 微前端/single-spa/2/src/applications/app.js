import { BOOTSTRAPPING, LOADING_SOURCE_CODE, MOUNTED, MOUNTING, NOT_BOOTSTRAPPED, NOT_LOADED, NOT_MOUNTED, shouldBeActive } from "./app.helpers";
import { reroute } from "../navigations/reroute";
/**
 * 不写返回值了，也不做校验了
 * @param {*} appName xxx
 * @param {*} loadApp xxx
 * @param {*} activeWhen xxx
 * @param {*} customProps xxx
 */
const apps = [];
export function registerApplication(appName, loadApp, activeWhen, customProps) {
    apps.push({  // 注册完毕
        name: appName,
        loadApp,
        activeWhen,
        customProps,
        status: NOT_LOADED    // 应用的生命周期
    });
    reroute(); // 加载应用
}

export function getAppChanges() {
    const appsToUnmount = [];
    const appsToMount = [];
    const appsToLoad = [];
    apps.forEach(app => {
        // 先不考虑出错了
        // const appShouldBeActive = app.status !== SKIP_BECAUSE_BROKEN && shouldBeActive(app)
        const appShouldBeActive = shouldBeActive(app)
        switch (app.status) {
            case NOT_LOADED:
            case LOADING_SOURCE_CODE:
                if (appShouldBeActive) {
                    appsToLoad.push(app)
                }
                break;
            case NOT_MOUNTED:
            case NOT_BOOTSTRAPPED:
            case BOOTSTRAPPING:
                if (appShouldBeActive) {
                    appsToMount.push(app)
                }
                break;
            case MOUNTING:
            case MOUNTED:
                if (appShouldBeActive) {
                    appsToUnmount.push(app)
                }
                break;
        }
    })
    return { appsToUnmount, appsToMount, appsToLoad }
}