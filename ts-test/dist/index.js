"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var str = "你好 ts";
// 2.函数
var fun1;
(function (fun1) {
    function getInfo(str) {
        if (typeof str === 'string') {
            return '我的名字是' + str;
        }
        else {
            return '我的年龄是' + str;
        }
    }
    // console.log(getInfo('张三')) // 我的名字是张三
    // console.log(getInfo(20)) // 我的年龄是20
    // console.log(getInfo(false)) // 语法报错
})(fun1 || (fun1 = {}));
// 3.类
var fun2;
(function (fun2) {
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        Person.prototype.run = function () {
            console.log(this.name + "\u5728\u5954\u8DD1");
        };
        Person.print = function () {
            // 静态方法无法直接调用类里的属性 ， static类似 C 语言
            console.info("\u9759\u6001\u65B9\u6CD5" + this.a++);
        };
        Person.a = 0;
        return Person;
    }());
    // Person.print()
    // Person.print()
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.eat = function () {
            console.log('吃的方法');
        };
        Animal.prototype.work = function () {
            console.log('工作的方法');
        };
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name) {
            return _super.call(this, name) || this;
        }
        Dog.prototype.eat = function () {
            return '主人已经准备好狗粮，快来吃饭！';
        };
        return Dog;
    }(Animal));
    // 抽象类
    // 定义animal子类必须包含eat方法
    var animal = /** @class */ (function () {
        function animal() {
        }
        // 可以包含非抽象方法
        animal.prototype.work = function () {
        };
        return animal;
    }());
    var cat = /** @class */ (function (_super) {
        __extends(cat, _super);
        function cat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        cat.prototype.eat = function () {
            console.log('主人准备了鱼和老鼠~');
        };
        return cat;
    }(animal));
    var c = new cat();
    // c.eat()
})(fun2 || (fun2 = {}));
// 5. 接口
var fun3;
(function (fun3) {
    // 属性接口
    function printLabel(labelInfo) {
        // 对传参 labelInfo 进行了规定，必须要有 string类型的 label属性
    }
    // 规定形参
    function print(label) {
        // console.info(label.name + label.label) // 语法报错
        // 需要严格遵守规则
    }
    var obj = {
        name: 1,
        label: 'hah'
    };
    print(obj); // 可以有其他属性
    print({ label: 'jajja' }); // 只能有 label 属性，否则报错
    var md5 = function (k, v) { return k + v; };
    var arr = ['aaa', 'bbb'];
    var obj1 = { name: 1, k: 2 };
    var Dog1 = /** @class */ (function () {
        function Dog1(name) {
            this.name = name;
        }
        Dog1.prototype.eat = function () {
            return this.name + "\u5728\u5403\u996D";
        };
        return Dog1;
    }());
    var d1 = new Dog1('嘿嘿');
    var Programmer = /** @class */ (function () {
        function Programmer(name) {
            this.name = name;
        }
        Programmer.prototype.coding = function () {
            return this.name + '在敲代码中...';
        };
        return Programmer;
    }());
    var Web = /** @class */ (function () {
        function Web() {
        }
        Web.prototype.eat = function () { };
        Web.prototype.work = function () { };
        return Web;
    }());
    var Web1 = /** @class */ (function (_super) {
        __extends(Web1, _super);
        function Web1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Web1.prototype.eat = function () { };
        Web1.prototype.work = function () { };
        return Web1;
    }(Programmer));
    var web1 = new Web1('zhang');
    // console.info(web1.coding())
})(fun3 || (fun3 = {}));
// 6. 泛型
var fun4;
(function (fun4) {
    // 泛型： 传入类型灵活， 函数增强复用性， 拒绝不必要的冗余代码
    // 泛型方法
    function getPerson(name) {
        return name;
    }
    getPerson(111);
    // T(任意字符) 表示类型，具体由方法调用的时候决定
    function getPerson1(name, key) {
        console.log(name + key);
        return name + key;
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
})(fun4 || (fun4 = {}));
// 9. 命名空间
var fun7;
(function (fun7) {
    var PersonA;
    (function (PersonA) {
        var Dog = /** @class */ (function () {
            function Dog(name) {
                this.name = name;
            }
            Dog.prototype.eat = function () {
                console.log('小狗' + this.name + '在吃饭');
            };
            return Dog;
        }());
        PersonA.Dog = Dog;
        var H;
        (function (H) {
            var name = 'jaj';
        })(H = PersonA.H || (PersonA.H = {}));
    })(PersonA || (PersonA = {}));
    var dog = new PersonA.Dog('花花');
    dog.eat();
})(fun7 || (fun7 = {}));
