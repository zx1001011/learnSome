1. 阻塞与非阻塞
阻塞： 按照代码顺序执行
非阻塞：不按照代码顺序执行

``` 
console.log('1 sync&async!')
var fs = require('fs')

var data = fs.readFileSync('callback.txt')  // 阻塞代码
console.log(data.toString())
console.log('readFileSync读取完毕！')
//非阻塞
fs.readFile('callback.txt', function (err, data) {
    if (err) return console.error(err);
    console.log('readFile')
    console.log(data.toString());
});
console.log('读取完毕！')
console.log('1 sync&async!')
```

2.事件循环
EventEmitter：
on 函数用于绑定事件函数，emit 属性用于触发一个事件
事件监听器回调函数被先后调用

大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。

``` 
console.log('2 events！')
var events = require('events');
const { EventEmitter } = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('myclick', function () {
    console.log('you emit myclick')
});
eventEmitter.emit('myclick')
eventEmitter.on('myclick', function (arg1, arg2) {
    console.log('listener1', arg1, arg2);
});
eventEmitter.on('myclick', function (arg1, arg2) {
    console.log('listener2', arg1, arg2);
});
eventEmitter.emit('myclick', 'arg1 参数', 'arg2 参数');
console.log(eventEmitter.listenerCount('myclick'))
console.log('2 events！')
```


3. 缓冲区(buffer)
用来创建一个专门存放二进制数据的缓存区(TCP流或文件流时，必须使用到二进制数据)
创建方式可以支持多种编码（参数设置）
读取、copy、compare、slice等操作接口
与json互转
``` 
/** Buffer 与字符编码``` 
const buf = Buffer.from('runoob', 'ascii');

// 输出 72756e6f6f62
console.log(buf.toString('hex'));

// 输出 cnVub29i
console.log(buf.toString('base64'));
``` 

4. 流(stream)
是一个抽象接口
有四种流类型：
Readable - 可读操作。
Writable - 可写操作。
Duplex - 可读可写操作.
Transform - 操作被写入数据，然后读出结果。

``` 
// 所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：data\end\error\finish
console.log('4. stream about eventEmitter')
var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('callback.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function (chunk) {
    data += chunk;
});

readerStream.on('end', function () {
    console.log(data);
});

readerStream.on('error', function (err) {
    console.log(err.stack);
});
console.log('4. stream about eventEmitter')
``` 
```
//管道流---管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。
console.log("4. stream about pipe");
var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('callback.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取 callback.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");
console.log("4. stream about pipe");
```

```
// 链式流---链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。
console.log("4. stream about 链式流");
var fs = require("fs");
var zlib = require('zlib');

// 压缩 callback.txt 文件为 callback.txt.gz
fs.createReadStream('callback.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('callback.txt.gz'));

console.log("文件压缩完成。");
console.log("4. stream about 链式流");
```

5. 模块系统
为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统。模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。换言之，一个 Node.js 文件就是一个模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展。
暴露模块： exports.xxx = obj
          module.exports = obj
如果要对外暴露属性或方法，就用 exports 就行，要暴露对象(类似class，包含了很多属性和方法)，就用 module.exports
引入模块： var xxx = require(xxx)
存在 4 类模块（原生模块和3种文件模块）

6. 函数function
Node.js 中函数的使用与 JavaScript 类似

7. 路由(route)
要为路由提供请求的 URL 和其他需要的 GET 及 POST 参数，随后路由需要根据这些数据来执行相应的代码。
因此，我们需要查看 HTTP 请求，从中提取出请求的 URL 以及 GET/POST 参数。这一功能应当属于路由还是服务器（甚至作为一个模块自身的功能）确实值得探讨，但这里暂定其为我们的HTTP服务器的功能。
我们需要的所有数据都会包含在 request 对象中，该对象作为 onRequest() 回调函数的第一个参数传递。但是为了解析这些数据，我们需要额外的 Node.JS 模块，它们分别是 url 和 querystring 模块。
url.parse(request.url).pathname/query

``` 
console.log("7. analysis route");
var url = require('url');
console.log(url.parse('http://localhost:8888/question').pathname)
console.log(url.parse('http://localhost:8888/question?name=hh&age=1').query)
console.log("7. analysis route");
```

8. 全局对象（global)
global 最根本的作用是作为全局变量的宿主。按照 ECMAScript 的定义，满足以下条 件的变量是全局变量：
在最外层定义的变量；
全局对象的属性；
隐式定义的变量（未定义直接赋值的变量）
有类似以下：
__filename:当前正在执行的脚本的文件名
__dirname:当前执行脚本所在的目录
setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。返回一个代表定时器的句柄值。
->clearTimeout(t)
setInterval(cb, ms), clearInterval(t)
console
process


``` 
console.log("8. global value");
console.log(__filename)
console.log(__dirname)
console.log(process.pid)
console.log("8. global value");
```

9. 常用工具 [util](https://nodejs.org/api/util.html)
util 是一个Node.js 核心模块，提供常用函数的集合，用于弥补核心 JavaScript 的功能 过于精简的不足。

``` 
console.log("9. util");
const util = require('util');
async function fn() {
    return 'hello world';
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
    if (err) throw err;
    console.log(ret);
});
console.log("9. util");
```

10. 文件系统
提供一组类似 UNIX（POSIX）标准的文件操作API
fs模块：
api: readFile、readFileSync、open、close、stat等等类似c语言

11. GET/POST请求
get: response.end(util.inspect(url.parse(req.url, true)));
post:
``` node
// 定义了一个post变量，用于暂存请求体的信息
    var post = '';

    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    req.on('data', function(chunk){
        post += chunk;
    });

    // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    req.on('end', function(){
        post = querystring.parse(post);
        res.end(util.inspect(post));
    });
``` 


12. Node.js 工具模块
    在 Node.js 模块库中有很多好用的模块。接下来我们为大家介绍几种常用模块的使用：
    1	OS 模块
        提供基本的系统操作函数。
    2	Path 模块
        提供了处理和转换文件路径的工具。
    3	Net 模块
        用于底层的网络通信。提供了服务端和客户端的的操作。
    4	DNS 模块
        用于解析域名。
    5	Domain 模块
        简化异步代码的异常处理，可以捕捉处理try catch无法捕捉的。

13. web模块
搭建web服务器：http.createServer().listen()
搭建web客户端：http.request()

14. express (必学)
官网：[http://expressjs.com/](http://expressjs.com/)
API：[http://expressjs.com/zh-cn/4x/api.html](http://expressjs.com/zh-cn/4x/api.html)
Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。
使用 Express 可以快速地搭建一个完整功能的网站。
Express 框架核心特性：
可以设置中间件来响应 HTTP 请求。
定义了路由表用于执行不同的 HTTP 请求动作。
可以通过向模板传递参数来动态渲染 HTML 页面。
安装expres: npm install express --save(cnpm)
    需要一起安装：cnpm install body-parser --save
                 cnpm install cookie-parser --save
                 cnpm install multer --save
使用：
``` node
//express_demo.js 文件
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser())
// 设置静态文件资源
app.use('/public', express.static('public'));
// request 和 response 对象有很多api
app.get('/', function (req, res) {
   res.send('Hello World');
})
ar server = app.listen(8081, function () {}
```
可以实现post\get\文件上传\cookies管理

15.restful API
架构风格
是一些约定与约束

16.Node.js 多进程
我们都知道 Node.js 是以单线程的模式运行的，但它使用的是事件驱动来处理并发，这样有助于我们在多核 cpu 的系统上创建多个子进程，从而提高性能。

每个子进程总是带有三个流对象：child.stdin, child.stdout 和child.stderr。他们可能会共享父进程的 stdio 流，或者也可以是独立的被导流的流对象。

Node 提供了 child_process 模块来创建子进程，方法有：

exec - child_process.exec 使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回。

spawn - child_process.spawn 使用指定的命令行参数创建新进程。

fork - child_process.fork 是 spawn()的特殊形式，用于在子进程中运行的模块，如 fork('./son.js') 相当于 spawn('node', ['./son.js']) 。与spawn方法不同的是，fork会在父进程与子进程之间，建立一个通信管道，用于进程之间的通信。
