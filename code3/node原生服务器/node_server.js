let http = require('http');
let querystring = require('querystring');

let server = http.createServer((request, response) => {
  /*
  request:请求对象 -------客户端发给服务器
  response:响应对象 ------服务器给客户端 
   */
  response.setHeader('content-type', 'text/html;charset=utf-8');
  let str = request.url.split('?')[1];
  let obj = querystring.parse(str);
  console.log(obj);
  if (obj.name === 'lala') {
    response.end(`<h2>lala开心！加油！🏠⛽️，😄🎉</h2>`)
  } else if (obj.name === 'haha') {
    response.end(`<h2>haha！加油！🏠⛽️，😄🎉</h2>`)
  } else { 
    response.end(`<h2>哎呦，走粗陋！！</h2>`)    
  }
});

// 3.绑定接口监听
server.listen(3000, (err) => {
  if (!err) {
    console.log('服务器启动成功了🎉');
  } else {
    console.log(err);
  }
})