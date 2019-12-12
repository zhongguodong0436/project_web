export default {

  define: {
    'Globals.API_HOST': '/api',
  },
  proxy: {
    '/api': {
      'target': 'http://localhost:8080/',
      'changeOrigin': true,
      'pathRewrite': {'^/api': ''}
    },
  }
}