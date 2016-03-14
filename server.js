var express = require('express');
var PORT = process.env.PORT || 3000;

var app = express();

app.get('/', function(req, res) {
	res.send('Todo API Root');
});


app.listen(PORT, function() {
	console.log('Server listening on port %d', PORT);
})