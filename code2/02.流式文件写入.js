/* 流式文件写入：
  fs.createWriteStream(path[,options])
      --path:文件路径+文件名
      --options：配置选项(可选参数)
        --flags:打开文件要进行的操作，默认是w
              ‘w’：直接写入
              ’a‘: 追加
        --mode: 文件权限的限制，默认值是0o666
             --0o111:文件可被执行
             --0o222:文件可被写入
             --0o444:文件可被读取
        --encoding: 默认值utf8
        --fd:文件的唯一标识(了解就可以)
        --autoClose:自动关闭，当数据操作完闭，自动关闭文件，默认true
        --start：文件写入的起始位置(就像开头空几格一样)*/
// 1.引入fs模块
let fs = require('fs');
// 2.创建一个可写流
let ws = fs.createWriteStream('./demo.txt');
// 只要使用了流，必须给流增加监听
ws.on('open', () => {
  console.log('可写流打开了！😄')
});
ws.on('close', () => {
  console.log('可写流关闭了！😭')
})

// ws.write('滚滚长江东逝水\n');
// ws.write('🌊淘尽英雄\n');
// ws.write('是非成败转头空\n');
// ws.write('青山依旧在\n');
// ws.write('几度夕阳红\n');
ws.end('滚滚长江东逝水,\n🌊淘尽英雄');// 如果用到是Node的8版本以下(包含8).用close容易造成数据丢失.



