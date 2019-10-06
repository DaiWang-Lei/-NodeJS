const express = require('express');

const app = express();

app.get('/get_all_province',(request,response)=>{
cityModel.find({level:1},(err,data)=>{
    if(!err){
    }
})
})

app.get('/get_provice',(request,response)=>{

})
app.get('/get_provice',(request,response)=>{

})
app.listen(3000,(err)=>{
    if (!err) console.log('三级联动服务器启动成功了！');
    else console.log(err);
})