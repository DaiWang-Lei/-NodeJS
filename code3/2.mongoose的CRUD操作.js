/* 
  mongoDB:一个非关系型数据库的名称
  mongod:启动mongo服务的命令
  mongo:连接数据库的命令
  mongoose:在Node端连接数据库的一个框架
*/


// 引入mongoose

let mongoose = require('mongoose');

// 使用新的索引器
mongoose.set('useCreateIndex', true)

// 定义数据库名字
const DB_NAME = 'demo';
// 定义数据库地址
const DB_URL = 'localhost:27017';

// 构建一个promise实例，用于管理数据库连接
let dbPromise = new Promise((resolve, reject) => {
  // 连接数据库
  mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`, { useNewUrlParser: true });

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
// 具体的业务逻辑
; (async () => {
  // 等待数据库连接成功
  await dbPromise;

  // 1.请来一个保安 ------ 引入约束Schema
  let Schema = mongoose.Schema;

  // 2.制定一个进入你家的规则---- 创建一个约束对象实例
  let studentSchema = new Schema({
    stu_id: {
      type: String,
      required: true, //限制学号是必填信息
      unique: true //限制学号是唯一的
    },
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    sex: {
      type: String,
      required: true
    },
    hobby: [String],
    info: {
      type: Schema.Types.Mixed //接受所有类型
    },
    date: {
      type: Date,
      default: Date.now()
    },
    enable_flag: {
      type: String,
      default: 'Y'
    }
  });

  /* 3.告诉保安你的规则------创建模型对象 
    第一个参数与数据库中的集合相对应，第二个参数制定约束对象实例
    只要生成了模型对象，就可以进行数据的，增删改查
  */
  let studentModel = mongoose.model('students', studentSchema);

  //  4.操作数据库(增删改查)
  // 增加数据
  /* studentModel.create({
    stu_id: 2019082002,
    name: 'Leilei',
    age: 18,
    sex: '女',
    hobby: ['LOL', 'qq', '💐'],
    info: 'lucky',

  }, (err, data) => {
    if (!err) {
      console.log('数据插入成功', data);
    } else {
      console.log(err);
    }
  }); */

  studentModel.findOne({ sex: '女' },{name:1}, (err,data) => {
    if (!err) {
      console.log(data);
    } else {
      console.log(err)
    }
  })





})();