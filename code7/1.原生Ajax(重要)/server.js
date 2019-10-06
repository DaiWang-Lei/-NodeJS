let express = require('express');

let app = express();

app.disable('x-powered-by');
//暴露静态资源
app.use(express.static('public'));
//解析post请求请求体中以urlencoded形式编码参数
app.use(express.urlencoded({extended: true}))

app.get('/test_get', (request, response) => {
    console.log('一个GET请求来了！', request.query)
    response.send("我是服务器响应GET请求的信息！");
})

app.post('/test_post', (request, response) => {
    console.log(request.body)
    console.log('一个POST请求来了！')
    response.send("我是服务器响应POST请求的信息！");
})
app.get('/test_get_sendFile', (request, response) => {
    console.log('一个GET请求来了！', request.query)
    response.sendFile(__dirname+'/public/ajax_get.html');
})

app.listen('3000', (err) => {
    if (!err) {
        console.log('服务器启动成功了！🎉', '测试原生js发送Ajax-GET请求的地址是：http://localhost:3000/ajax_get.html');
        console.log('测试原生js发送Ajax-POST请求的地址是：http://localhost:3000/ajax_post.html');
        console.log('测试自己封装发送Ajax请求的地址是：http://localhost:3000/ajax_with_promise.html')


    } else console.log('有错误', err);
    const arr = [2,3,4,1];
    let result = arr.reduce((preValue,nowValue,nowIndex,arr)=>{
        console.log(preValue,nowValue,nowIndex,arr);
        return preValue+nowValue;
    },0);
    console.log(result);
})

