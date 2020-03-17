module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Vue Tailwind CSS'
        return args
      })
  },

  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  },

  productionSourceMap: true,
  css: { sourceMap: false }
}
