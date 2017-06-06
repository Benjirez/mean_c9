var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT;
var host = process.env.IP;

require('./dbGraceful');


app.get('/', function(req, res){
   Cat.find().exec(function(err, cat){
       if(err){ throw err;}
       else{ res.json(cat); }
   });
});


app.listen(port, host, function(){
   console.log('yo hana listening on port: ' + port + ' and host is '+ host ); 
});
