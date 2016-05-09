var orm = require('../config/orm.js');
var express = require('express');
var app = express();

module.exports = function(app){

	app.get('/', function(req,res) {
		orm.enterBurger(function(data){
			res.render('index', data);
		});
		
	 })

	app.put('/update', function(req,res){
		orm.updateBurger(req.body.burger_type, function(data){

		});

	    res.redirect('/');
	});

	app.put('/devour/:name', function(req,res){
		var burger= req.params.name;
		orm.devourBurger(burger, function(data){

		});
	   
	    res.redirect('/');
	});
}

