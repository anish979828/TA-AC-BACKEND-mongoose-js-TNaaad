var mongoose = require("mongoose");
var express = require("express");

var app = express();


mongoose.connect("mongodb://localhost/india",{ useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to MongoDB');
    // Start your application or perform further operations
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  })
app.listen(3000,() => {
    console.log("port is running is port on 3k");
});

