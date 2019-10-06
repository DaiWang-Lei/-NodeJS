const express = require('express');

const app = express();
//解析post请求的请求体参数
app.use(express.urlencoded({extended: true}));

app.get('/test_get',(request,response)=>{
    console.log(request.query);
    response.set('Access-control-Allow-Origin','http://localhost:63342')
    console.log('test_get路由被调用了');
    response.send('我是服务器返回的GET请求的信息');
})

app.post('/test_post',(request,response)=>{
    console.log(request.body);
    response.set('Access-control-Allow-Origin','http://localhost:63342')
    console.log('test_post路由被调用了');
    response.send('我是路由器返回的POST请求的信息');
})

app.listen(3000,(err)=>{
    if (!err) console.log('该服务器用于验证cors解决跨域问题，必须在webstorm上打开');
    else console.log(err);
})