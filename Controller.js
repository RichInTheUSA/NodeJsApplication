/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Define Routes - Defined with URL pattern and callback function.
// Use  app.get()
//      app.post()
//      app.put()
//      app.del()
//
// Req has many methods, common ones:
//      req.params      route parameters in URL
//      req.query       query string params... ?
//      req.get()       get header value
//      req.cookies     get cookie objects (requires middleware)
//      req.body        parses body (requires middleware)
//      req.is()        test content type of request body
//      req.accepts()   content negotiation for repsponse
//      req.url         URL that matched the current route (minus mount point)
//      req.originalUrl Original URL as sent by client
//      req.protocol    http or https
//      req.secure      true if protocol is https
//      req.host        value in Host header
//      req.subdomains  subdomains of Host
//      req.path        path in URL
//      req.xhr         true if X-Requested-With: XMLHttpRequest
//
// Res has many methods, common ones:
//      res.set()       set respopnse header
//      res.cookie()    modify respons cookies
//      res.redirect()  issue 301 or 302 redirect to URL
//      res.send()      write status with string/Buffer/Object/Array
//      res.json()      stringify JavaScript value
//      res.jsonp()     send JavaScript value to callback function
//      res.sendfile()  stream contents of file
//      res.download()  stream file with content-disposition: attachment
//      res.render      render view with usnig pluggable view engine.
//////////////////////////////////////////////////////////////////////////////


// Initialize Express - Required at the top of all Nodejs Express files.
var express = require('express');

// Create an Express router.  We will need to export it at the bottom
// of the file.
var router = express.Router();

// Fake a Model by creating a data structure.
var todoItems = [
        { id: 1, desc: 'foo' },
        { id: 2, desc: 'bar' },
        { id: 3, desc: 'baz' }
    ];
    
// Now start defining the routes that the app will repond to.

// Load the root page... 
router.get('/', function (req,res) {
    
    // Render the index.ejs file, which is in the views folder.
    // Pass it the title and items.
     
    res.render('index', {
        title: 'My App',
        items: todoItems
    });
});

// When a post is received on /add... then do this stuff
router.post('/add', function(req,res) {
    // Create a reponse.
    var newItem = req.body.newItem;
    
    // Extract data from the request, and update our Model.
    todoItems.push({
        id: todoItems.length + 1, 
        desc: newItem
    });
    
    // Redirect the user back to /.
    res.redirect('/');
});

/*  Just some ideas...

// Routes Pattern - get and post on the same URL
router.get('//:id', function (req, res) {
    var userId = req.params.id;   
});

router.post('/login', function (req, res) {
    // Verify creds and issue cookie 
});
 * 
 */

// Export our router so it can be referenced from other files.
module.exports = router;