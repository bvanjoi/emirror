const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  entry: ['regenerator-runtime/runtime.js', './src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash:8].js',
  },
  resolve: {
    extensions: ['.tsx', 'jsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          cacheDirectory: true,
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
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
        test: /\.(ttf|eot|woff|woff2|png|svg|jpg|jpeg|gif)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
        generator: {
          filename: '[name]_[hash:8][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: 'auto',
      inject: 'body',
      scriptLoading: 'blocking',
    }),
    new FriendlyErrorsWebpackPlugin(),
  ],
};
