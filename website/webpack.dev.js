const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.common.js');

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    hot: 'only',
    open: true,
    port: 9090,
    compress: true,
    historyApiFallback: true,
  },
};

module.exports = merge(baseConfig, devConfig);
