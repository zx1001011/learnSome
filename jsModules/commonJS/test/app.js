let module1 = require('./modules/module1')
let module2 = require('./modules/module2')
let module3 = require('./modules/module3')
let uniq = require('uniq')
let fs = require('fs')
module1.foo()
module2()
module3.foo()
console.log(module3.name)
console.log(uniq([1, 3, 1, 4, 3]))

fs.readFile('app.js', function (error, data) {
    console.log(data.toString())
})