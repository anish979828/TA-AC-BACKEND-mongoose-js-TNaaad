var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    name:{type: String,required:true},
    description:{type:String,maxlength:20}
});

module.exports = mongoose.model("Article",articleSchema);