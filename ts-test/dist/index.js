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
Person.print();
Person.print();
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
c.eat();
