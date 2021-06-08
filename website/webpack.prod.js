const baseConfig = require('./webpack.base.js');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CSSMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

module.exports = () => {
  const mode = 'production';
  return {
    ...baseConfig,
    mode,
    module: {
      rules: [
        ...baseConfig.module.rules,
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
      ...baseConfig.plugins,
      new MiniCSSExtractPlugin({
        filename: 'main.[contenthash:10].css',
      }),
      new CSSMinimizerWebpackPlugin(),
    ],
  };
};
