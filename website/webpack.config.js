const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devWebpackConfig = {
  devtool: 'source-map',
  mode: 'development',
  entry: ['regenerator-runtime/runtime.js', './src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    publicPath: '/dist',
    contentBase: './public',
    historyApiFallback: true,
    open: true,
    port: 9090,
  },
  resolve: {
    extensions: ['.tsx', 'jsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /.js|.jsx|.ts|.tsx$/,
        loader: 'babel-loader',
        exclude: '/node_modules',
        options: {
          presets: ['@babel/react', '@babel/env'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = devWebpackConfig;
