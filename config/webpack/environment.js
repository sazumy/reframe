const { environment } = require('@rails/webpacker')

const { resolve } = require('path')
environment.config.merge({
  resolve: {
    alias: {
      '@': resolve('app/javascript'),
    },
  },
})

const sassLoader = environment.loaders.get('sass')
const sassLoaderConfig = sassLoader.use.find(function (element) {
  return element.loader === 'sass-loader'
})
sassLoaderConfig.options.implementation = require('sass')

module.exports = environment
