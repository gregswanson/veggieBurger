var mysql = require('mysql');
var connection = mysql.createConnection({
    // port: 3306,
    // host: 'localhost',
    // user: 'root',
    // //password: 'nodeuser',
    // database: 'burgers_db'
    port: 3306,
    host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'mz575agbzv0spzl5',
    password: 'bdfasxzbxomb67mf',
    database: '5zs6j2qzvpmo55z'
});


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;