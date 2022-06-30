import serve from 'rollup-plugin-serve'

// rollup 可以帮我们打包 es6 的 模块化语法
export default {
    input: './src/single-spa.js',  // 把 src 下面的这个文件 打包到 lib 下面，umd 规范自动挂载在 window 属性上
    output: {
        file: './lib/umd/single-spa.js',
        format: 'umd',
        name: 'singleSpa', // window['singleSpa']
        sourcemap: true, // 可以调试
    },
    // 配置一下具体的开发环境
    plugins: [
        serve({
            openPage: './index.html',
            contentBase: '', // 不能为 undefined
            port: 3000
        })
    ]
}