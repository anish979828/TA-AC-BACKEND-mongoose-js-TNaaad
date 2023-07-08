var mongoose = require("mongoose");


var address = mongoose.Schema;

var Schema = mongoose.Schema;

var Schema = Schema({
    name:String,
    age:{ type:Number, default:0},
    email:{type:String,lowecase:true},
    favorites:[String],
    marks:[Number]
})

var Address = new address({
    village:String,
    city:String,
    state:String,
    pin:Number,
    user: Date
})




