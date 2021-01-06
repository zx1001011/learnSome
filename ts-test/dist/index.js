"use strict";
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
