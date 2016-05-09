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

var orm = require('./config/orm.js');

require("./controllers/burgers_controller.js")(app);
        


var PORT = process.env.PORT || 3000;
app.listen(PORT);