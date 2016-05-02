var connection = require('./connection.js');

var orm = {
    enterBurger: function(burger_name) {
        var queryString = 'INSERT INTO burgers (burger_name, devoured) VALUES (?, "1")';
        connection.query(queryString, [burger_name], function(err, result) {
 
            console.log(result);
        });
    },
    displayBurger: function() {	
        var queryString = 'SELECT * FROM burgers WHERE devoured = "1"';
        connection.query(queryString, function(err, result) {
  
            console.log(result);
        });
    },
    devourBurger: function(burger_name) {
        var queryString = 'UPDATE burgers SET devoured="0" WHERE burger_name=?';

        connection.query(s, function(err, result) {
            console.log(result);
        });
    },
    displayDevoured: function() { 
        var queryString = 'SELECT * FROM burgers WHERE devoured = "0"';
        connection.query(queryString, function(err, result) {
  
            console.log(result);
        });
}

}
    
module.exports = orm;





