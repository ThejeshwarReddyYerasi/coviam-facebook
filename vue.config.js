module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '^/backendCommonInfraLogin': {
        target: 'http://172.16.20.121:8080/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {'^/backendCommonInfraLogin' : ''}
      }
    }
  },
  lintOnSave: true
}