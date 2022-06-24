import { h, createApp } from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue'

// const app = createApp(App)
// app.use(router)
//     .mount('#app')
const appOptions = {
    el: '#vue3', // 父应用中的 el, 用来挂载子应用
    router,
    render: () => {
        return h(App, {});
    }
}

const vueLifeCycle = singleSpaVue({ createApp, appOptions })  // 包装之后的 含有 三个钩子函数的生命周期

// 当父应用引用我时，设置以下配置
if (window.singleSpaNavigate) {
    __webpack_public_path__ = 'http://localhost:8088/'
}


// 我们定好了协议，父应用调用这些方法，进行接入： 协议接入
export const bootstrap = vueLifeCycle.bootstrap;
export const mount = vueLifeCycle.mount;
export const unmount = vueLifeCycle.unmount;


// 需要父应用加载子应用

// 需要暴露三个 钩子函数  bootstrap  mount   unmount
// 引入 single-spa  | single-spa-vue | single-spa-react

