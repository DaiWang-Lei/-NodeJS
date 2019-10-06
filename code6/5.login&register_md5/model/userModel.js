let mongoose = require('mongoose');

let Schema = mongoose.Schema;

// 2.制定一个进入你家的规则---- 创建一个约束对象实例
let userSchema = new Schema({
  email: {
    type: String,
    required: true, //限制学号是必填信息
    unique: true //限制学号是唯一的
  },
  nick_name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
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
module.exports = mongoose.model('users', userSchema);