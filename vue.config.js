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
      },
      '^/backend':{
        target: 'http://172.16.20.133:8111/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {'^/backend' : ''}
      },
      '^/backendAds':{
        target: 'http://172.16.20.83:8080/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {'^/backendAds' : ''}
      },
      '^/backendCrm':{
        target: 'http://172.16.20.161:8090/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {'^/backendCrm' : ''}
      }
    }
  },
  lintOnSave: true
}