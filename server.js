var express = require('express');
var app = express();

app.use(express.static(process.argv[2]));

var server = app.listen(5000);

console.log("Server started on localhost:5000!")