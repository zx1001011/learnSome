//>>built
var __extends,__assign,__rest,__decorate,__param,__metadata,__awaiter,__generator,__exportStar,__values,__read,__spread,__await,__asyncGenerator,__asyncDelegator,__asyncValues,__makeTemplateObject;
(function(d){function k(c,b){c!==a&&("function"===typeof Object.create?Object.defineProperty(c,"__esModule",{value:!0}):c.__esModule=!0);return function(a,e){return c[a]=b?b(a,e):e}}var a="object"===typeof global?global:"object"===typeof self?self:"object"===typeof this?this:{};"function"===typeof define&&define.amd?define("tslib",["exports"],function(c){d(k(a,k(c)))}):"object"===typeof module&&"object"===typeof module.exports?d(k(a,k(module.exports))):d(k(a))})(function(d){var k=Object.setPrototypeOf||
{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};__extends=function(a,c){function b(){this.constructor=a}k(a,c);a.prototype=null===c?Object.create(c):(b.prototype=c.prototype,new b)};__assign=Object.assign||function(a){for(var c,b=1,f=arguments.length;b<f;b++){c=arguments[b];for(var e in c)Object.prototype.hasOwnProperty.call(c,e)&&(a[e]=c[e])}return a};__rest=function(a,c){var b={},f;for(f in a)Object.prototype.hasOwnProperty.call(a,
f)&&0>c.indexOf(f)&&(b[f]=a[f]);if(null!=a&&"function"===typeof Object.getOwnPropertySymbols){var e=0;for(f=Object.getOwnPropertySymbols(a);e<f.length;e++)0>c.indexOf(f[e])&&(b[f[e]]=a[f[e]])}return b};__decorate=function(a,c,b,f){var e=arguments.length,l=3>e?c:null===f?f=Object.getOwnPropertyDescriptor(c,b):f,d;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(a,c,b,f);else for(var g=a.length-1;0<=g;g--)if(d=a[g])l=(3>e?d(l):3<e?d(c,b,l):d(c,b))||l;return 3<e&&
l&&Object.defineProperty(c,b,l),l};__param=function(a,c){return function(b,f){c(b,f,a)}};__metadata=function(a,c){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(a,c)};__awaiter=function(a,c,b,f){return new (b||(b=Promise))(function(e,d){function l(a){try{n(f.next(a))}catch(h){d(h)}}function g(a){try{n(f["throw"](a))}catch(h){d(h)}}function n(a){a.done?e(a.value):(new b(function(c){c(a.value)})).then(l,g)}n((f=f.apply(a,c||[])).next())})};__generator=function(a,
c){function b(a){return function(c){return f([a,c])}}function f(b){if(d)throw new TypeError("Generator is already executing.");for(;e;)try{if(d=1,m&&(g=m[b[0]&2?"return":b[0]?"throw":"next"])&&!(g=g.call(m,b[1])).done)return g;if(m=0,g)b=[0,g.value];switch(b[0]){case 0:case 1:g=b;break;case 4:return e.label++,{value:b[1],done:!1};case 5:e.label++;m=b[1];b=[0];continue;case 7:b=e.ops.pop();e.trys.pop();continue;default:if(!(g=e.trys,g=0<g.length&&g[g.length-1])&&(6===b[0]||2===b[0])){e=0;continue}if(3===
b[0]&&(!g||b[1]>g[0]&&b[1]<g[3]))e.label=b[1];else if(6===b[0]&&e.label<g[1])e.label=g[1],g=b;else if(g&&e.label<g[2])e.label=g[2],e.ops.push(b);else{g[2]&&e.ops.pop();e.trys.pop();continue}}b=c.call(a,e)}catch(h){b=[6,h],m=0}finally{d=g=0}if(b[0]&5)throw b[1];return{value:b[0]?b[1]:void 0,done:!0}}var e={label:0,sent:function(){if(g[0]&1)throw g[1];return g[1]},trys:[],ops:[]},d,m,g,n;return n={next:b(0),"throw":b(1),"return":b(2)},"function"===typeof Symbol&&(n[Symbol.iterator]=function(){return this}),
n};__exportStar=function(a,c){for(var b in a)c.hasOwnProperty(b)||(c[b]=a[b])};__values=function(a){var c="function"===typeof Symbol&&a[Symbol.iterator],b=0;return c?c.call(a):{next:function(){a&&b>=a.length&&(a=void 0);return{value:a&&a[b++],done:!a}}}};__read=function(a,c){var b="function"===typeof Symbol&&a[Symbol.iterator];if(!b)return a;a=b.call(a);var f,e=[],d;try{for(;(void 0===c||0<c--)&&!(f=a.next()).done;)e.push(f.value)}catch(m){d={error:m}}finally{try{f&&!f.done&&(b=a["return"])&&b.call(a)}finally{if(d)throw d.error;
}}return e};__spread=function(){for(var a=[],c=0;c<arguments.length;c++)a=a.concat(__read(arguments[c]));return a};__await=function(a){return this instanceof __await?(this.v=a,this):new __await(a)};__asyncGenerator=function(a,c,b){function f(a){n[a]&&(k[a]=function(b){return new Promise(function(c,d){1<h.push([a,b,c,d])||e(a,b)})})}function e(a,b){try{var c=n[a](b);c.value instanceof __await?Promise.resolve(c.value.v).then(d,m):g(h[0][2],c)}catch(p){g(h[0][3],p)}}function d(a){e("next",a)}function m(a){e("throw",
a)}function g(a,b){(a(b),h.shift(),h.length)&&e(h[0][0],h[0][1])}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=b.apply(a,c||[]),k,h=[];return k={},f("next"),f("throw"),f("return"),k[Symbol.asyncIterator]=function(){return this},k};__asyncDelegator=function(a){function c(c,f){a[c]&&(b[c]=function(b){return(d=!d)?{value:__await(a[c](b)),done:"return"===c}:f?f(b):b})}var b,d;return b={},c("next"),c("throw",function(a){throw a;}),c("return"),b[Symbol.iterator]=
function(){return this},b};__asyncValues=function(a){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var c=a[Symbol.asyncIterator];return c?c.call(a):"function"===typeof __values?__values(a):a[Symbol.iterator]()};__makeTemplateObject=function(a,c){Object.defineProperty?Object.defineProperty(a,"raw",{value:c}):a.raw=c;return a};d("__extends",__extends);d("__assign",__assign);d("__rest",__rest);d("__decorate",__decorate);d("__param",__param);d("__metadata",__metadata);
d("__awaiter",__awaiter);d("__generator",__generator);d("__exportStar",__exportStar);d("__values",__values);d("__read",__read);d("__spread",__spread);d("__await",__await);d("__asyncGenerator",__asyncGenerator);d("__asyncDelegator",__asyncDelegator);d("__asyncValues",__asyncValues);d("__makeTemplateObject",__makeTemplateObject)});