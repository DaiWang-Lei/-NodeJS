let mongoose = require('mongoose');

// 使用新的索引器
mongoose.set('useCreateIndex', true)

// 定义数据库名字
const DB_NAME = 'demo';
// 定义数据库地址
const DB_URL = 'localhost:27017';

// 构建一个promise实例，用于管理数据库连接
module.exports = new Promise((resolve, reject) => {
  // 连接数据库
  mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`, { useNewUrlParser: true });

  // 监听连接状态
  mongoose.connection.on('open', (err) => {
    if (!err) {
      console.log(`位于${DB_URL}的${DB_NAME}连接成功了！`);
      resolve();
    } else {
      reject();
    }
  })
});