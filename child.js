var http = require("http");

var counter = 0;
var server = http.createServer(function (req, res) {
    ++counter;
    res.end("Response number " + counter);
});

server.listen(8080);