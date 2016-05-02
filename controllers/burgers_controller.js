var orm = require('../models/burger.js');
var express = require('express');
var app = express();

var routes = {
			//home get route
		app.get('/', function(req,res) {
    //mySQL commands
    connection.query('SELECT * FROM burgers WHERE devoured = "1"' , function(err, col) {
      if (err) throw err;
        res.render('index', res);
        });
    })
		
		    //res.render('index');


		// //delete route -> back to home
		// app.delete('/delete', function(req,res){
		//     //mySQL commands
		//     connection.query('DELETE FROM day_planner WHERE ID = 1', function(err, result) {
		//     if (err) throw err;
		//     });
		//     res.redirect('/');
		// });

		// //put route -> back to home
		// app.put('/update', function(req,res){
		//     console.log("PUT received: ->");
		//     console.log(req.body);
		//     //mySQL commands
		//     connection.query('UPDATE day_planner SET plan = ? WHERE ID = ?', [req.body.user_plan, 1], function(err, result) {
		//     if (err) throw err;
		//     });
		//     res.redirect('/');
		// });

}


module.exports = routes; 