const p1 = new Promise(function (resolve, reject) {
    console.log(new Date)
    console.log('p1');
    setTimeout(() => resolve('after 3 s from p1'), 0)
    console.log('还会执行我吗？')
})

const p2 = new Promise(function (resolve, reject) {
    console.log(new Date)
    console.log('p2');
    setTimeout(() => resolve(p1), 0)
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

// a
setTimeout(function () {
    for (var i = 0; i < 100000000; i++) { }
    console.log('timer a');
}, 0)

// b
for (var j = 0; j < 5; j++) {
    console.log(j);
}

// c
setTimeout(function () {
    console.log('timer b');
}, 0)

// d
function waitFiveSeconds() {
    var now = (new Date()).getTime();
    while (((new Date()).getTime() - now) < 5000) { }
    console.log('finished waiting');
}

// e
document.addEventListener('click', function () {
    console.log('click');
})

// f
console.log('click begin');

// g
waitFiveSeconds();



/**
 * 执行步骤：
 * 栈（同步）： 插入 b, f, d
 * 消息队列中： e(点击事件触发时回调函数加入队列)
 *         a, c 回调依次立即加入队列，但是要等到同步和队列中事件清空，才会执行，所以其设定的事件可能没有用，
 *              并且，如果遇到DOM操作可能还不会立即执行
 *
 * ...加入Promise
 * promise创建时立即执行，其中的 异步任务（耗时操作、鼠标点击、定时任务、网络请求等）
 * 会根据回调函数的触发而推入消息队列中，
 * .then是在回调函数中执行
 */