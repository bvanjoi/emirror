import webpack from 'webpack';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';
import { merge } from 'webpack-merge';
import CSSMinimizerWebpackPlugin from 'css-minimizer-webpack-plugin';
import { baseConfig } from './webpack.common';

const prodConfig: webpack.Configuration = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [require('postcss-preset-env')()],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'main.[contenthash:10].css',
    }),
    new CSSMinimizerWebpackPlugin(),
  ],
};

module.exports = merge(baseConfig, prodConfig);
