/**
 * promise 是用来放异步操作的容器，语法上是一个对象，可以获取、
 * 异步操作的消息
 * 1）有三种状态 pending（进行中）、fulfilled（已成功）和rejected（已失败）
 *                                     |                 |
 *                                  resolve            reject
 *    resolve和reject是.then中的回调，可以手动控制执行完的状态（看第四条）
 *    如果Promise 状态已经变成resolved，异步操作再抛出错误是无效的。
 *    ^ Promise 的状态一旦改变，就永久保持该状态，不会再变了
 * 2) 异步操作进行中，无法获知其中的状态;
 * 3) Promise 新建后就会立即执行，一旦创建Promise, 就无法终止;
 *    then方法指定的回调函数(resolve, reject)，将在当前脚本所有同步任务执行完才会执行
 *   （事件循环机制），即在前一个返回Promise对象之后，选择then中的回调，回调触发进入消息
 *     队列,等栈中的任务清空，再依次执行
 * 4）resolve 和 reject 函数只能调用一个，可以发现reject()方法的作用，等同于异步操作中
 *    抛出错误
 * 5) 调用resolve或reject并不会终结 Promise 的参数函数的执行。
 * 
 *    一般来说，调用resolve或reject以后，Promise 的使命就完成了，后继操作应该放到then
 *    方法里面，而不应该直接写在resolve或reject的后面。所以，最好在它们前面加上return
 *    语句，这样就不会有意外。
 * 6) Promise.prototype.then()
 *    作用: 为 Promise 实例添加状态改变时的回调函数
 *    返回: 一个新的Promise实例
 *    ^ 可以采用链式写法，即then方法后面再调用另一个then方法。同步等待状态变化，再选择
 *    相应状态执行
 * 7) Promise.prototype.catch()
 *    即.then(null, rejection)或.then(undefined, rejection)的别名，
 *    作用：用于指定发生错误时的回调函数。
 *    返回: 一个新的Promise实例,因此后面还可以接着调用then()方法
 *    ^ then方法出现的错，也会被catch捕获, -> Promise 对象的错误具有“冒泡”性质，会一
 *    直向后传递，直到被捕获为止。
 * 8) Promise 内部的错误不会影响到 Promise 外部的代码，
 *    通俗的说法就是“Promise 会吃掉错误”。
 *    ^ promise 中异步操作状态变成rejected(抛出错误)，promise外的代码任然执行，不受影响
 * 9) Promise.prototype.finally()方法
 *    作用：指定不管 Promise 对象最后状态如何，都会执行的操作。
 *    使用： promise
 *            .then(result => {···})
 *            .catch(error => {···})
 *            .finally(() => {···});
 *      finally方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底
 *      是fulfilled还是rejected。这表明，finally方法里面的操作，应该是与状态无关的，不依
 *      赖于 Promise 的执行结果。finally本质上是then方法的特例。如果不使用finally方法，同
 *      样的语句需要为成功和失败两种情况各写一次。
 *      返回：原来异步操作返回的值
 *  10) Promise.all()方法
 *      作用：用于将多个 Promise 实例，包装成一个新的 Promise 实例。
 *      const p = Promise.all([p1, p2, p3]);
 *      p的状态由p1、p2、p3决定, 同 fulfilled则fulfilled,否则rejected
 *
 *  11) Promise.race()方法
 *      作用：将多个 Promise 实例，包装成一个新的 Promise 实例。
 *      只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。
 *      那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。
 *      const p = Promise.race([p1, p2, p3]);
 *  12) Promise.allSettled()方法
 *      作用：不关心异步操作的结果，只关心这些操作有没有结束。
 *      描述：接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。
 *      只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，
 *      包装实例才会结束。
 *        const resolved = Promise.resolve(42);
 *        const rejected = Promise.reject(-1);
 *
 *        const allSettledPromise = Promise.allSettled([resolved, rejected]);
 *
 *        allSettledPromise.then(function (results) {
 *        console.log(results);
 *        });
 *        [
 *           { status: 'fulfilled', value: 42 },
 *           { status: 'rejected', reason: -1 }
 *        ]
 *  13) Promise.any() 与 race()相似，返回状态同rejected则rejected，否则fulfilled
 *  14) Promise.resolve()
 *      作用： 将现有对象转为 Promise 对象
 *      参数：
 *      a. Promise 实例  -> 不做任何修改、原封不动地返回这个实例。
 *      b. thenable对象(具有then方法的对象) -> 转为 Promise 对象，然后就立即执行thenable对象的then方法
 *      c. 参数不是具有then方法的对象，或根本就不是对象 -> 返回一个新的 Promise 对象，状态为resolved
 *      d. 不带有任何参数 -> 直接返回一个resolved状态的 Promise 对象   =>
 *         立即resolve()的 Promise 对象，是在本轮“事件循环”（event loop）的结束时执行，而不是在下一轮“事件循环”的开始时。
 *  15) Promis.reject()
 *      返回： 返回一个新的 Promise 实例，该实例的状态为rejected
 *      注意，Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。这一点与Promise.resolve方法不一致。
 *  16) Promise.try() 不知道或者不想区分，函数f是同步函数还是异步操作，但是想用 Promise 来处理它。
 *      由于Promise.try为所有操作提供了统一的处理机制，所以如果想用then方法管理流程，最好都用Promise.try包装一下。
 *      事实上，Promise.try就是模拟try代码块，就像promise.catch模拟的是catch代码块。
 * * /
// 使用方法
const promise = new Promise(function (resolve, reject) {
    // ... some code
    console.log("1")
    if (true) {
        resolve('>^<'); // success
    } else {
        reject('TT'); // failure
    }
}).then(function (value) {
    // success
    console.log(value);
    console.log('success');
}, function (error) {
    // failure
    console.log(error);
    console.log('failure');
});


/**
 * 上面代码中，p1和p2都是 Promise 的实例，
 * 但是p2的resolve方法将p1作为参数，即一
 * 个异步操作的结果是返回另一个异步操作。
 * 
 * 因为p2是1s后返回的p1对象，所以p2状态完全看p1在3s后执行的状态，
 * 此中是reject，调用catch
 */
const p1 = new Promise(function (resolve, reject) {
    console.log(new Date)
    console.log('p1');
    setTimeout(() => resolve('after 3 s from p1'), 3000)
    console.log('还会执行我吗？')
})

const p2 = new Promise(function (resolve, reject) {
    console.log(new Date)
    console.log('p2');
    setTimeout(() => resolve(p1), 1000)
    console.log('还会执行我吗？')
})

p2.then(result => {
    console.log(new Date)
    console.log('success');
    console.log(result)
}).catch(error => {
    console.log(new Date)
    console.log('failure');
    console.log(error)
})
// return 之后，后面的语句不会执行
new Promise((resolve, reject) => {
    return resolve(1);
    // 后面的语句不会执行
    console.log(2);
}).then(result => {
    console.log('success');
    console.log(result)
})
// Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。
const someAsyncThing = function () {
    return new Promise(function (resolve, reject) {
        // 下面一行会报错，因为x没有声明
        resolve(x + 2);
    });
};

someAsyncThing().then(function () {
    console.log('everything is great');
});

setTimeout(() => { console.log(123) }, 2000);

// 立即resolve的Promise对象，是在本轮事件循环的结尾执行，
// 以下顺序是 one two three
setTimeout(function () {
    console.log('three');
}, 0);

Promise.resolve().then(function () {
    console.log('two');
});

console.log('one');

// Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。这一点与Promise.resolve方法不一致。
const thenable = {
    then(resolve, reject) {
        reject('出错了');
    }
};

Promise.reject(thenable)
    .catch(e => {
        console.log(e === thenable)
    })
// 与 Promise.reject() 不一样
// Promise.resolve方法会将这个对象转为 Promise 对象，然后就立即执行thenable对象的then方法
let thenable = {
    then: function (resolve, reject) {
        resolve(42);
    }
};

let p1 = Promise.resolve(thenable);
p1.then(function (value) {
    console.log(value);  // 42
});