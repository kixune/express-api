var mongo_url = process.env.MOGODB_URI || 'mongodb://localhost/myinfo';

// require mongoose
var mongoose = require('mongoose');
mongoose.promise = global.Promise;
mongoose.connect(mongo_url);


// require express.js to gain access to npms installed
var express = require('./config/express');
var app = express();

// set the port
app.set('port', (process.env.PORT || 3000));

// listen to the port
app.listen(app.get('port'), function() {
  console.log('Run at localhost:' + app.get('port') + '...\n3\n2\n1\nG o  G o  G o');
});


module.exports = app;
