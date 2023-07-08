var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        lowercase:true,
        match:/@/
    },
    age: {
        type:Number,
        default:0
    },
    createdAt: {
        type:Date,
        default:new Date()
    }
});

module.exports =  mongoose.model("User",userSchema);