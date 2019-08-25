var express = require('express');
var app = express();
var path = require('path');

app.use("/static", express.static(__dirname + '/static'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/app', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/app.html'));
});
app.use(express.static('static'));

app.listen(8080, () => {
	console.log('Commencing primary ignition');
})