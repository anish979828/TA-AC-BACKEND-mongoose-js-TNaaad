var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var addressSchema = new Schema({
    village: {
        type: String,
        required:true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    favoriate:[String],
    pin: {
        type: Number,
        min:5,
        max:15
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
},{ timestamps:true } );

module.exports = mongoose.model("Address",addressSchema);