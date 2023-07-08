var mongoose = require('mongoose');
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var express = require('express');
var app = express();

// custom middleware
app.use((req, res, next) => {
  res.send('Welcome to express World!');
  next();
});


// built-in middlewares
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

// third-party middleware
app.use(logger("dev"));
app.use(cookieParser());


// app,use()

// routes
app.get('/ping', (req, res) => {
  res.send({ working: true });
});

app.get('/', (req, res) => {
  res.readFile(__dirname + '/index.html');
});

app.post('/', (req, res, next) => {
  res.json(req.body);
});

app.get("/",(req,res,next) => {
  res.json(req.body);
});

// mongoose

mongoose
  .connect(
    'mongodb://127.0.0.1:27017/india?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0'
  )
  .then(() => {
    console.log('Connected to MongoDB');
    // Start your application or perform further operations
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

app.listen(3000, () => {
  console.log('port is running is port on 3k');
});
