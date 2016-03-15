var express = require('express');
var PORT = process.env.PORT || 3000;

var app = express();
var todos = [
	{id: 1, description: 'Meet mom for lunch', completed: false},
	{id: 2, description: 'Study Node JS', completed: false},
	{id: 3, description: 'Go to class', completed: true}
];

app.get('/', function(req, res) {
	res.send('Todo API Root');
});

// GET /todos
app.get('/todos', function(req, res) {
	res.json(todos);
});

// GET /todo/:id
app.get('/todo/:id', function(req, res) {
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


























