const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  outputDir: 'dist',
  assetsDir: './',
  publicPath: './',
}
