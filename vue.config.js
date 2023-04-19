const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //關閉eslint檢查
  // lintOnSave: false
  // publicPath: '/',
  publicPath: '/movie-project/'

  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/movie-project/'
  //   : '/'

})


