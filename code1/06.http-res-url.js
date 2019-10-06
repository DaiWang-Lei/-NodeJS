var http = require('http');

var server = http.createServer();

server.on('requset', (req, res) => {
  // console.log('请求成功' + req.url);
  res.write('1313');
  res.end();
});

server.listen(222, () => {
  console.log('端口号绑定为416')
})