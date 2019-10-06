// 浏览器中的JS没有操作文件的能力
// 但是Node中的JS有文件操作的能力

// fs是 filesystem的简写，就是文件系统的意思
// 在Node 中如果想要进行文件操作，就必须引入fs这个核心模块
// 在fs这个核心模块中，就提供了所有的文件操作相关的API 
// 例如： fs.readFile 就是用来读取文件的

// 1.使用 require 方法加载fs 核心模块
const fs = require('fs');

// 2.读取文件
// 第一个参数就是文件路径
// 第二个参数是一个回调函数💦
// 
// 成功
// data 数据
//  error null
// 失败
// data null
// error 错误对象
fs.readFile('hello.txt', (error, data) => {
  
  //<Buffer 68 65 6c 6c 6f 20 20 4e 6f 64 65 2e 6a 73>
  // 默认二进制数据
  // 这里是二进制转化为16进制
  if(error){
    console.log('文件读取失败！')
  }else{
    console.log(data.toString());

  }


})