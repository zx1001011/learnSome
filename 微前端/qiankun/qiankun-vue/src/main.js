import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Vue.config.productionTip = false

let instance = null
// props 以便通信
function render(props) {
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app') // 这里是挂载到自己的 html 中，基座会拿到这个挂载后的 html ，将其插入进去。
}
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

if (!window.__POWERED_BY_QIANKUN__) { // 判断是否是独立运行还是 作为子应用引入
  render()
}

export async function bootstrap(props) {

}

export async function unmount(props) {
  instance.$destroy()
}

export async function mount(props) {
  console.log(props)
  render(props)
}

