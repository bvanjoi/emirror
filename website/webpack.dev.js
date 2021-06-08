const path = require('path');
const baseConfig = require('./webpack.base.js');

module.exports = () => {
  const mode = 'development';

  return {
    ...baseConfig,
    mode,
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
};
