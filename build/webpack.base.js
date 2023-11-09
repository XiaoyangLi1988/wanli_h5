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
          name: '[name].[ext]?[hash]'
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
      title: '万利集团',
      template: 'public/index.html',
      filename: 'index.html',
      files: {
        js: [

        ],
        css: [

        ]
      }
    })
  ],
}
