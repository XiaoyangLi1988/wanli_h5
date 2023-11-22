const path = require('path')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  entry: {
    main: [
      'babel-polyfill',
      resolve('../src/main.js')
    ]
  },
  output: {
    path: resolve('../dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: 'chunk/[name].[chunkhash:6].js'
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(less|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
          'postcss-less-loader'
        ]
      },
      {
        test: /.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          name: 'images/[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    // 设置别名
    alias: {
      '@': resolve('../src')
    },
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '万利中心｜北京首个EOD生态写字楼',
      description: '万利中心是北京首个提出EOD生态办公区概念的楼宇，在北京CBD区域拥有0.8超低容积率的绿色办公环境，为客户提供舒适、便利的办公空间产品',
      keywords: '写字楼，写字楼租赁，EOD，生态写字楼，大平层租赁',
      template: 'public/index.html',
      filename: 'index.html',
      files: {
        js: [

        ],
        css: [
          'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css',
          'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        ]
      }
    })
  ],
}
