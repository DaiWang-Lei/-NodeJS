// 引入express框架
let express = require('express');

// 引入数据库连接模块
let db = require('./db');

// 引入UI路由器
let uiRouter = require('./router/uiRouter');
// 引入业务路由
let businessRouter = require('./router/businessRouter');

// 创建app服务器
let app = express();

// 数据库连接成功后，再注册路由
db.then(() => {
  // 使用内置中间件用于获取post请求
  app.use(express.urlencoded({ extended: true }))
  // 使用UI路由中间件
  app.use(uiRouter);

  // 使用业务路由
  app.use(businessRouter);



}).catch((err) => {
  console.log('数据库连接失败', err)
});
// 设置端口监听
app.listen(3000, (err) => {
  if (!err) console.log('服务器再次启动成功了！🎉')
  else console.log(err);
})