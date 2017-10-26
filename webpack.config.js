'use strict';

// Modules
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    debug: true,
    entry:  './src/entry.js',
    output: {
          path: path.join(__dirname, 'dist'),
          filename: 'bundle.js',
    },
    module : {
        preLoaders: [],
        loaders: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
          }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'file'
          }, {
            test: /\.html$/,
            loader: 'raw'
          },{
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
          }, {
            test: /\.json$/,
            loader: 'json-loader'
          }

        ]
    },
    externals: {
      'TweenLite': 'TweenLite',
    },
    postcss :[
      autoprefixer({
        browsers: ['last 2 version']
      })
    ],
    plugins : [
      // Only emit files when there are no errors
      // new webpack.NoErrorsPlugin(),
      // // Dedupe modules in the output
      // new webpack.optimize.DedupePlugin(),
      // // Minify all javascript, switch loaders to minimizing mode
      // new webpack.optimize.UglifyJsPlugin({
      //   mangle: true,
      //   sourceMap: false,
      //   compress: {
      //     warnings: false, // Suppress uglification warnings
      //     pure_getters: false,
      //     unsafe: true,
      //     unsafe_comps: true,
      //     screw_ie8: true
      //   },
      //   output: {
      //     comments: false,
      //   },
      //   exclude: [/\.min\.js$/gi] // skip pre-minified libs
      // }),
      // new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
      // new webpack.NoErrorsPlugin(),
      // new CompressionPlugin({
      //   asset: "[path].gz[query]",
      //   algorithm: "gzip",
      //   test: /\.js$|\.css$|\.html$/,
      //   threshold: 10240,
      //   minRatio: 0
      // })
    ],
    // devtool: "cheap-module-source-map",
    devtool: "cheap-module-source-map"
};
