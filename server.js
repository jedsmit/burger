//dependancies 
var express = require("express");
var hbs = require("express-handlebars");
var router = require("./controllers/burgers_controller.js")

var PORT = process.env.PORT || 3000;

var app = express();

app.use(router);

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



//listen
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
