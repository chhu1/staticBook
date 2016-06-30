var path = require('path');
var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var assetsPath = path.resolve(__dirname, '../dist');
var projectRootPath = path.resolve(__dirname, '../');
var publicPath = '';
// var publicPath = 'http://localhost:8080/ppe/';

module.exports = {
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
    module: {
        loaders: [
            { test: /(\.jsx|\.js)$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css?$/, loader: ExtractTextPlugin.extract('style', 'raw') },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass') },
            { test: /\.jpg|png$/, loader: 'url?limit=10000' },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
        ]
    },
    resolve: {
        root: path.resolve(__dirname, '../src'),
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new CleanPlugin([assetsPath], { root: projectRootPath }),
        new webpack.optimize.OccurenceOrderPlugin(),
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
        }),
        new webpack.NoErrorsPlugin()
    ]
};
