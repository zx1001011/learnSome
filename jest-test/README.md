# Jest 自动化测试框架

## 认识
![](./img/1.png)

## 安装
- 新建目录 JestTesT
- node 安装(npm), 
  ```npm -D install jest@24.8.0```
- xxx.js 对应测试文件为 xxx.test.js
- package.json 文件中:
    ```
    "scripts": {
        "test": "jest",
    },
    ```
- 单元测试 unit testing : 针对一个模块进行测试案例的编写     
  集成测试 ： 多个模块组成一个功能或者系统进行测试案例的编写    

## jest 基本配置 和 测试覆盖率
1) npx jest --init
   选择 browser-like\y\y
   生成 jest.config.js
2) npx jest --coverage 生成代码覆盖率报告(xx/coverage/lcov-report/index/html)     
   可以在 package.json 中配置命令：
   ```
   "scripts": {
       "coverage": "jest --coverage"
   },
   ```
3) 语法 看 [官网](https://www.jestjs.cn/docs/using-matchers)   
- matchers (匹配器)   
    toBe   
    toEqual    
    not.toBe   
    ...   
    toBeCloseTo 解决浮点数问题, 计算机精度问题 

4) 使用 babel 转换器来使用 es6 语法（默认nodejs 支持 commonjs 模块化语法）   
``` npm install -D @babel/core@7.4.5 @babel/preset-env@7.4.5 ```
新建 .babelrc 文件：
```json
{
    "presets": [
        [
            "@babel/preset-env", {
                "targets": {
                    "node": "current"
                }
            }
        ]
    ]
}
```

步骤：
在 输入命令 ```npm run test``` 或者 ```yarn test``` 的时候,   
会先检查 babel 是否在 package.json 中即是否引入 babel,    
如果引入了，就找 .babelrc 文件来设置然后......    

5) 异步代码测试方法 - 回调函数
```npm install axios@0.19.0 --save``` 或者
```yarn add axios@0.19.0 --save```   

jest.config.js 文件中设置：
```json
testRegex: ['fetchData.test.js'], // 就只会跑 fetchData.test.js 文件
```

6) 自动测试 - ```jest --watchAll```
在 package.json 中加入：```"autoTest": "jest --watchAll",```

7) 

