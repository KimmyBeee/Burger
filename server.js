var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var PORT = process.env.PORT || 3306

var app = express();

//Allow static content in the "public" directory to be used
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

//Set up handlebars
var exphbs = require("express-handlebars");

ap.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Inport Routes from the controller for the server to use
var routes = require("./controllers/burgers_controller");
app.use("/", routes);
app.listen(PORT);