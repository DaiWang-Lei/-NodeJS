let db = require('./db');
let studentModel = require('./model/studentModel');

;(async () => {
  await db;

 await studentModel.create({
    stu_id: 201908200,
    name: 'TianxianXixi',
    age: 90,
    sex: '女',
    hobby: ['LOL', 'qq', '💐'],
    info: 'lucky',
  })
})();