// require the modules
var express   = require('express'),
    morgan    = require('morgan'),
    compress  = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

// function to be required in app.js
module.exports = function() {

  var app = express();

  if ( process.env.NODE_ENV === "development" ){
    app.use(morgan("dev"));
  } else if ( process.env.NODE_ENV === "production" ){
    app.use(compress());
  }

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());
  app.use(methodOverride());

  require('../app/routes/index.server.routes')(app);

  app.use(express.static('./public'));

  return app;
};
