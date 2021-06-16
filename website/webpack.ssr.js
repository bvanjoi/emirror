const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CSSMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const baseConfig = require('./webpack.base.js');

module.exports = () => {
  const mode = 'production';
  return {
    ...baseConfig,
    entry: './src/index-server.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle-server.js',
    },
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
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 4 * 1024,
            },
          },
          generator: {
            filename: 'fonts/[name].[ext]',
          },
        },
      ],
    },
    plugins: [
      ...baseConfig.plugins,
      new MiniCSSExtractPlugin({
        filename: 'main.css',
      }),
      new CSSMinimizerWebpackPlugin(),
    ],
  };
};
