let express = require('express');
let bodyParser = require('body-parser');

let app = express();

// 使用body-parser中间件解析post请求过来的请求体参数为一个对象，随后挂载到request上
// app.use(bodyParser.urlencoded({extended:true}));

// 内置中间件-------解析post请求过来的请求体参数为一个对象，随后挂载到request
// app.use(express.urlencoded({ extended: true }));

// 内置中间件-------暴露静态资源
app.use(express.static('public'));

// 全局中间件的第一种写法
/* app.use((request, response, next) => {
  if (request.get('host') !== 'localhost:3000') {
    response.send('你个哈哇，非法，晓得不')
  } else { 
    next();
  }
}) */

// 全局中间件的第二种写法
function middleWare(request, response, next) {
  if (request.get('host') !== 'localhost:3000') {
    response.send('你个哈哇，非法，晓得不');
  } else {
    next();
  }
}



app.get('/', middleWare, (request, response) => {
  response.send('这是根🌲路由🎉');
})
app.get('/meishi', (request, response) => {
  response.send('这是美食🍜路由🎉');
})

app.post('/demo', (request, response) => {
  console.log(request.body);
  response.send(`你的post请求，朕收到了 是这样吗？${request.body}`);
})

// app.get('/index', (request, response) => { 
//   response.sendFile(__dirname+'/public/index.html')
// })
app.listen(3000, (err) => {
  if (!err) console.log('服务器又启动成功了🚄🎉！')
  else console.log(err);
})