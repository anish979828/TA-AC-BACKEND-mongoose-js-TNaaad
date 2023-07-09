var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentsSchema = new Schema({
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    article:{
        type:String,
    }
});





module.exports = mongoose.model("Comment",commentsSchema); 