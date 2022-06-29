import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun';
const apps = [{
  name: 'vueApp',
  entry: '//localhost:10002', // 子应用必须支持跨域， fetch
  container: '#vue',
  activeRule: '/vue',
  props: { a: 1 }  // 通信
}, {
  name: 'reactApp',
  entry: '//localhost:20001', // 子应用必须支持跨域， fetch
  container: '#react',
  activeRule: '/react'
}]
registerMicroApps(apps)
start({
  prefetch: false  // 取消预加载
})

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
