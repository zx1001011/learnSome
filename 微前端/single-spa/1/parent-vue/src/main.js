import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerApplication, start } from 'single-spa'

async function loadScript(url) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    }) // 同步
}

// 配置，引入 single-spa, 当路由为 /vue 时 加载子应用
// 注册子应用，挂载子应用
/**
 * 'myVueApp',
    async () => {
        // single-spa 推荐使用 systemJS 来加载 vue 子应用的lib 文件（app.js + chunk-vendors.js)
        // systemJS 也是一个 模块化规范，相当于在 浏览器中使用 es6 模块
        console.log('加载模块')
        // 利用 在 页面上创建 script 标签加载
        // 先加载公共的，然后加载特有的 app.js
        await loadScript(`http://localhost:10002/js/chunk-vendors.js`)
        await loadScript(`http://localhost:10002/js/app.js`)
        return window.singleVue; // 加载完之后，返回子应用的 SingleSpaVueLifecycles 实例
    },
    location => location.pathname.startsWith('/vue'),  // 用户切换到 /vue 下，加载刚才定义的子应用
 */
// vue2 项目： vue create chlid-vue2
registerApplication({
    name: 'myVueApp',
    app: async () => {
        await loadScript(`http://localhost:10002/js/chunk-vendors.js`)
        await loadScript(`http://localhost:10002/js/app.js`)
        return window.singleVue;
    },
    activeWhen: ['/vue', (location) => location.pathname.startsWith('/vue')],  // => 缺陷就是  子应用 中的  router-link 没有编译
})

/**
 * vue3 项目：
 *    其中 router-link 没有编译 （应该是打包的时候，与 vue2 打包少了点什么）
 */
// registerApplication({
//     name: 'myVueApp2',
//     app: async () => {
//         await loadScript(`http://localhost:8088/js/chunk-vendors.js`)
//         await loadScript(`http://localhost:8088/js/app.js`)
//         return window.singleVue3;
//     },
//     activeWhen: ['/vue3', (location) => location.pathname.startsWith('/vue3')],  // => 缺陷就是  子应用 中的  router-link 没有编译
// })

start();

createApp(App).use(router).mount('#app')

