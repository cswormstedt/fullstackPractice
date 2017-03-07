var express = require('express');
var router 	= express.Router();
var Villain = require('../models/Villains.js');

router.get('/', function(req, res){
	Villain.find(function(err, villains){
		console.log(villains);
	res.render('villains', {villainsArray: villains});
	});
});

router.post('/', function(req, res){
	var name   = req.body.name;
	var movie  = req.body.movie;
	var power  = req.body.power;
	var height = req.body.height;

	var villains = new Villain({ name: name,
								movie: movie,
								power: power,
								height: height});
	villains.save();
	res.redirect('/villains')
});

module.exports = router;