// 引入mongoose

let mongoose = require('mongoose');

let dbPromise = new Promise((resolve, reject) => {
  // 连接数据库
  mongoose.connect('mongodb://localhost:27017/demo', { useNewUrlParser: true });

  // 监听连接状态
  mongoose.connection.on('open', (err) => {
    if (!err) {
      console.log('数据库连接成功了');
      resolve();
    } else {
      reject();
    }
  })
});

// 第一种写法
// dbPromise.then(() => {
//   // 4.操作数据库的代码
//   console.log('可以开始操作了！')
// }, (err) => {
//   console.log(err);
// })


// 第二种写法
// dbPromise
//   .then(() => {
//     // 4.操作数据库的代码
//     console.log('可以开始操作了2！')
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 第三种，(最常用的写法)
;(async() => { 
  // 等待数据库连接成功
  await dbPromise;
    console.log('可以开始操作了3！')

})();