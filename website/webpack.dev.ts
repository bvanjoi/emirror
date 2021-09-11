import { merge } from 'webpack-merge';
import webpack from 'webpack';
import 'webpack-dev-server';
import { baseConfig } from './webpack.common';

const devConfig: webpack.Configuration = {
  mode: 'development',
  devtool: 'source-map',
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  devServer: {
    hot: 'only',
    open: true,
    port: 9090,
    compress: true,
    historyApiFallback: true,
  },
};

module.exports = merge(baseConfig, devConfig);
