# learnSome
## es6-test 自己敲的代码
## 学习es6的视频
## js 模块化工具或者技术
 - amd —— requirejs
 - cmd
 - commonjs
 - es6
## 使用node等自己的示例

*以上有待自己再次整理*


### Study Log
| 序号 | 时间 | 内容 | 备注 |   
| --- | --- | --- | --- |
| 01 | 2021-3-18 | 前端跨域多种处理方式 | |


### 2021-3-18
一. 前端跨域多种处理方式    
1) 跨域：
协议，域名，端口 中任一不同则不同
    * http 协议默认端口 80    
    * https 协议默认端口 443
2) 解决办法：  
 - 前端:  
    webpack 设置代理 (proxy)，打包之后代理就没有用了
    nginx 反向代理，配置
    webpack 插件 plugin 
    jsonp 需要后端的支持，协议method 只能是 GET 方式，参数都是暴露的
    websocket 长链接，对资源占用很高
 - 后端： cors     
 
 *tips: 学习思路*    
 3) webpack : 
    它就是脚手架
    