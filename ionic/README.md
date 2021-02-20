# 前提条件
[官网](https://ionicframework.com/docs) : https://ionicframework.com/docs     
[视频网站](https://www.bilibili.com/video/BV1Ub41117q5) : https://www.bilibili.com/video/BV1Ub41117q5    

# 介绍
Ionic是一个开源的移动应用程序开发框架，它可以轻松地使用web技术构建高质量的跨平台的移动应用。可以让我们快速开发移动App、移动端WEB页面、微信公众平台应用，混合app web页面。

*[介绍](http://bbs.itying.com/topic/5c2352cfd5488a17e894a7f4)*


## 安装运行
 1. 学前准备     
    - 必须得安装 nodejs (建议安装最新版本)    
    - 必须有 Angular 基础     
 2. 安装 cordova ionic    
    - ```npm install -g ionic cordova```  
 3. 创建项目：
    - ```ionic start myApp [tabs]```
    - ```cd myApp -> cnpm i ```
 4. 运行项目：
    - ```ionic serve```
 5. Vscode 安装 Snippets 提示工具：Angular/Ionic 
 6. 开发模式和 angular 一样

## 目录结构分析
e2e：端对端的分析
src: 源代码
src/environments: 环境配置
src/assets: 静态文件
src/theme：主题颜色配置
src/app: [](./img/1.png)

## 编码
1. 新建页面：```ionic g page news```