module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  },

  productionSourceMap: true,
  css: { sourceMap: false }
};
