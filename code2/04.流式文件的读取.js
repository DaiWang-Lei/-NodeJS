





// 1.引入fs模块
let fs = require('fs');
// 2.创建一个可读流
// 对于可读流来说，当没有数据可以继续读取时，会自动关闭流
let rs = fs.createReadStream('./demo.txt');
let ws = fs.createWriteStream('./demo3.txt');
// 只要使用了流，就必须给流增加监听
rs.on('open', () => {
  console.log('读取流打开了');
})
rs.on('close', () => {
  console.log('读取流关闭了');
  ws.end();

})
// 3.当给可读流绑定一个data事件，会自动触发流读取文件
rs.on('data', (data) => {
  // console.log(data.toString());
  fs.writeFile('./demo2', data, (err) => {
    if (!err) {
      console.log('读取写入成功🎉')
    } else {
      console.log(err);
    }
  });
  ws.on('open', () => {
    console.log('可写流打开')
  })
  ws.on('close', () => {
    console.log('可写流关闭')
  })
  ws.write(data);
})