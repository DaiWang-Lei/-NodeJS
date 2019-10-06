// 引入express 框架
const express = require('express');

//实例化app
const app = express();

//隐藏
app.disable('x-powered-by');
// 暴露静态资源
app.use(express.static('public'));

//根路由
app.get('/get_code', (request, response) => {
    /*
    * 返回一个1000-9999的随机数
    * */
    let code = Math.floor(Math.random()*8999 + 1000);
    console.log('客户端有请求！');
    setTimeout(function () {
        response.send(code.toString());
    },2000)
});

// 设置监听

app.listen('3000', (err) => {
    if (!err) console.log('服务器启动成功了🎉,请打开：http://localhost:3000')
    else console.log(err);
})