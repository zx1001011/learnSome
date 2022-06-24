const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      library: 'singleVue',
      libraryTarget: 'umd' // umd 会把 导出的 singleVue 挂载到 window 上，即 window.singleVue.bootstrap/mount/unmount
    },
    devServer: {
      port: 10002
    }
  }
})
