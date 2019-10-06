// 引入express
let express = require('express');

// 创建一个app服务对象
let app = express();
// 隐藏服务器的具体实现
app.disable('x-powered-by');

// 设置路由
// 根路由
app.get('/', (request, response) => {
  response.send(`<h1>🥢快去里面快乐的🌃玩耍吧，🎉</h1>`)
});
// 一级路由
app.get('/yule', (request, response) => {
  response.send(`<h1>😄的玩耍，😁🎆</h1>`)
});
// 二级路由
app.get('/yule/diannao', (request, response) => {
  response.send(`<h1>💻💻🖥️💻</h1>`)
});

app.post('/demo', (request, response) => { 
  response.send(`<h1>⚽️你发来的post请求，我收到了，这是给你的响应🎉</h1>`)
})
app.get('/demo', (request, response) => { 
  response.send(`<h1>🌈你发来的get请求，我收到了，这是给你的响应🎹</h1>`)
})
// 绑定监听
app.listen('3000', (err) => {
  if (!err) console.log('服务器启动成功了！🎉')
  else console.log(err);
})