/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// This stack is using Express over top of NodeJS.

var express = require('express');
var app = express();

var path = require('path');
var bodyParser = require('body-parser');

// Configure App and set a view
app.set('view engine', 'ejs');

// Configure app to include files in the /views folder.
app.set('views', path.join( __dirname, '/views'));

// Use Middleware  - See API Reference from expressjs.com,  See Middleware.
// The order in which these come are important because these routes
// will be searched in order.

// Allow the app to access static files in the Bower.  This includes 
// all the Bootstrap files.
app.use(express.static(path.join(__dirname, 'bower_components')));

// Add the middleware bodyParser.  This is deprecated and should be replaced
// with json/urlencoded middlewares.
app.use(bodyParser());

// Conside using Passport for authentiction.  ToDo.

// Error handling middleware. Not sure exactly how this works, but the idea
// is that if we get an error, then we will render a message, rather than the
// stack trace.
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error:err
    });
});


app.use(require('./Controller'));


app.listen(1337, function() {
    console.log ('Ready on port 1337');
});



/* 
var http = require('http');
http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end ('Hello World\n');
    
}).listen (1337,'127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
 */