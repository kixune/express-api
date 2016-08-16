// function to be required in express.js
module.exports = function(app) {

  // require object with index property 
  var meController = require('../controllers/me.server.controller');

  // enable domain love
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  // this is the route to index
  app.get('/', meController.index);
};
