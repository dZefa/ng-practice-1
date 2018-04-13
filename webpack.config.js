const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, './src/app.js');
const BUILD_DIR = path.resolve(__dirname, 'dist');
const TEMPLATE_DIR = path.resolve(__dirname, './src/index.html');

module.exports = {
  entry: APP_DIR,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'raw-loader'
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: /\.scss/,
        use: [
          {
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          }
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: TEMPLATE_DIR,
      inject: 'body',
      hash: true,
      filename: 'index.html',
    })
  ]
};
