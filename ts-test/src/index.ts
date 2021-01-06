let str: string = "你好 ts"

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
Person.print()
Person.print()

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
c.eat()