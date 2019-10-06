let mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

const DB_NAME = 'demo';

const DB_URL = 'localhost:27017';

let dbPromise = new Promise((resolve, reject) => {
    // 连接数据库
    mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`, {useNewUrlParser: true});

    // 设置监听状态
    mongoose.connection.on('open', (err) => {
        if (!err) {
            console.log('数据库联机成功了');
            resolve();
        } else reject();
    })
})