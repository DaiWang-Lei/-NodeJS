// 引入express
let express = require('express');

// 创建一个app服务对象
let app = express();

// 设置模版引擎
app.set("view engine", "ejs");
// 设置所在目录
app.set("views","./views");
// 隐藏服务器的具体实现
app.disable('x-powered-by');
// 设置路由
// 根路由
app.get('/', (request, response) => {
  let data = [{name:'代罔',age:12},{name:'罗布大',age:21},{name:'杨慎',age:21},{name:'于谦',age:21},{name:'朱由检',age:21},{name:'朱由校',age:33}]
  response.render('demo',{data});
});

// 绑定监听
app.listen('3000', (err) => {
  if (!err) console.log('服务器启动成功了！🎉')
  else console.log(err);
})