let express = require('express');

let app = express();

app.disable('x-powered-by');

//解析post请求体参数
app.use(express.urlencoded({extended: true}));

app.get('/test_get', (request, response) => {
    let {callback} = request.query;
    console.log(request.query);
    let arr = [{name: '代罔', age: 18}, {name: '雷雷', age: 18}]
    response.send(`${callback}(${JSON.stringify(arr)})`);
});

app.listen('3000', (err) => {
    if (!err) console.log('该服务器用于测试jsonp解决跨域问题，必须用webstorm打开网页');
    else console.log(err);
})