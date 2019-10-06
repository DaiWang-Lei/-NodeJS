let express = require('express');

let app = express();

app.get('/', (request, response) => {
  response.send('ok');
})

app.listen(3000, (err) => {
  if(!err) console.log('服务器启动成功了！🎉')
  else console.log(err);
})