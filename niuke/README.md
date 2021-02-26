<!-- 错题生题记录 -->
# 简单回顾旅程

## 日记表格

## 记录
| 序号 | 时间 | 题目数量 | 知识点 | 通过率 | 题目内容 | 
| ---- | ---- | --- | --- | --- | --- |
| 1 | 2021.2.24 | 10 | js | 0.8 | js基础 | 
| 2 | 2021.2.25 | 10 | js | 0.8 | js、css 基础 | 
| 

## 内容

### 2021.2.24 
1. for ... in    
for-in 语句，用来枚举对象的属性。
for-in 语句能够枚举对象的自定义属性和原型链属性，而 hasOwnProperty 只能获取自定义的属性
for i in arr 在数组中 i 为 索引  

2. == 号, null 与 undefined
![](./img/1.png)    
需要注意的是 null 与 undefined 在与其他数相等运算时不进行类型转换       
undefined 和 null 与任何有意义的值比较返回的都是false，但是 null 与 undefined 之间互相比较返回的是 true。

3. 浅拷贝函数 slice    
Slice 方法能对数组进行浅拷贝，不能实现深拷贝。    
splice, sort, push, pop 等会改变原数组。 

4. Math.round 函数  
Math.round(num) num 小数大于或等于5的话 朝大的方向 进一(负数的话朝 0 为大数)

    其他补充：

    floor  下取整   
    ceil   上取整   
    random   生成随机数 0 - 1    
    abs(x)  返回 x 的绝对（正）值        

5. promise 与 setTimeout 的执行顺序   
总体上说：   
先执行同步的任务  
->  
执行异步任务 (其中异步任务分为宏任务和微任务，微任务优先级高于宏任务。promise.then 执行的微任务,setTimeout 执行的是宏任务)    
Promise定义之后便会立即执行, promise.then() 是 微任务，会在当前轮事件循环结束前执行；
setTimeout 是 宏任务，在下一轮事件循环执行   

    *随便找了个博客讲解：
    https://www.cnblogs.com/sunmarvell/p/9564815.html* 

6. 静态语言与动态语言的理解   
静态语言（强类型语言）   
静态语言是在编译时变量的数据类型即可确定的语言，多数静态类型语言要求在使用变量之前必须声明数据类型。 
例如：C++、Java、Delphi、C#等。    
动态语言（弱类型语言）        
动态语言是在运行时确定数据类型的语言。变量使用之前不需要类型声明，通常变量的类型是被赋值的那个值的类型。 
例如PHP/ASP/Ruby/Python/Perl/ABAP/SQL/JavaScript/Unix Shell等等。

7. javascript异步模式的编程    
“同步模式”和“异步模式”：    
（1）同步模式：就是后一个任务等待前一个任务结束，然后再执行，程序的执行顺序与任务的排列顺序是一致的、同步的。      
（2）异步模式：完全不同，每一个任务有一个或多个回调函数（callback），前一个任务结束后，不是执行后一个任务，而是执行回调函数，后一个任务则是不等前一个任务结束就执行，所以程序的执行顺序与任务的排列顺序是不一致的、异步的。       
JavaScript中实现异步编程模式的4种方法,回调函数、事件监听、发布/订阅、Promises对象：      
（1）回调函数：这是异步编程最基本的方法，优点是简单、容易理解和部署，缺点是不利于代码的阅读和维护，各个部分之间高度耦合（Coupling），流程会很混乱，而且每个任务只能指定一个回调函数。    
例：假定有两个函数f1和f2，后者等待前者的执行结果，如果f1是一个很耗时的任务，可以考虑改写f1，把f2写成f1的回调函数。   
（2）事件监听：任务的执行不取决于代码的顺序，而取决于某个事件是否发生。优点是比较容易理解，可以绑定多个事件，每个事件可以指定多个回调函数，而且可以”去耦合”（Decoupling），有利于实现模块化。缺点是整个程序都要变成事件驱动型，运行流程会变得很不清晰。    
例：为f1绑定一个事件，当f1发生done事件，就执行f2。   
（3）发布/订阅：我们假定，存在一个”信号中心”，某个任务执行完成，就向信号中心”发布”（publish）一个信号，其他任务可以向信号中心”订阅”（subscribe）这个信号，从而知道什么时候自己可以开始执行。这就叫做”发布/订阅模式”（publish-subscribe pattern），又称”观察者模式”（observer pattern）。    
这种方法的性质与”事件监听”类似，但是明显优于后者。因为我们可以通过查看”消息中心”，了解存在多少信号、每个信号有多少订阅者，从而监控程序的运行。    
（4）Promises对象：是CommonJS工作组提出的一种规范，目的是为异步编程提供统一接口。简单说，它的思想是，每一个异步任务返回一个Promise对象，该对象有一个then方法，允许指定回调函数。回调函数变成了链式写法，程序的流程可以看得很清楚，而且有一整套的配套方法，可以实现许多强大的功能。    
例：f1的回调函数f2，f1().then(f2);   

8. 表达式的值为0 ？
 - (()=>{}).length    
 (()=>{}).length; 获取方法形参个数，形参为0
 - 1 & 2       
 1=0001 2=0010  按位与运算，同为1才为1，否则返回0
 - +[]     
 +[] 隐式类型转换，因为[]是对象，所以toPrimitive->valueOf->toString为''，结果就是+''===0
 - [1,2,-3].reduce((a, b) => a - b, 0)        
  reduce对数组中的每个元素执行一个reducer函数(升序执行)，将其结果汇总为单个返回值。a为累计器累计回调的返回值，b为数组的每一项元素，传入初始值0->0-(1)->(-1)-2->(-3)-(-3)->0    

### 2021.2.25
1. 字符串相加 、'+'、'-'
    - console.log(1+ "2"+"2");   
    做加法时要注意双引号，当使用双引号时，JavaScript认为是字符串，字符串相加等于字符串合并。
    因此，这里相当于字符串的合并，即为122.
    - console.log(1+ +"2"+"2");   
    第一个+"2"中的加号是一元加操作符，+"2"会变成数值2，因此1+ +"2"相当于1+2=3.
    然后和后面的字符串“2”相合并，变成了字符串"32".
    - console.log("A"- "B"+"2");    
    "A"-"B"的运算中，需要先把"A"和"B"用Number函数转换为数值，其结果为NaN，在剪发操作中，如果有一个是NaN，则结果是NaN，因此"A"-"B"结果为NaN。
    然后和"2"进行字符串合并，变成了NaN2.
    - console.log("A"- "B"+2);    
    根据上题所述，"A"-"B"结果为NaN，然后和数值2进行加法操作，在加法操作中，如果有一个操作数是NaN，则结果为NaN。

2. instanceof、=== 、==
    - instanceof 运算符希望左操作数是一个对象，右操作数表示对象的类（初始化对象的构造函数）。如果左侧的对象是右侧对象的实例，返回true，否则返回false。
    例如：计算 o instanceof f  
    首先计算f.prototype，然后在原型链中查找o，找到返回true

    - === 严格相等运算符：首先计算其操作数的值，然后比较这两个值，比较过程中没有任何类型转换

    - == 相等运算符：如果两个操作数不是同一类型，那么会尝试进行一些类型转换，然后进行比较   
    1)尽管null和undefined是不同的，但它们都表示“值的空缺”，两者往往可以互换，因此==运算符认为两者是相等的   
    2)NaN表示非数字值，特殊之处：它和任何值都不相等，包括自身。判断NaN的方法：x!=x返回true

3. xx is not defined 报错   
    本 scope(作用域) 内找不到 xx, 就会报错

4. Ajax 的 XMLHttpRequest 对象   
    Ajax不是新的编程语言，而是一门提供网页局部刷新的技术。    
    Ajax最大的优点是在不重新加载整个页面的情况下，与服务器交换数据并更新部分网页内容。    
    Ajax技术核心就是 XMLHttpRequest 对象。    
    Ajax技术的工作原理：*分为3步*    
    1）创建Ajax对象：```var xhr = new XMLHttpRequest()```;
    2）xhr 发送请求：```xhr.open('get','test.html','true');xhr.send();```    

    3）xhr获取响应：
    ```
    xhr.onreadystatechange = function(){
        if(xhr.readystate == 4){//请求的状态码
            /*
            0：请求还没有建立（open执行前）
            1：请求建立了还没发送（执行了open）
            2：请求正式发送（执行了send）
            3：请求已受理，有部分数据可以用，但还没有处理完成
            4：请求完全处理完成
            */
            alert(xhr.responseText);//返回的数据
        }
    }
    ```

    get 的 ajax 请求的代码：
    ```
    function loadXMLDoc()
    {
        var xmlhttp;
        if (window.XMLHttpRequest){
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else { // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function(){
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
                document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/ajax/demo_get.asp",true);
        xmlhttp.send();
    }```

5. enum 是 ts 中的语法    
   es6 中 [generator](https://es6.ruanyifeng.com/#docs/generator)   
   Generator 函数是ES6的一种异步编程解决方案    
 
6. 函数和变量声明提前，然后赋值    
    ```
    var x = foo();
    var foo=function foo() {...}
    ```
    语句中变量的声明会提升，但是定义不会提升。以上代码等同于：

    ```
    var x;
    var foo;
    x = foo();
    foo = function foo() {...}
    ```
    当执行到 x = foo() 时，由于foo未被定义为函数，所以会返回

    ```TypeError: foo is not a function```


### 2021.2.26
1. ECMAScript 中有 5 中简单数据类型（也称为基本数据类型）： Undefined、Null、Boolean、Number 和 string。还有一种复杂数据类型——Object。（摘自高级程序设计）

2. this 指向问题：   
JS中this关键字， 它代表函数 <strong>运行</strong> 时，自动生成的一个内部对象，只能在函数内部使用。   
this有四种情况:    
1) 当在函数调用的时候指向widow   
2) 当方法调用的时候指向调用对象    
3) 当用apply和call上下文调用的时候指向传入的第一个参数    
4) 构造函数调用指向实例对象    

3. innerHTML 和 innerText 的区别
https://blog.csdn.net/shueiyuan1983/article/details/52960950

4. call、apply、bind   
菜鸟教程的解释：https://www.runoob.com/w3cnote/js-call-apply-bind.html     
call 、bind 、 apply 这三个函数的第一个参数都是 this 的指向对象，第二个参数差别就来了：    
call 的参数是直接放进去的，第二第三第 n 个参数全都用逗号分隔     
apply 的所有参数都必须放在一个数组里面传进去      
bind 除了返回是函数以外，它 的参数和 call 一样。    

5. react 的 jsx 模板    
在jsx中直接写行内样式时不能采用引号，而是style={{color:'red'}}的方式。    

6. typeof   
![](./img/2.png)    


### 2021.2.27









