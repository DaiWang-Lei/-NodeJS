let express = require('express');

let app = new express();

let cookieParser = require('cookie-parser')
//隐藏实现方法
app.disable('x-powered-by');
//暴露静态资源
app.use(express.static('public'));
//使用cookie-parser，解析浏览器携带过来当cookie为一个对象，随后挂载到request上
app.use(cookieParser())

//"种"cookie
app.get('/cookie1',(request,response)=>{
    /*
    * 当访问cookie1路由时会给客户端"种"一个cookie
    * 再express中给客户端"种"一个cookie，不用借助第三方库
    * */
    //给客户端"种"下一个会话cookie
    // response.cookie('demo','cookie1');

    //给客户端"种"下一个持久性cookie
    response.cookie('demo','cookie1',{maxAge:30 * 1000});

    response.send('我给你"种"下一个cookie')
});
//"读"cookie
app.get('/cookie2',(request,response)=>{
    /*
    * 当访问cookie2，会获取到浏览器携带过来到cookie
    * 再express中更方便的获取客户端携带过来的cookie，要借助以一个cookie-parser中间件
    * */

    console.log(request.cookies);
    response.send('我读到了你携带过来的cookie')
});
//"删除"cookie
app.get('/cookie3',(request,response)=>{
//    第一种删除方式
//     response.cookie('demo','',{maxAge:0})
    //第二种删除方式
    response.clearCookie('demo');
    response.send('我删除了一个cookie')
})
app.listen('3000',(err)=>{
    if (!err) console.log('服务器启动成功了！🎉')
    else console.log(err);
})