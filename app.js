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

app.post('/webhook', function (req, res) {
    var event = req.headers["x-github-event"];

    switch (event) {

        case "ping":
            res.send("Ping event received");
            console.log("Ping event received");
            break;

        case "watch":
            res.send("Watch event received");
            console.log("New watcher: ", req.body.sender.login);
            break;

        default:
            res.status(400).send("Event not supported yet:", event);
            console.log("Unsupported event: ", event);
            break;
    }
});