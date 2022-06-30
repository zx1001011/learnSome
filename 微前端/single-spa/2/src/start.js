import { reroute } from "./navigations/reroute";
export let started = false;
export function start() {
    // 除了加载，需要挂载应用
    started = true;
    reroute();
}