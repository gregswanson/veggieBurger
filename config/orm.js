var connection = require('./connection.js');

var orm = {
    enterBurger: function(req, res) {
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
    },
    updateBurger: function(req, res) {
    //mySQL commands
        var queryString = 'INSERT INTO burgers (burger_name, devoured) VALUES ("' + req.body.burger_type + '", 1)'; 
            connection.query(queryString, function(err, result) {
     
           });
        res.redirect('/');
    },

    devourBurger: function(re,res) {
    //mySQL commands
        var burger= req.params.name;
        //console.log(req.body.burger_type);
        var queryString = 'UPDATE burgers SET devoured=0 WHERE burger_name="' + burger + '"'; 
           connection.query(queryString, function(err, result) {
     
           });
        res.redirect('/');

}
};
    
module.exports = orm;





