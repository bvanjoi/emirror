const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const mode = env.dev ? 'development' : 'production';

  return {
    mode,
    devtool: 'source-map',
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
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  };
};
