// app.js
var createError = require('http-errors');
const bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');
var indexRouter = require('./routes/index'); // The router we just created
var usersRouter = require('./routes/users'); // If you have any user-related routes

var app = express();

// Serve static files from the 'public' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');  // Using Handlebars as the templating engine

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Route setup
app.use('/', indexRouter);  // Main index route handler
app.use('/users', usersRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

app.post('/submit', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Log the details to the command prompt
  console.log('Contact Form Submission:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);
  
  // Respond to the user
  res.send('<h1>Thank you for your message!</h1><p>Your details have been logged.</p>');
});

module.exports = app;