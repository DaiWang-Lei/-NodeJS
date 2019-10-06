// 引入express框架
let express = require('express');

// 引入数据库连接模块
let db = require('./db');

// 引入UI路由器
let uiRouter = require('./router/uiRouter');
// 引入业务路由
let businessRouter = require('./router/businessRouter');
//引入express-session模块
let session = require('express-session');
//引入 connect-mongo模块，用于session的持久化
const MongoStore = require('connect-mongo')(session);

// 创建app服务器
let app = express();
// 设置模板引擎
app.set("view engine", "ejs");
// 设置模版的存放目录
app.set("views", "./views");
//编写全局配置对象（定义一个cookie和session组合使用的配置对象）
app.use(session({
  name:'userid', //设置cookie的name，默认值是：coonect.sid
  secret:'daiwang', //参与🔐加密的字符串（又称签名）
  saveUninitialized:false, //是否在储存内容之前创建会话
  resave:true, //是否在每次请求时，强制重新保存session，即使他们没有变化
  store:new MongoStore({
    url:'mongodb://localhost:27017/cookies_container',
    touchAfter:1800 ,//修改频率 （例：在24小时之内只更新一次）
  }),


  cookie:{
    httpOnly:true,//开启后前端无法通过JS操作cookie
    maxAge:1000 * 30 ,//设置cookie的过期时间

  },
}));


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