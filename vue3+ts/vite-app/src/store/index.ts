import { defineStore } from 'pinia'
import { Names } from './store-name'

type User = {
    name: string,
    age: number
}

let result: User = {
    name: '张三',
    age: 60
}

// 模拟异步
const Login = (): Promise<User> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: 'jaj', age: 1
            })
            // reject('error')
        }, 1)
    })
}

export const useTestStore = defineStore(Names.TEST, {
    state: () => {
        return {
            current: 1222,
            name: '小曼222',
            user: <User>{}
        }
    },

    // computed 修饰一些值， 有缓存 ， 共有两种写法：1.函数式写法 2.
    getters: {
        newName(): string { // 也可以内部相互调用
            return `$-${this.name} - ${this.getUserAge}`
        },
        getUserAge(): number {
            return this.user.age
        }
    },

    // methods 可以做同步 异步都可以  提交 state
    actions: {
        setCurrent(num: number = 1) {
            this.current = num
        },
        setName(name: string = '') {  // 同步
            this.name = name
        },
        setUser() {  // 同步
            this.user = result
        },
        async setMyUser() { // 做异步 async await 搭配使用
            const result = await Login()
            this.user = result
            this.setCurrent()  // actions 里面方法可以相互调用
            this.setName(result.name)  // actions 里面方法可以相互调用
        }

    }
})