// hashchange <- hash 模式
// popstate <- history 模式

import { reroute } from "./reroute"

export const routingEventsListeningTo = ['hashchange', 'popstate']
function urlReroute() {
    reroute([], arguments);
}
const captureEventListeners = {
    hashChange: [],
    popstate: []  // 应用切换完成后会调用
}
// 绑定 路由改变的事件
window.addEventListener('hashchange', urlReroute)
window.addEventListener('popstate', urlReroute)

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
}
window.removeEventListener = function (eventName, fn) { // 还原
    if (routingEventsListeningTo.indexOf(eventName) >= 0) {
        captureEventListeners[eventName] = captureEventListeners[eventName].filter(l => l !== fn);
        return;
    }
    return originalRemoveEventListener.apply(this, arguments);
}
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
window.history.pushState = patchedUpdateState(window.history.pushState, 'pushState');
window.history.replaceState = patchedUpdateState(window.history.replaceState, 'replaceState');