var a = 1
var a = 2
console.log(a)

// var 没有块级作用域
if (true) {
    var b = 12
}
console.log(b)

const c = 1
// const c = 2
let d = 2
d = 3

if (true) {
    let f = 12
}
// console.log(f)


var x = 1
var y = 2
[y, x] = [x, y]
console.log(x)
console.log(y)