const http = require('http');
const server = http.createServer();

// request 请求事件处理函数，需要接受两个参数，
// Reuqset 请求对象
//   请求对象，可以用来获取客户端的一些请求信息，例如请求路径
// Response 相应对象
//   响应对象可以用来给客户端发送响应消息
server.on('request', function(request, response){
  console.log(`😄哈哈，请求发送成功了,请求路径是
  ${request.url}`);
  // response对象有一个方法：write可以用来给客户端发送响应数据
  // write 可以使用很多次，但是最后一定要使用end来结束响应,否则会一直等待
  response.end(`hello,好厉害🦚`);
});
server.listen(119, function(){ 
  console.log(666);
});