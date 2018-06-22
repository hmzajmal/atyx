// #!/usr/bin/env nodejs
// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(8080, 'localhost');
// console.log('Server running at http://localhost:8080/');

var express = require('express');
var app = express();

app.use(express.static(__dirname + "/build/"));
app.listen(5000);