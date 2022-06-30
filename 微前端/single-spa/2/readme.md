# 代码
1. npm init -y
2. npm install rollup rollup-plugin-serve -D
3. new file named : rollup.config.js, write some code
4. new dir named : src , new file named : single-spa.js
5. write some code  in  rollup.config.js
   其实这里看 语法和 webpack 差不多
6. new file named: index.html as a page to know its usage
7. after configure rollup.config.js, in package.json we should have the code , example: `"dev": "rollup -c -w"`, then it's easy to start the serve: `npm run dev`.
   可以看到 lib/umd/single-spa.js 被打包好。这里没有配置 babel 的环境（es6)， 需要的话自己配置。
8. 