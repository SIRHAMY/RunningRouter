var express = require("express");
var path = require("path");

var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
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