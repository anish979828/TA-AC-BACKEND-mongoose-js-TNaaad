var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Schema = new Schema({
    name:{type: String,required:true},
    age:{type: Number, min:18, max:60},
    email:{type: String, lowercase:true, trim: true, match:/@/},
    password:{type:Number, minlength:5, maxlength:15},
    createdAt:{type: Date, default: new Date()}

},{ timestamps: true })