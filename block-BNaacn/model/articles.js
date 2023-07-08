var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title:{type: String, required:true},
    description:{type: String,maxlength:20},
    tags:[String],
    createdAt:{type:Date, default: new Date()},
    likes:{type: Number , default:0}
});

module.exports =  mongoose.model("Article",articleSchema);