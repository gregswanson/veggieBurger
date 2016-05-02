var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');

var hbs = exphbs.create({
    defaultLayout: 'main',
    // Specify helpers which are only registered on this instance. 
    helpers: {
        inc: function (value) { return parseInt(value) + 1; }
        
    }
});






app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


var connection = require('./config/connection.js')
// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   //password : 'nodeuser',
//   database : 'burgers_db'
// });
var orm = require('./config/orm.js');
// connection.connect(function(err) {
// if (err) {
// console.error('error connecting: ' + err.stack);
// return;
// };
// console.log('connected as id ' + connection.threadId);
//var routes = require('./controllers/burgers_controller.js');


// app.get('/', function(req,res) {
// //     //mySQL commands
// //     connection.query('SELECT * FROM burgers WHERE devoured = "1"' , function(err, col) {
// //       if (err) throw err;
// //         res.render('index', {col});
// //         //console.log(col);
// //         });
    
//     connection.query('SELECT * FROM burgers' , function(err, col) {
//       if (err) throw err;
//         res.render('index', {col});
//         console.log({col});
//         });
//     })

app.get('/', function(req,res) {
    //mySQL commands
    var queryString = 'SELECT * FROM burgers';
    var eatIt =[];
    var devourIt = [];


    connection.query(queryString, function(err, col) {
      
      if (err) throw err;
	      
	      for (var i = 0; i < col.length; i++){
	      	if (col[i].devoured == 0){
	      		devourIt.push(col[i]);
	      	} else {
	      		eatIt.push(col[i]);
	      	}

        }
        var data = {eatIt: eatIt, devourIt: devourIt};
        res.render('index', data);
        //console.log(data);
	})
 })

app.put('/update', function(req,res){
    //mySQL commands
    //console.log(req.body.burger_type);
    var queryString = 'INSERT INTO burgers (burger_name, devoured) VALUES ("' + req.body.burger_type + '", 1)'; 
        connection.query(queryString, function(err, result) {
 
           //console.log(req.body.burger_type);
       });
    res.redirect('/');
});

app.put('/devour/:name', function(req,res){
    //mySQL commands
    var burger= req.params.name;
    //console.log(req.body.burger_type);
    var queryString = 'UPDATE burgers SET devoured=0 WHERE burger_name="' + burger + '"'; 
       connection.query(queryString, function(err, result) {
 
           console.log(req.params.name);
       });
    res.redirect('/');
});
    
    


var port = 3000;
app.listen(port);