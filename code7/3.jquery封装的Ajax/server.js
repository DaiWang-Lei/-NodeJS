const express = require('express');

const app = express();
//隐藏实现方式
app.disable('x-powered-by');
//暴露静态资源
app.use(express.static('public'));
//用于解析post请求的请求体参数
app.use(express.urlencoded({extended: true}));

app.get('/test_get', (request, response) => {
    console.log(request.query);
    console.log(`test_get路由被调用了这是你传递的信息`);
    response.send( `我是服务器返回的GET请求的信息：${JSON.stringify(request.query)}`);
})

app.post('/test_post', (request, response) => {
    let result = request.body;
    console.log(request.body);
    console.log('test_post路由被调用了');
    response.send(`我是服务器返回的post请求的信息,这是你传递的信息：${JSON.stringify(request.body)}`);
})

app.listen('3000', (err) => {
    if (!err) console.log('测试jQuery封住的Ajax请求的地址是：http://localhost:3000');
    else console.log(err);
})