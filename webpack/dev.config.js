import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
    entry: [
        'webpack-hot-middleware/client?timeout=20000&reload=true',
        path.resolve(__dirname, '../src/index.jsx')
    ],
    output: {
        path: '/',
        filename: 'bundle.js',
        publicPath: 'http://localhost:8001/assets/'
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
        new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin('style.css', {
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}
