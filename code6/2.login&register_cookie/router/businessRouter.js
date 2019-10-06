/*
  该模块是业务逻辑路由器模块,用于管理业务逻辑路由
 */
let { Router } = require('express');

let router = new Router();
// 引入用户模型
let userModel = require('../model/userModel');


// 注册路由
router.post('/register', async (request, response) => {
  // 1. 获取用户的输入
  const { email, nick_name, password, re_password } = request.body;
  // 2. 校验数据的合法性
  //  2.1定义正则表达式
  const emailReg = /^[a-zA-Z0-9_]{2,16}@[a-zA-Z0-9]{2,16}\.com$/
  const nickNameReg = /[\u4e00-\u9fa5]/gm;
  const passwordReg = /^[a-zA-Z0-9_#\.]{6,16}$/;
  // 2.2使用正则表达式进行校验
  let errMsg = {};
  if (!emailReg.test(email)) {
    // response.send('😫抱歉，📮邮箱输入不合法，要求邮箱用户名2-16位不包含特殊字符，邮箱主机名位2-16位😢')
    // return
    errMsg.emailErr = '😫抱歉，📮邮箱输入不合法，要求邮箱用户名2-16位不包含特殊字符，邮箱主机名位2-16位😢'
  }
  if (!nickNameReg.test(nick_name)) {
    // response.send('😫抱歉，昵称输入不合法，昵称应为中文🀄️😢')
    // return
    errMsg.nickNameErr = '😫抱歉，昵称输入不合法，昵称应为中文🀄️😢'

  }
  if (!passwordReg.test(password)) {
    // response.send('😫抱歉，㊙️密码输入不合法，密码应为6-16位不包含特殊字符😢')
    // return
    errMsg.passWordErr = '😫抱歉，㊙️密码输入不合法，密码应为6-16位不包含特殊字符😢'
  }
  if (re_password !== password) {
    // response.send('😫抱歉，两次输入密码不一致，请认真检查呦！😢')
    // return
    errMsg.rePasswordErr = '😫抱歉，两次输入密码不一致，请认真检查呦！😢'
  }

  if(JSON.stringify(errMsg) !== '{}') {
    response.render('register', {errMsg});
    return
  }

  // try 里面放可能出现错误的代码，一旦出错，会携带着错误信息来到catch中
  try {
    // 3.检查该邮箱是否注册过
    let findResult = await userModel.findOne({ email });
    if (findResult) {
      // response.send(`😣抱歉，注册失败，${email}📮邮箱已经被注册过了`)
      // return
      errMsg.emailErr=`😣抱歉，注册失败，${email}📮邮箱已经被注册过了`;
      response.render('register',{errMsg});
    } else {
      await userModel.create({ email, nick_name, password });
      console.log(`📮邮箱为：${email},昵称为：${nick_name}的用户注册成功！🎉`);
      response.redirect(`/login?email=${email}`);
    }
  }
  catch (err) {
    console.log(err);
    // response.send('😺哎呀，网页走丢了，请稍后再试')
    errMsg.netWorkErr='😺哎呀，网页走丢了，请稍后再试';
    response.render('register',{errMsg})
  }


  // 4.注册过---驳回； 未注册---注册

})
// 业务路由---登陆
router.post('/login', async (request, response) => {
  // 获取用户输入信息
  const { email, password } = request.body;
  let errMsg={}


  // 定义正则表达式
  const emailReg = /^[a-zA-Z0-9_]{2,16}@[a-zA-Z0-9]{2,16}\.com$/
  const passwordReg = /^[a-zA-Z0-9_#\.]{6,16}$/;
  // 2.2使用正则表达式进行校验
  if (!emailReg.test(email)) {
    // response.send('😫抱歉，📮邮箱输入不合法，要求邮箱用户名2-16位不包含特殊字符，邮箱主机名位2-16位😢')
    // return
    errMsg.emialErr = '😫抱歉，📮邮箱输入不合法，要求邮箱用户名2-16位不包含特殊字符，邮箱主机名位2-16位😢';
  }
  if (!passwordReg.test(password)) {
    // response.send('😫抱歉，㊙️密码输入不合法，密码应为6-16位不包含特殊字符😢')
    // return
    errMsg.passWordErr = '😫抱歉，㊙️密码输入不合法，密码应为6-16位不包含特殊字符😢';
  }

  if(JSON.stringify(errMsg) !== '{}'){
    response.render('login',{errMsg});
    return
  }
  try {
    let findResult = await userModel.findOne({ email, password});
    if (findResult) {
      // response.redirect(`/userCenter?nick_name=${findResult.nick_name}`)
      // response.cookie('nick_name',findResult.nick_name,{maxAge:30 * 1000})
      //第一次将就加密🔐
      response.cookie('_id',findResult._id.toString(),{maxAge:30 * 1000})
      response.redirect('/userCenter')

    } else {
      // response.send('😣抱歉，📮邮箱或者密码输入错误❌，请🤔再登陆')
      errMsg.loginErr = '😣抱歉，📮邮箱或者密码输入错误❌，请🤔再登陆';
      response.render('login',{errMsg});
    }
  }
  catch (err) {
    console.log('登陆失败', err)
    // response.send('😣哎呦，抱歉，页面走丢了！')
    errMsg.netWorkErr = '😣哎呦，抱歉，页面走丢了！';
    response.render('login',{errMsg})
  }
})

module.exports = router;