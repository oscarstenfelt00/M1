const createError = require('http-errors');
//För att kunna använda appen måste man ha express paketet
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const movmentsRouter = require('./routes/movments');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());  

//För att kunna använda appen måste man ha express paketet
const mongoose = require('mongoose');
//Kopplar upp appen till databasen
mongoose.connect('mongodb+srv://stenfeltoscar00:Sonic_Lydia10@cluster0.n8gizhv.mongodb.net/umwDB?retryWrites=true&w=majority');
const db = mongoose.connection;
//Om det blev något fel i uppkopplingen så kommer ett felmedelande
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  //Lyckas kopplingen skrivs ett medelande i consolen
console.log("Kopplingen lyckades!");
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/movments', movmentsRouter);

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

module.exports = app;
