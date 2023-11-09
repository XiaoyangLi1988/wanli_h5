const webpack = require('webpack')
const { smart } = require('webpack-merge')
const base = require('./webpack.base.js')
const config = require('./../config')
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

const PORT = process.env.PORT || 8888

const devConfig = {
  mode: config.dev.NODE_ENV,
  devtool: 'source-map',
  devServer: {
    publicPath: resolve('/'),
    port: PORT,
    hot: true,
    open: true,
    openPage: `http://localhost:${PORT}/`,
    host: '0.0.0.0',
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(config.dev)
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}


module.exports = smart(base, devConfig);
