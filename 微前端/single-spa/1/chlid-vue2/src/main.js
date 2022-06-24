import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue'

Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

const appOptions = {
  el: '#vue', // 父应用中的 el, 用来挂载子应用
  router,
  render: h => h(App)
}
const vueLifeCycle = singleSpaVue({ Vue, appOptions })
// 当父应用引用我时，设置以下配置
if (window.singleSpaNavigate) {
  __webpack_public_path__ = 'http://localhost:10002/'
}

if (!window.singleSpaNavigate) {
  delete appOptions.el
  new Vue(appOptions).$mount('#app')
}

export const bootstrap = vueLifeCycle.bootstrap;
export const mount = vueLifeCycle.mount;
export const unmount = vueLifeCycle.unmount;
