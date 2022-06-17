import { router } from './router/index';
import { createApp, toRaw } from 'vue'
import App from './App.vue'
import './assets/css/reset.less'
import './assets/css/boot.less'
import { createPinia, PiniaPluginContext } from 'pinia'

type Options = {  
    key?: string
}
const __piniaKey__:string = 'xiaozhang'
const setStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}
const getStorage = (key: string) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}
const piniaPlugin = (options: Options) => {  // 函数柯里化
    return (context: PiniaPluginContext) => {
        const { store } = context
        const data = getStorage(`${options?.key ?? __piniaKey__}-${store.$id}`)
        console.log(data)

        store.$subscribe(() => {
            console.log(store)
            setStorage(`${options?.key ?? __piniaKey__}-${store.$id}`, toRaw(store.$state))
        })

        return {
            ...data
        }

    }
}


const store = createPinia()
store.use(piniaPlugin())
const app = createApp(App)
app.use(store)

app.use(router)
app.mount('#app')
