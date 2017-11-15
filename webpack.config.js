const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/client/index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
     entry: __dirname +  '/react/app.js',
     output: {
         path: __dirname + '/client/js',
         filename: 'bundle.js'
     },
    module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
 };

 plugins: [HtmlWebpackPluginConfig]
