// #!/usr/bin/env nodejs

var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(5000);