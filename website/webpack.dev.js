const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.common.js');

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    hot: true,
    open: true,
    port: 9090,
    compress: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, '/dist'),
  },
};

module.exports = merge(baseConfig, devConfig);
