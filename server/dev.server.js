import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import devWebpackConfig from '../webpack/dev.config';

const port = 8001;
const app = express();
const compiler = webpack(devWebpackConfig);

app.use(webpackDevMiddleware(compiler, {
    publicPath: devWebpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'dev.html'))
});

app.listen(port, (error) => {
    if (error) {
        console.error(error)
    } else {
        console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
});
