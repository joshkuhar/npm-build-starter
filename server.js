var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var path = require('path');
var app = express();
app.use(jsonParser);    

// Serves static file from /.build
app.use(express.static(path.join(__dirname, './build')));

// test GET endpoint
app.get('/', function(req, res) {
	console.log("hit");
    res.json({wutang: "clan"});
});
app.get("*", function(req, res) {
	console.log('test');	
	res.sendFile(path.join(__dirname, './build/index.html'));
});

app.listen(8080, function(){
	console.log("server listening on port 8080")
});