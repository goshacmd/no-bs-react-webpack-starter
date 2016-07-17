const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const validate = require('webpack-validator');

const APP_FOLDER = 'app';
const INIT_FILE = 'initialize.js';
const BUILD_DIR = 'build';

const config = {
  entry: {
    app: path.join(__dirname, APP_FOLDER, INIT_FILE)
  },
  output: {
    path: path.join(__dirname, BUILD_DIR),
    filename: '[name].js'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    //stats: 'errors-only',
  },
  watchOptions: {
    // Delay the rebuild after the first change
    aggregateTimeout: 300,
    // Poll using interval (in ms, accepts boolean too)
    poll: 1000
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: path.join(__dirname, APP_FOLDER)
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['syntax-object-rest-spread']
        }
      }
    ]
  },
  resolve: {
    root: [
      path.join(__dirname, APP_FOLDER)
    ],
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({title: 'No bullshit'}),
    new webpack.HotModuleReplacementPlugin({multiStep: true}),
  ],
  postcss: function() {
    return [require('autoprefixer')];
  }
};

module.exports = validate(config);
