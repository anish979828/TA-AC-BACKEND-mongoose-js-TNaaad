var express = require("express");
var mongoose = require("mongoose");
var User = require("../models/user");


var app = express();

// middleware
app.use(express.json());

// routes

// create user

app.post("/user",(req,res) => {
    User.create(req.body)
    .then((user) => {
        console.log(user);
    })
    .catch((err) => {
        console.log(err);
    })
});

// read user

app.get("/user/:id",(req,res) => {
    const id = req.params.id;
    console.log(id);
    const user = User.findById(id)
    .then((user) => {
        res.json(user);
    })
    .catch((err) => {
        console.log(err);
    })
});

// update user 
app.put("/user/:id",(req,res) => {
    const id = req.params.id;
    User.findByIdAndUpdate(id,req.body,{ new:true })
    .then((user) => {
        console.log(user)
        res.send(user.name+"succefully updated")
    })
    .catch((err) => {
        console.log(err.message)
    })
});

// dellete user
app.delete("/user/:id",(req,res) => {
    const id = req.params.id;
    console.log(id);
    User.findByIdAndDelete(id);
});






// database
// by default it connects to test database if we doesn't specify the route
mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0")
.then(() => {
    console.log("database connected to express app");
})
.catch((err) => {
    console.log("error in connecting to database",err.message);
});


// error handler
app.use((err,req,res,next) => {
    res.send(err);
});

app.listen(3000,() => {
    console.log("server is listenning is port 3k");
});