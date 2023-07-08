var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Schema = new Schema({
    name:String,
    email:String,
    age:Number,
});

var Schema2 = new Schema({
    name:String,
    email:{
        type: String,
        lowercase:true
    },
    age: {
        type: Number,
        default: 18
    },
    
});



