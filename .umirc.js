
const path = require('path');
export default {
  targets: {
    ie: 9,
   },
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: '开发环境搭建',
      dll: false,
      routes: {
        exclude: [
          /model.js/,
          /service.js/,
          /components/,
        ],
      },
      fastClick: true,
      // hardSource: true,
    }],
  ],
  alias: {
    'components': path.resolve(__dirname, 'src/components/'),
    'layouts': path.resolve(__dirname, 'src/layouts/'),
    'models': path.resolve(__dirname, 'src/models/'),
    'pages': path.resolve(__dirname, 'src/pages/'),
    'utils': path.resolve(__dirname, 'src/utils/'),
    'common': path.resolve(__dirname, 'src/common/'),
    'assets': path.resolve(__dirname, 'src/assets/'),
  },

}
