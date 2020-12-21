const path = require('path');
const { merge } = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
    watchOptions: {
      poll: true,
      ignored: /node_modules/,
    },
  },
});
