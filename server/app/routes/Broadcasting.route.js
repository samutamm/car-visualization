var broadcast = require('../controllers/Broadcasting.controller');

module.exports = function(app) {
  app.get('/1', broadcast.serve);
}
