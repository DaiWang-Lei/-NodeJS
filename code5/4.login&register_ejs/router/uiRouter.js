/*
  该模块是UI路由器模块,用于管理UI路由，以后配置新页面在这里定义页面即可
 */
let { Router } = require('express');

let router = new Router();
// 引入path模块，path模块是node中的核心模块，无需下载，直接引入即可使用
let { resolve } = require('path');

// UI路由 -- 主页面
router.get('/', (request, response) => {
  response.send(`👏欢迎`)
})
// UI路由 -- 登陆页面
router.get('/login', (request, response) => {
  // let filePath = resolve(__dirname, '../public/login.html');
  // response.sendFile(filePath);
 const {email} = request.query;
  response.render("login",{errMsg:{email}});
})
// UI路由 -- 注册页面
router.get('/register', (request, response) => {
  // let filePath = resolve(__dirname, '../public/register.html');
  // response.sendFile(filePath);

  response.render("register",{errMsg:{}});

})


module.exports = router;