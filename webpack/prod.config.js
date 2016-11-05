var path = require('path');
var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackMerge = require('webpack-merge');
var baseConfig = require('./base.config');

var assetsPath = path.resolve(__dirname, '../dist');
var projectRootPath = path.resolve(__dirname, '../');
var publicPath = '';
// var publicPath = 'http://localhost:8080/dist/';

module.exports = webpackMerge(baseConfig, {
    devtool: 'false',
    entry: {
        main: [
            path.resolve(__dirname, '../src/index.jsx')
        ],
        vendor: ['babel-polyfill', 'es6-promise', 'react', 'react-dom', 'react-router', 'history', 'immutable']
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
        new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }),
        new HtmlWebpackPlugin({
            hash: true,
            template: path.resolve(__dirname, '../views/new.ejs'),
            favicon: path.resolve(__dirname, '../src/static/images/favicon.ico')
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        })
    ]
});
