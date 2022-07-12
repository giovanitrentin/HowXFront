//const { defineConfig } = require('@vue/cli-service')
//module.exports = defineConfig({
//  transpileDependencies: [
//    'vuetify'
//  ]
//})

//module.exports = {
//  devServer: {
//  proxy: '*',
//  }
//}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-project/'
    : '/'
}
