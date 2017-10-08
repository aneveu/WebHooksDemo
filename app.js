var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());

var server = app.listen("8085", "localhost", function () {
    console.log(
        "App listening at http://%s:%s",
        server.address().address,
        server.address().port
    )
});

app.get('/', function (req, res) {
    res.send('Hello World!')
});