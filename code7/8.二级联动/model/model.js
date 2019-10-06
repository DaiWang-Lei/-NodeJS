let mongoose = require('mongoose');

let Scheam = mongoose.Schema;

let scheam = new  Scheam({
    id:String,
    province:String,
    city:String,
    county:String,
    name:String,
    level:Number
})

module.exports = mongoose.model('cities',scheam);