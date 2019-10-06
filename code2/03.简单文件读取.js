/* 
 简单文件读取：
    fs.readFile(path,[options],callback)
      --path:文件路径+文件名
      --options：配置选项(可选参数)
          --encoding:默认值utf8
          --flag:打开文件要进行的操作，默认是w
              ‘w’：直接写入
              ’a‘: 追加
      --callback:回调函数
          --err：错误对象
          --data：数据
*/
// 1.引入fs模块
let fs = require('fs');
// 简单文件读取
fs.readFile('./demo.txt', (err, data) => {
  if (!err) {
    // console.log(data.toString());
    fs.writeFile('./demo1.txt', data, (err) => {
      if (!err) {
        console.log('写入成功🎉🎉！');
      } else {
        console.log(err);
      }
    })
  } else {
    console.log(err);
  }
})