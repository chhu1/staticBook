import path from 'path';
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import baseConfig from './base.config';

module.exports = webpackMerge(baseConfig, {
    entry: [
        'webpack-hot-middleware/client?timeout=20000&reload=true',
        path.resolve(__dirname, '../src/index.jsx')
    ],
    output: {
        path: '/',
        filename: 'bundle.js',
        publicPath: 'http://localhost:8001/assets/'
    },
    plugins: [
        new ExtractTextPlugin('style.css', { allChunks: true }),
        new webpack.HotModuleReplacementPlugin()
    ]
})
