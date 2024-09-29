const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter');
const diaryRouter = require('./routes/diaryRoutes');
const cors = require('cors');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');


// Use session middleware
app.use(session({
secret: 'your-secret-key',
resave: false,
saveUninitialized: false
}));
// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());
const corsOptions = {
  origin: ['http://localhost:5173']
};




require('dotenv').config();








app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); 

app.use('/public', express.static('public'));
app.use(cors(corsOptions));




// MongoDB Connection
mongoose.connect(process.env.db_url, {
   
  }).then(() => {
    console.log('Connected to Mongo database');
  }).catch(err => {
    console.error('Could not connect to Mongo database.', err);
  });
  


 



app.use('/users', userRouter);
app.use('/diaries', diaryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});








app.listen(5000, () => console.log("app listening on port 5000!"));


module.exports = app;