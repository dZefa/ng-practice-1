const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('./webpack.config');

const cleanOptions = {
  verbose: true,
};

config.plugins = config.plugins.concat([
  new CleanWebpackPlugin(['dist'], cleanOptions)
]);

module.exports = config;
