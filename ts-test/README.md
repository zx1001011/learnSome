## 前提：

### 视频链接：[主讲老师大地](https://www.bilibili.com/video/BV1yt411e7xV?from=search&seid=13056183740590042272)
### 文件链接： [itying-typescript教程](https://www.itying.com/goods-905.html)


### 官网：[typescript](https://ts.xcatliu.com/introduction/hello-typescript.html)


### 学习日记
| 序号 | 时间 | 阶段 | 视频集数 | 备注 |
| ---- | ---- | ---- | ------- | ---- |
| 1 | 2021.1.6 | 初步详细输入阶段 | 01 - 07 | 从初步认识，搭建编译环境，数据类型，函数，类 |
| 2 | 2021.1.7 | 初步详细输入阶段 | 08 - | |


## 一、简介  
google研发，为了面向大型复杂的项目，使用javascript可以搭建
ts 是 javascript 的超集，包含 es6 和 es5
实现类似 java | c# 这种面向对象的编程语言
*建议使用 es6 语法*
## 二、使用

### 1. 安装  
``` npm|cnpm install -g typescript``` 或者
```yarn global add typescript ```

安装成功如下图：
![](./img/1.png)

### 2. 使用
- 创建文件 hello.ts   
写入ts语法
- ts 编译成 es5 语法  
浏览器本身不支持ts语法   
命令： ``` tsc hello.ts ```

*注意：每次运行都需要编译*

- 配置自动化编译脚本  
1. 创建 tsconfig.json 文件   
``` tsc --init ``` 生成配置文件
2. 快捷键 Ctrl+shift+B  选择监视模式 进行编译  
每次有更新就会编译

*tsc watch 是自动监听，下次保存文件就自动编译*  
*tsc build 是编译一次*

## 三.语法
*以下 typescript 简写为 ts*
### 1.数据类型
ts 中 为了 使代码更规范，更有利于维护，增加了类型校验       
变量一旦确定为哪个数据类型，不可改变数据类型  
函数返回值类型等等语法比较严格，不然语法会报错
| 序号 | 类型 | 标识符 | 含义 | 备注 |  是否基本类型 | 
| ---- | ---- | ---- | ----- | ---- | ------------------ |
| 1 | 布尔类型 | boolean | [true/false] | ```let flag:boolean=false``` | √ |
| 2 | 数字类型 | number | [\d+.\d+] | 未区分浮点类型和整数类型 | √ |
| 3 | 字符串类型 | string | [char+] | 单、双引号包裹 | √ |
| 4 | 数组类型 | array | [number...] | 必须指定数组类型，如 ``` let arr:number[] = [1,2,3] ```, 第二种定义方式 ``` let arr:Array<number> = [1,2] ``` *泛型* | √ |
| 5 | 元组类型 | tuple | 数组的一种，可以指定每个数组元素的类型 | ``` let arr:[string, number, boolean] = ['ts', 3.18, true] ```  | √ |
| 6 | 枚举类型 | enum | 事先考虑某个变量可能取得值 | ``` enum 枚举名 { 标识符[=整型常数], ... } ``` ，类似C语言,其中值默认为索引值， 示例： ``` enum Flag {success=1, error} let f:Flag=Flag.success ``` | √ |
| 7 | 任意类型 | any | 可以赋值为任意类型 | Object类型可以指定该类型 | × |
| 8 | null | null | 一个变量可以是基本数据类型，或者null或者undefined |  ``` let num:number | null ``` | × |
| 9 | undefined | undefined | 其他类型未初始化变量为undefined，但是引用会报错；如果直接指定undefined没有初始化就不会报错 | ``` let num:number |null | undefined ```  | × |
| 10 | 空类型 | void | 一般用于方法没有返回值 | ``` function run():void{} ``` | × |
| 11 | never类型 | never | 从来不会出现 | ``` let a:never  a=(()=>{ throw new Error('错误') })() ``` | × |

### 2.函数
- 函数的定义  
· 函数参数指定类型，返回值指定类型
  1. 函数声明法
  ``` typescript
    function run(name:string, age:number):void{

    }
  ```
  2. 匿名函数法
  ``` typescript
    let fun = function(name:string, age:number):void{

    }
  ```
    · es5 实参和形参无需一样，但是ts中必须一样，如果不一样需要配置可选参数，
    ? 必须配置到后面，才能够不混淆
    ``` typescript
        let fun = function(name:string, age?:number):void{
            // age 可传可不传
        }
    ```
    · es5里面没法设置默认参数，ts和es6都可以设置默认参数
    ``` typescript
        let fun = function(name:string, age:number=20):void{
            // age 可传可不传，默认为 20
        }
        fun('zhangsan')
    ```
    · 剩余参数[实参数量>形参数量]
    ... 三点运算符（es6）的使用
    ``` typescript
        let fun = function(...result:number[]):void{
            // result 为数组类型使用
        }
        fun(1, 2, 3, 4)
    ```
- 函数重载   
java 中方法的重载指的是两个或两个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况   
ts 中重载指的是通过为同一个函数提供多个函数类型定义来实现多种功能的目的
ts 需要兼容 es5 和 es6 重载的写法， 与 java 有区别
``` typescript
    function getInfo(str: string): string
    function getInfo(str: number): number
    function getInfo(str: any): any {
        if (typeof str === 'string') {
            return '我的名字是' + str
        } else {
            return '我的年龄是' + str
        }
    }
    console.log(getInfo('张三')) // 我的名字是张三
    console.log(getInfo(20)) // 我的年龄是20
```
- 箭头函数 es6 () => {}
  this 上下文指向函数运行的上下文， 非私有
### 3.类(上) —— es5 中的类
- Es5中的类和静态方法 
``` javascript
// 1. 最简单的类 - 通过构造函数
function Person() { this.name='张三'}
var p = new Person()
alert(p.name)
// 2. 构造函数和原型链增加属性或者方法
// 区别： 实例不会共享构造函数的属性和方法， 原型链会
function Person() { 
    this.name='张三'
    this.run = function () { return this.name + '在奔跑' } 
}
Person.prototype.work = function () { return this.name + '在工作' }
var p = new Person()
alert(p.run)
alert(p.work)

// 3. 类里面的静态方法
// 实例方法必须 new 一个实例才可以使用，静态相当于默认就有
Person.getInfo = function () { return '我是静态方法' }
alert(Person.getInfo())
```

- Es5 继承（原型链继承、对象冒充继承、原型链+对象冒充组合继承）
    1. 对象冒充继承
    ``` javascript
    function Person() { 
        this.name='张三'
        this.run = function () { return this.name + '在奔跑' } 
    }
    Person.prototype.work = function () { return this.name + '在工作' }
    var p = new Person()
    // Web 类 继承 Person 类
    // 1. 对象冒充实现继承
    function Web() {
        Person.call(this) // 对象冒充实现继承
    }
    var w = new Web()
    console.info(w.run()) // 对象冒充可以继承构造函数的属性和方法
    // console.info(w.work()) // 但是无法继承原型链上的属性和方法

    ```
    
    2. 原型链继承
    ``` javascript
    function Person(name) { 
        this.name = name
        this.run = function () { return this.name + '' } 
    }
    Person.prototype.work = function () { return this.name + '在工作' }
    var p = new Person()
    // Web 类 继承 Person 类
    // 2. 原型链实现继承
    function Web(name) {
    }
    Web.prototype = new Person()
    var w = new Web()
    console.info(w.run()) // 可以继承构造函数的属性和方法   undefined在奔跑
    console.info(w.work()) // 可以继承原型链上的属性和方法 undefined在工作
    // 问题： 实例化子类的时候，无法给父类传参

    ```
   
    3. 原型链+对象冒充组合继承
    ``` javascript
    function Person(name) {
        this.name = name
        this.run = function () {
            return this.name + '在奔跑'
        }
    }
    Person.prototype.work = function () {
        return this.name + '在工作'
    }
    // 2. 原型链+对象冒充组合实现继承
    function Web(name) {
        Person.call(this, name)
    }
    Web.prototype = new Person() // 或者 Web.prototype = Person.prototype
    var w = new Web('zhangsan')
    console.info(w.run()) // 可以继承构造函数的属性和方法
    console.info(w.work()) // 可以继承原型链上的属性和方法

    ```
### 4.类(下) —— ts 中的类
- 类的定义   
```class``` 关键字
``` typescript
class Person {
    name:string;  // 属性，前面省略了 public 关键字【默认】
    constructor(name:string) { // 构造函数，实例化类的时候触发的方法
        this.name = name
    }
    run():void {
        console.info(`${this.name}在跑步`)
    }
}
// 调用
let p = new Person('小张')
p.run()
```

- 继承   
```extends``` 关键字， ```super``` 关键字
``` typescript
// 继承 Person
class worker extends Person {
    constructor(name:string){
        super(name)
    }
    // 方法先看子类是否有，然后父类
}
let w = new Web('李四')
console.log(w.run())

```

- 类里面的修饰符 - public,protected,private   
public: 公有 ， 全都可以访问【默认】   
protected： 保护 ， 类和子类可以访问     
private: 私有 ， 类可以访问   
![](./img/2.png)


- 静态属性或者静态方法  - static 关键字
``` typescript
class Person{
    public name:string;
    static a:number = 0;
    constructor(name:string) {
        this.name = name
    }
    run ():void{
        console.log(`${this.name}在奔跑`)
    }
    static print():void{ 
        // 静态方法无法直接调用类里的属性 ， static语法类似 C 语言
        // 当前类里面的全局存在
        console.info(`静态方法` + this.a++)
    }
}
Person.print()

```

- 抽象类  继承  多态   
1. 多态：父类定义一个方法不去实现，让继承它的子类去实现 ， 每个子类根据自己的特性去定义不同的表现   
多态属于继承

``` typescript
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
```
2. 抽象方法 - abstract 关键字   
ts 中的抽象类，是提供其他类继承的基类/父类，不能直接实例化   
```abstract```关键字来定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
作用： 抽象类和抽象方法用于定义标准

``` typescript
// 定义animal子类必须包含eat方法
abstract class animal { // 抽象类
    // 可以包含非抽象方法
    work() {

    }
    abstract eat(): any; // 抽象方法， 抽象方法只能在抽象类中定义
}
```
### 5.接口
- 属性类接口

- 函数类型接口

- 可索引接口

- 类类型接口

- 接口扩展