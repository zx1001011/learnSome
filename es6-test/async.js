/**
 * async 函数（ES2017)
 *  概念： 真正意义上解决异步回调的问题，同步流程表达异步操作
 *  本质： Generator的语法糖（优化）
 *  语法：
 *      async function fun() {
 *          await 异步操作;
 *          await 异步操作;
 *      }
 *  特点：
 *    1. 无需手动调用next方法，遇到await等待，当前的异步操作完成后往下执行
 *    2. 返回Promise对象，可以用then方法进行下一步
 *    3. async 取代 Generator函数的星号，await取代Generator的yield
 *    4. 语义上更明确，使用简单
 *  实现原理： 将 Generator 函数和自动执行器，包装在一个函数里。
 * */