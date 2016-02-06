var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');


var app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,"../app/dist")));

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here
router.get('/map-data', function(req, res) {
  res.json({ message: 'You just requested some map data!'});
})

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);


app.listen(8000,function(){
    console.log("Started listening on port", 8000);
})


// var express = require('express');
// var app = express();

// //Specify a port
// var port = process.env.port || 8000;

// //Serve up files in public folder
// app.use('/', express.static(__dirname + '../app/dist'));

// //Start up the website
// app.listen(port);
// console.log('Listening on port: ', port);
