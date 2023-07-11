var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        minlength:10,
        maxlength:30
    },
    tags:{
        type:String,
        lowercase:true
    },
    likes:{
        type:Number,
        default:0
    },
    author:{
        type:String,
        required:true
    },
    comments:[String]
},{ timestamps:true });





module.exports = mongoose.model("Article",articleSchema); 