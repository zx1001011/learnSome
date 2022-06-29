const REJECTED = 'REJECTED';
const FULFILLED = 'FULFILLED';
const PENDING = 'PENDING';
function isPromise(val) {
    if (typeof val === 'object' && val !== null || typeof val === 'function') {
        return typeof val.then === 'function';
    }
    return false;
}
const resolvePromise = (promise2, x) => {
    const { resolve, reject } = promise2;
    if (promise2 === x) return reject(new TypeError('Chaining cycle detected for promise #<Promise>'));
    if (typeof x === 'object' && x !== null || typeof x === 'function') {
        let called;
        try {
            const then = x.then;
            if (typeof then !== 'function') {
                resolve(x);
            } else {
                then.call(x, (res) => {
                    if (called) return;
                    called = true;
                    resolvePromise(promise2, res);
                }, (err) => {
                    if (called) return;
                    called = true;
                    reject(err);
                });
            }
        } catch (err) {
            if (called) return;
            called = true;
            reject(err);
        }
    } else {
        resolve(x);
    }
};
class Promise {
    constructor(executor) {
        this.status = PENDING; // Promise 的状态
        this.value = undefined; // 成功后的值
        this.reason = undefined; // 失败后的值
        this.onResolvedCallbacks = []; // 成功回调函数集合
        this.onRejectedCallbacks = []; // 失败回调函数集合
        const resolve = (value) => {
            if (value instanceof Promise) {
                return value.then(resolve, reject);
            }
            if (this.status === PENDING) {
                this.status = FULFILLED;
                this.value = value;
                this.onResolvedCallbacks.forEach(fn => fn());
            }
        };
        const reject = reason => {
            if (this.status === PENDING) {
                this.status = REJECTED;
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        };
        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val;
        onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };
        const promise2 = new Promise((resolve, reject) => {
            if (this.status === FULFILLED) {
                setTimeout(() => {
                    promise2.resolve = resolve;
                    promise2.reject = reject;
                    try {
                        const x = onFulfilled(this.value);
                        resolvePromise(promise2, x);
                    } catch (err) {
                        reject(err);
                    }
                }, 0);
            }
            if (this.status === REJECTED) {
                setTimeout(() => {
                    promise2.resolve = resolve;
                    promise2.reject = reject;
                    try {
                        const x = onRejected(this.reason);
                        resolvePromise(promise2, x);
                    } catch (err) {
                        reject(err);
                    }
                }, 0);
            }
            if (this.status === PENDING) {
                this.onResolvedCallbacks.push(() => {
                    setTimeout(() => { // 这里需要加上，不加上跑测试跑不通
                        promise2.resolve = resolve;
                        promise2.reject = reject;
                        try {
                            const x = onFulfilled(this.value);
                            resolvePromise(promise2, x);
                        } catch (err) {
                            reject(err);
                        }
                    });
                });
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        promise2.resolve = resolve;
                        promise2.reject = reject;
                        try {
                            const x = onRejected(this.reason);
                            resolvePromise(promise2, x);
                        } catch (err) {
                            reject(err);
                        }
                    });
                });
            }
        });
        return promise2;
    }
    catch(errCallback) {
        return this.then(null, errCallback);
    }
}
Promise.prototype.finally = function (callback) {
    return this.then(val => {
        return Promise.resolve(callback()).then(() => val);
    }, (err) => {
        return Promise.resolve(callback()).then(() => { throw err; });
    });
};

Promise.deferred = () => {
    const dfd = {};
    dfd.promise = new Promise((resolve, reject) => {
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
};
Promise.resolve = val => {
    return new Promise((resolve) => {
        resolve(val);
    });
};
Promise.reject = () => {
    return new Promise((_, reject) => {
        reject(val);
    });
};
Promise.all = promises => {
    return new Promise((resolve, reject) => {
        const res = [];
        let count = 0;
        const resolveRes = (index, data) => {
            res[index] = data;
            if (++count === promises.length) {
                resolve(res);
            }
        };
        for (let i = 0; i < promises.length; i++) {
            const current = promises[i];
            if (isPromise(current)) {
                current.then((data) => {
                    resolveRes(i, data);
                }, (err) => {
                    reject(err);
                });
            } else {
                resolveRes(i, current);
            }
        }
    });
}
Promise.race = (promises) => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            let current = promises[i];
            if (isPromise(current)) {
                current.then(resolve, reject);
            } else {
                resolve(current);
                break;
            }
        }
    });
}
Promise.promisify = fn => {
    return (...arg) => {
        return new Promise((resolve, reject) => {
            fn(...arg, (err, data) => {
                if (err) reject(err);
                resolve(data);
            });
        });
    }
};
module.exports = Promise;

// https://blog.csdn.net/weixin_43299180/article/details/122827147