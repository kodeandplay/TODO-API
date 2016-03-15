var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.json());

var todos = []
var todoNextID = 1;

app.get('/', function(req, res) {
	res.send('Todo API Root');
});

// POST /todos
app.post('/todos', function(req, res) {
	var body = req.body;
	body.id = todoNextID++;
	todos.push(body);
	res.json(body);
});

// GET /todos
app.get('/todos', function(req, res) {
	res.json(todos);
});

// GET /todos/:id
app.get('/todos/:id', function(req, res) {
	var todoID = parseInt(req.params.id);
	var found = false;
	todos.forEach(function(todo) {
		if(todo.id === todoID) {
			found = true;
			res.json(todo);
		}
	});

	if(!found)
		res.status(404).send();
	
});

app.listen(PORT, function() {
	console.log('Server listening on port %d', PORT);
});


























