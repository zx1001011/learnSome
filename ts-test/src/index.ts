let str: string = "你好 ts"
// 2.函数
namespace fun1 {
    // ts 中方法的重载
    function getInfo(str: string): string
    function getInfo(str: number): number
    function getInfo(str: any): any {
        if (typeof str === 'string') {
            return '我的名字是' + str
        } else {
            return '我的年龄是' + str
        }
    }
    // console.log(getInfo('张三')) // 我的名字是张三
    // console.log(getInfo(20)) // 我的年龄是20
    // console.log(getInfo(false)) // 语法报错
    
}
// 3.类
namespace fun2 {
    class Person{
        name:string;
        static a:number = 0;
        constructor(name:string) {
            this.name = name
        }
        run ():void{
            console.log(`${this.name}在奔跑`)
        }
        static print():void{ 
            // 静态方法无法直接调用类里的属性 ， static类似 C 语言
            console.info(`静态方法` + this.a++)
        }
    }
    // Person.print()
    // Person.print()

    class Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        eat() {
            console.log('吃的方法')
        }
        work() {
            console.log('工作的方法')
        }
    }

    class Dog extends Animal {
        constructor(name: string) {
            super(name)
        }
        eat() {  // this is 多态
            return '主人已经准备好狗粮，快来吃饭！'
        }
    }

    // 抽象类
    // 定义animal子类必须包含eat方法
    abstract class animal { // 抽象类
        // 可以包含非抽象方法
        work() {

        }
        abstract eat(): any; // 抽象方法
    }
    class cat extends animal {
        eat() {
            console.log('主人准备了鱼和老鼠~')
        }
    }
    let c = new cat()
    // c.eat()
    
}

// 5. 接口
namespace fun3 {
    // 属性接口
    function printLabel(labelInfo: { label: string }):void {
        // 对传参 labelInfo 进行了规定，必须要有 string类型的 label属性
    }
    // 对传入对象的约束 ： 属性接口
    interface Label {
        label: string; // 必须要有 label
        fontSize?: number; // 可选参数，可传可不传
    }
    // 规定形参
    function print(label:Label):void {
        // console.info(label.name + label.label) // 语法报错
        // 需要严格遵守规则
    }
    let obj = {
        name: 1,
        label: 'hah'
    }
    print(obj) // 可以有其他属性
    print({ label: 'jajja'  }) // 只能有 label 属性，否则报错

    // 加密的函数类型接口
    interface encrypt {
        (key:string,value:string):string;
    }
    let md5: encrypt = function (k: string, v: string): string { return k + v; }
    // console.log(md5('1', '2'))

    // 可索引接口： 数组、对象的约束
    interface UserArr {
        [index: number]: string; // 索引值为 string 类型， index 为索引
    }
    let arr: UserArr = ['aaa', 'bbb']
    // console.log(arr[0]) // 0 是索引

    // 对对象的约束，  可索引接口
    interface UserObj {
        [index: string]: number; // 索引值为 number 类型， index 为索引
    }
    let obj1:UserObj = { name: 1, k: 2 }
    // console.log(obj1.name)

    // 类类型接口： 对类的约束 和 抽象类有点相似
    interface Animal2 {
        name: string;
        eat(): string;
    }
    class Dog1 implements Animal2 {
        name: string
        constructor(name: string) {  // 构造函数 初始化 name
            this.name = name
        }
        eat() {
            return `${this.name}在吃饭`
        }
    }
    let d1 = new Dog1('嘿嘿')
    // console.log(d1.eat())

    // 接口扩展：接口可以继承接口
    interface Animal3 {
        eat(): void;
    }
    interface Person1 extends Animal3 {
        work(): void;
    }
    class Programmer {
        name: string
        constructor(name: string) {
            this.name = name
        }
        coding() {
            return this.name + '在敲代码中...'
        }
    }
    class Web implements Person1 {
        eat() {}
        work() {}
    }

    class Web1 extends Programmer implements Person1 {
        eat() {}
        work() {}
    }
    let web1 = new Web1('zhang')
    // console.info(web1.coding())

}

// 6. 泛型
namespace fun4 {
    // 泛型： 传入类型灵活， 函数增强复用性， 拒绝不必要的冗余代码
    // 泛型方法
    function getPerson(name: any): any { // any 类型
        return name
    }
    getPerson(111)
    // T(任意字符) 表示类型，具体由方法调用的时候决定
    function getPerson1<T>(name: T, key: string): any { // any 类型
        console.log(name + key)
        return name + key
    }
    // getPerson1<number>(111, 'aa')
    // getPerson1<string>('ahhahah', 'aaa')

    // 泛型类
    // 比如有个最小堆算法，需要同时支持返回数字和字符串两种类型
    // class MinClass<T>{
    //     list: T[] = []
    //     add(value: T): void {
    //         this.list.push(value)
    //     }
    //     min(): T {
    //         let minNum = this.list[0]
    //         for (let i = 0; i < this.list.length; i++) {
    //             if (minNum > this.list[i]) {
    //                 minNum = this.list[i]
    //             }
    //         }
    //         return minNum
    //     }
    // }
    // let l1 = new MinClass<string>()
    // l1.add('a')
    // l1.add('b')
    // l1.add('c')
    // console.info(l1.min())

    /**
     * 需求：
     * 1. 定义一个 User 的类，作用是映射数据库字段
     * 2. 定义一个 MysqlDb 的类，用于操作数据库
     * 3. 把 User 类作为参数传入到 MysqlDb 中
     * 
     * ` 非常像 java 中的 dto 层 `
     */
    // class User {
    //     username: string | undefined;
    //     password: string | undefined;
    // }

    // 操作数据库的泛型类
    // 可以去除重复代码，可以对类型进行校验
    // class MysqlDb<T> {
    //     list:T[] = [] // 模拟数据库
    //     constructor(l?: T[]) {
    //         if (l) {
    //             this.list = l
    //         }
    //     }
    //     add(user: T): boolean {
    //         this.list.push(user)
    //         console.log(user)
    //         return true
    //     }
    // }
    // var user1 = new User()
    // user1.username = '张三'
    // user1.password = '111'
    // var mysql1 = new MysqlDb<User>()
    // mysql1.add(user1)

    // 泛型接口
    // interface ConfigFn{
    //     <T>(value: T, key: string): T;
    // }
    // let getData: ConfigFn = function <T>(value: T, k: string): T {
    //     console.log(value + k)
    //     return value
    // }

    // getData<string>('hahha', 'hhah')
}

// 7. 实例 - 类型、接口、类、泛型的综合使用案例
namespace fun5 {
    // interface DBI<T>{
    //     add(info: T): boolean;
    //     update(info: T, id: number): boolean;
    //     delete(id: number): boolean;
    //     get(id: number): any[];
    // }
    // // 定义一个操作 mysql 数据库的类   tip: 实现泛型接口 类也要是泛型类
    // class MySqlDb<T> implements DBI<T>{
    //     add(info: T): boolean {
    //         return true
    //     }
    //     update(info: T, id: number): boolean {
    //         return true
    //     }
    //     delete(id: number): boolean {
    //         return true
    //     }
    //     get(id: number): any[] {
    //         return []
    //     }
    // }
    
    // class MsSqlDb<T> implements DBI<T>{
    //     add(info: T): boolean {
    //         return true
    //     }
    //     update(info: T, id: number): boolean {
    //         return true
    //     }
    //     delete(id: number): boolean {
    //         return true
    //     }
    //     get(id: number): any[] {
    //         return []
    //     }
    // }
    
    // class MongoDb<T> implements DBI<T>{
    //     add(info: T): boolean {
    //         return true
    //     }
    //     update(info: T, id: number): boolean {
    //         return true
    //     }
    //     delete(id: number): boolean {
    //         return true
    //     }
    //     get(id: number): any[] {
    //         return []
    //     }
    // }
    // 操作用户表 定义一个 User 类和数据表做映射
    // class User {
    //     id: number | undefined;
    //     username: string | undefined;
    //     password: string | undefined;
    //     constructor(id: number, username: string, password: string) {
    //         this.id = id
    //         this.username = username
    //         this.password = password
    //     }
    // }
    // let u1 = new User(1, 'lily', '111111')
    // // let mMysql = new MySqlDb() // 没有校验作用
    // let mMySql = new MySqlDb<User>() // 类作为参数来约束数据传入的类型
    // mMySql.add(u1) 
    // let mMsSql = new MsSqlDb<User>() // 类作为参数来约束数据传入的类型
    // mMsSql.add(u1) 
}
// 8. ts 模块 

// import {User, UserModel} from './7-ts-modules/model/User'
// import {Article, ArticleModel} from './7-ts-modules/model/Article'
// namespace 里面无法写 import
namespace fun6 {
    // es6
    // import { save, getData, dbUrl } from '../modules/db'
    // getData()   
    // save()
    // console.log(dbUrl)

    // import port from '../modules/db'
    // console.log(port)


    /**
     * 案例 之 7-ts 进行模块化
     */
    // var u = new User(1, 'lily', '111111')
    // UserModel.add(u)
    // var article = new Article(1, '特大新闻！特大新闻！今天有毛毛雨！', 'lily')
    // ArticleModel.add(article)
}

// 9. 命名空间
namespace fun7 {
    namespace PersonA {
        interface Animal {
            name: string;
            eat() : void;
        }
        export class Dog implements Animal {
            name: string;
            constructor(name: string) {
                this.name = name
            }
            eat() { 
                console.log('小狗' + this.name + '在吃饭')
            }
        }

        export namespace H {
            let name: string = 'jaj'
        }

    } 

    namespace PersonB {

    } 

    let dog = new PersonA.Dog('花花')
    // dog.eat()
}

// 10. 装饰器
namespace fun8 {

    // 类装饰器
    // 1. 普通装饰器（无法传参）
    namespace class1 {
        function logClass(params: any) {
            // console.info(params) // 当前的类
    
            params.url = 'hahha'
            params.prototype.Url = 'XXXX'
            params.prototype.run = function (): void {
                console.info('running....')
            }
        }
    
        @logClass
        class HttpClient1 {
            constructor() {
                
            }
            getData() {
    
            }
        }
    
        var http: any = new HttpClient1()
        // console.log(http.url)  // 无法获取， undefined
        // console.log(http.Url)
        // http.run()
    }
    // 2. 类装饰器：装饰器工厂（可传参）
    namespace class2 {
        function logClass(params: string) {
            
            return function (target: any) {
                // console.log(target)  // 当前的类
                // console.info(params) // 装饰器传入参数
                target.prototype.url = params
                target.prototype.run = function (): void {
                    console.info('running....')
                }

            }
        }
    
        @logClass('http://xxx.com/api')
        class HttpClient1 {
            constructor() {
                
            }
            getData() {
    
            }
        }
    
        var http: any = new HttpClient1()
        // console.log(http.url) 
        // http.run()
    }

    // 属性装饰器
    namespace class3 {
        function logClass (params: any){
            return function (target: any, attr: any) {
                // console.log(target) // 类
                // console.log(attr)  // url
                target[attr] = params
            }
        }
    
        // @logClass('http://itying.com')
        // var url: any | undefined;  // 无效

        class ht1 {
            @logClass('http://itying.com')
            public url: any | undefined;
        }
        var t = new ht1()
        // console.log(t.url)
    }

    namespace class4 {
        // 方法装饰器
        function get(params: any) {
            return function (target: any, methodName: any, desc: any) {
                // console.log(target) // 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
                // console.log(methodName) // 成员的名字
                // console.log(desc) // 成员的属性描述符
                
                // 修改装饰器的方法， 把装饰器方法里面传入的所有参数改为 string 类型
                // 1. 保存当前的方法

                let oMethod = desc.value  // 保存当前方法
                // 修改当前方法
                desc.value = function (...args: any[]) {
                    args = args.map((val) => {
                        return String(val)
                    }) 
                    console.log('装饰器中转换的形参：' , args)
                    oMethod.apply(this, args)  // 融合类中的 该方法语句
                }
            }
        }

        // 方法参数装饰器
        function logParams(params: any) {
            return function (target: any, methodName: any, paramsIndex: any) {
                console.log(target)
                console.log(methodName)
                console.log(paramsIndex)
                target.url = params
            }
        }
        class Ht {
            url: string | undefined;
            constructor() {
            }

            @get('http://www.itying.com')
            getData(...args:any[]) {
                console.log(args)
                console.log('我是类中的方法')
            }

            getCan(@logParams('uuid') uuid: any) {
                console.log(uuid)
                console.log('我是类中的参数方法')
            }
        }
        let ht = new Ht()
        // ht.getData(12, 11, true)
        ht.getCan('jjj')
        console.log(ht.url)
    }
}
