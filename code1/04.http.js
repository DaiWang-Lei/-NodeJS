const http = require('http');
// 返回一个Server实例
const server = http.createServer();

// 服务器要搞干嘛？
// 提供服务，对数据的服务，
// 发请求
// 接受请求
// 处理请求
// 给个反馈(发送响应)
// 注册request请求事件
// 当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数，回调处理

server.on('request', () => {
  console.log('😄哈哈，请求发送成功了');
});
// 4.绑定端口号，启动服务器
server.listen(416, () => { 
  console.log('服务器启动成功了！😄哈哈哈哈')//服务器启动成功了，可以通过localhost：416访问/http://127.0.0.1:416
});