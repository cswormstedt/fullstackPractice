var express = require('express');
var app 	= express();
var server  = require('http').createServer(app);
var bodyParser = require('body-parser');
var path	= require('path');
var mongoose = require('mongoose');

require('./db/db.js');
var Villain = require('./models/Villains.js');

app.use(bodyParser.urlencoded({extended: true}));

app.set(express.static(path.join(__dirname,'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.get('/villains', function(req, res){
	res.render('home', {villainsArray: villains});
});

app.post('/villains', function(req, res){
	var name   = req.body.name;
	var movie  = req.body.movie;
	var power  = req.body.power;
	var height = req.body.height;


})


server.listen(3000, function(){
	console.log("yo it's andre port 3000");
})