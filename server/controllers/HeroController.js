var express = require('express');
var router  = express.Router();
var Heroes 	= require('../models/Heroes.js');

router.get('/', function(req, res){
	Heroes.find(function(err, heroes){
		console.log(heroes);
		res.render('heroes', {heroesArray: heroes});
	});
});

router.post('/', function(req, res){
	var name   = req.body.name;
	var movie  = req.body.movie;
	var power  = req.body.power;
	var height = req.body.height;

	var heroes = new Heroes({ name: name,
								movie: movie,
								power: power,
								height: height});
	heroes.save();
	res.redirect('/heroes')
});

module.exports = router;