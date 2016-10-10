var path = require('path');
var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackMerge = require('webpack-merge');
var baseConfig = require('./base.config');

var assetsPath = path.resolve(__dirname, '../ppe/');
var projectRootPath = path.join(__dirname, '../');
var publicPath = '';
// var publicPath = 'http://localhost:8080/ppe/';

module.exports = webpackMerge(baseConfig, {
    devtool: 'false',
    entry: {
        main: [
            path.resolve(__dirname, '../src/index.jsx')
        ],
        vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-router', 'history', 'immutable']
    },
    output: {
        path: assetsPath,
        filename: '[hash].bundle.js',
        publicPath: publicPath
    },
    plugins: [
        new CleanPlugin([assetsPath], { root: projectRootPath }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new ExtractTextPlugin('[name].css', { allChunks: true }),
        new HtmlWebpackPlugin({
            hash: true,
            template: path.resolve(__dirname, '../views/new.ejs'),
            favicon: path.resolve(__dirname, '../src/static/images/favicon.ico')
        })
    ]
});
