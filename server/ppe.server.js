import 'babel-core/register';
import express from 'express';
import path from 'path';

const port = 8080;
const app = express();

app.use(express.static('ppe'));

app.use('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../ppe/index.html'))
});

app.listen(port, () => {
    console.log(`服务器启动成功，端口：${port}`);
});
