var orm = require('../config/orm.js');
var express = require('express');
var app = express();

module.exports = function(app){

	app.get('/', function(req,res) {
		orm.enterBurger(function(data){
			res.render('index', data);
		});
		

	    //mySQL commands
	 //    var queryString = 'SELECT * FROM burgers';
	 //    var eatIt =[];
	 //    var devourIt = [];


	 //    connection.query(queryString, function(err, col) {
	      
	 //      if (err) throw err;
		      
		//       for (var i = 0; i < col.length; i++){
		//       	if (col[i].devoured == 0){
		//       		devourIt.push(col[i]);
		//       	} else {
		//       		eatIt.push(col[i]);
		//       	}

	 //        }
	 //        var data = {eatIt: eatIt, devourIt: devourIt};
	 //        res.render('index', data);
	 //        //console.log(data);
		// })
	 })

	app.put('/update', function(req,res){
		orm.updateBurger(req.body.burger_type, function(data){

		});

	    // //mySQL commands
	    // var queryString = 'INSERT INTO burgers (burger_name, devoured) VALUES ("' + req.body.burger_type + '", 1)'; 
	    //     connection.query(queryString, function(err, result) {
	 
	    //    });
	    res.redirect('/');
	});

	app.put('/devour/:name', function(req,res){
		var burger= req.params.name;
		orm.devourBurger(burger, function(data){

		});
	    //mySQL commands
	    
	    //console.log(req.body.burger_type);
	    // var queryString = 'UPDATE burgers SET devoured=0 WHERE burger_name="' + burger + '"'; 
	    //    connection.query(queryString, function(err, result) {
	 
	    //    });
	    res.redirect('/');
	});
}

//module.exports = burgersController;
