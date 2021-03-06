var express = require('./server/config/express');

var app = express();

app.set('port', (process.env.PORT || 3000));

var server = app.listen(app.get('port'), function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server started at http://localhost:%s', port);
});

module.exports = app;
