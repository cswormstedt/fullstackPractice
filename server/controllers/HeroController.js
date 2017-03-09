var express = require('express');
var router  = express.Router();
var Heroes 	= require('../models/Heroes.js');

router.get('/', function(req, res){
	Heroes.find(function(err, heroes){
		console.log(heroes);
		res.render('heroes', {heroesArray: heroes});
	});
});

router.post('/:id', function(req, res){
	var heroes = new Heroes({   name:   req.body.name,
								movie:  req.body.movie,
								power:  req.body.power,
								height: req.body.height});
	heroes.save();
	res.redirect('/heroes')
});
	

	// var id = req.params.id;
	// var newInfo = req.body;

	// Heroes.findById(id, function(err, villain){
		
module.exports = router;