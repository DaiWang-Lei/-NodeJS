const fs = require('fs');

fs.writeFile('hello>@>?w.txt', '说明一下，我要👟入📃了！', (error) => {
  if (error) {
    console.log('写入失败了，请检查')
  } else {
    console.log('成功了，哇，！！😁怎么可能！')
  }
})