var express = require('express')
    morgan = require('morgan'),
    compression = require('compression'),
    bodyParser = require('body-parser');

module.exports = function() {
  var app = express();
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.set('views', './server/app/views');
  app.set('view engine', 'ejs');
  app.use(express.static('public'));

  require('../app/routes/Broadcasting.route')(app);

  return app;
}
