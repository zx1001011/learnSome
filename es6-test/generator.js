/**
 * Generator：一种异步编程解决方案
 * Generator：状态机，封装了多个内部状态
 * 执行Generator函数返回一个Iterator对象
 * 正常函数前面加*号就是一个Generator函数
 * 内部用yield来标记状态
 * Generator函数调用不会执行函数，而是返回一个指向内部状态的指针对象
 * Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。
 * 每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象。
 * value属性表示当前的内部状态的值，是yield表达式后面那个表达式的值；
 * done属性是一个布尔值，表示是否遍历结束。
 * yield表达式后面的表达式，只有当调用next方法、内部指针指向该语句时才会执行
 * Generator 函数可以不用yield表达式，这时就变成了一个单纯的暂缓执行函数。
 * yield表达式只能用在 Generator 函数里面，用在其他地方都会报错。
 * '惰性求值'函数
 */

function* helloGenerator() {
    console.log('hello')
    yield 'hello'
    console.log('generator')
    yield 'generator'
    console.log('ok')
    return 'ok'
}
let t = helloGenerator(); // t是一个指向内部状态的指针对象
console.log(t)
console.log(t.next()) // {value: 'hello', done: false}
console.log(t.next()) // {value: 'generator', done: false}
console.log(t.next()) // {value: 'ok', done: true}
// Generator 是分段执行的。yield is like a pause button.
// Generator next执行完了，t指针指向最后的对象，

/**
 * for...of 循环:
 * 可以自动遍历 Generator 函数运行时生成的Iterator对象，且此时不再需要调用next方法。
 * 好处：
 * 利用for...of循环，可以写出遍历任意对象（object）的方法。原生的 JavaScript 对象没有遍历接口，无法使用for...of循环，通过 Generator 函数为它加上这个接口，就可以用了。
 * 
 * 本质：
 * for...of循环，扩展运算符（...）、解构赋值和Array.from方法内部调用的，都是遍历器接口，都可以将 Generator 函数返回的 Iterator 对象，作为参数。
 */
for (let v of t) {
    console.log(v)  // 遍历不到return中的内容
}
/**
 * yield 表达式:
 * 1) yield 传参和返回参数
 *    yield 1 返回参数1
 *    let tmp = yield 可以从执行的.next(10)中获取参数，即tmp = 10
 *    如果next未传值，tmp为undefined
 * 2) yield表达式如果用在另一个表达式之中，必须放在圆括号里面。
 *     console.log('Hello' + (yield 123));
 *    yield表达式用作函数参数或放在赋值表达式的右边，可以不加括号
 * yield* 表达式：
 * 1）用来在一个 Generator 函数里面执行另一个 Generator 函数。
 *    yield* foo() <=> for (let v of foo()){}  foo()返回一个遍历器对象
 *    yield*后面的 Generator 函数（没有return语句时），等同于在 Generator 函数内部，部署一个for...of循环。
 * 2）如果yield*后面跟着一个数组，由于数组原生支持遍历器，因此就会遍历数组成员。
 *    实际上，任何数据结构只要有 Iterator 接口，就可以被yield*遍历。
 *    yield*命令可以很方便地取出嵌套数组的所有成员。
 *    =》 对算法有很大妙用（节省代码），只要有遍历... 比如：遍历完全二叉树
 */
/**
 * 与 Iterator 接口的关系:
 * Generator 函数就是遍历器生成函数, Generator 函数执行后，返回一个遍历器对象。
 */
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};

console.log([...myIterable]) // [1, 2, 3]
function* gen() {
    // some code
    console.log('gen')
}

var g = gen();

console.log(g[Symbol.iterator]() === g)
// true

/**
 * next 方法参数：
 *  Generator 函数从暂停状态到恢复运行，它的上下文状态（context）是不变的。
 * 结合反引号字符串模板
 * console.log(`2. ${yield}`);
 */
/**
 * next()、throw()、return() 的共同点:本质上是同一件事,都是让 Generator 函数恢复执行，并且使用不同的语句替换yield表达式
 * next()是将yield表达式替换成一个值
 * throw()是将yield表达式替换成一个throw语句。
 * return()是将yield表达式替换成一个return语句。
 */
/**
 * Generator 函数的this:
 * Generator 函数的实例，也继承了 Generator 函数的prototype对象上的方法
 * 1） 生成一个空对象，使用call方法绑定 Generator 函数内部的this。
 *      直接在Generator函数内部设置this的属性是没有用的，外部拿不到
 * 2）也不能跟new命令一起用，会报错
 *
 * 针对执行的是遍历器对象f，但是生成的对象实例是obj，将两者统一？
 * 1）： 一个办法就是将obj换成F.prototype。
 * 2）： 再将F改成构造函数，就可以对它执行new命令了。
 */
function* gen() {
    this.a = 1;
    yield this.b = 2;
    yield this.c = 3;
}

function F() {
    return gen.call(gen.prototype);
}

var f = new F();

f.next();  // Object {value: 2, done: false}
f.next();  // Object {value: 3, done: false}
f.next();  // Object {value: undefined, done: true}

f.a // 1
f.b // 2
f.c // 3

/**
 * 应用：
 * 针对Generator的特性进行运用
 * 1）异步操作的同步化表达
 * 2) 控制流管理: 只适合同步操作
 * 3）部署 Iterator 接口
 * 4）作为数据结构: 可以看作是一个数组结构
 */