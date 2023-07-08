var express = require("express");
var mongoose = require("mongoose");

var app = express();

// mongoose
mongoose.connect(" mongodb://127.0.0.1:27017/india?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0")
.then(() => {
    console.log("Database conencted")
})
.catch((err) => {
    console.log("Error in connecting to database", err.message)
});

app.listen(3000,() => {
    console.log("server is listenning is on port 3k");
});