const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./router');
const cors = require('cors');
const app = express();

const loggerLevel = process.env.NODE_ENV === 'development' ? 'dev' : 'tiny';

app.use(logger(loggerLevel));

app.use(cors());

app.use(bodyParser.json({ limit: '50mb' }));

app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (process.env.NODE_ENV === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.send({
    message: err.message
  });
});


module.exports = app;
