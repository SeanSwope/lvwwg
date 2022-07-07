var createError = require('http-errors');
var express = require('express');
var fileUpload = require('express-fileupload');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//var indexRouter = require('./routes/meetings');
var membersRouter = require('./routes/members');
var meetingsRouter = require('./routes/meetings');
var donationsRouter = require('./routes/donations');
var linksRouter = require('./routes/links');
// var newslettersRouter = require('./routes/newsletters');
var imagesRouter = require('./routes/images');
// var marketItemsRouter = require('./routes/market-items');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// enable files upload
app.use(fileUpload({
  createParentPath: true,
  debug: true
}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

// app.use('/api/', indexRouter);
app.use('/api/members', membersRouter);
app.use('/api/meetings', meetingsRouter);
app.use('/api/donations', donationsRouter);
app.use('/api/links', linksRouter);
// app.use('/api/newsletters', newslettersRouter);
app.use('/api/images', imagesRouter);
// app.use('/api/market-item', marketItemsRouter);

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
