var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));


// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/style.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/style.css'));
});



app.get('/src/characters/creed.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/characters/creed.js'));
});

app.get('/src/characters/jim.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/characters/jim.js'));
});

app.get('/src/characters/kevin.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/characters/kevin.js'));
});



app.get('/media/hayPlaceTheme.mp4', function(req, res) {
    res.sendFile(path.join(__dirname + '/media/hayPlaceTheme.mp4'));
});



app.get('/src/adapter.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/adapter.js'));
});

app.get('/src/Character.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/Character.js'));
});

app.get('/src/CharacterController.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/CharacterController.js'));
});

app.get('/src/HayPatch.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/HayPatch.js'));
});

app.get('/src/HayPatchController.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/HayPatchController.js'));
});

app.get('/src/index.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/index.js'));
});

app.get('/src/Maze.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/Maze.js'));
});

app.get('/src/MazeController.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/MazeController.js'));
});

app.get('/src/MazeUser.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/MazeUser.js'));
});

app.get('/src/MazeUserController.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/MazeUserController.js'));
});

app.get('/src/User.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/User.js'));
});

app.get('/src/UserController.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/UserController.js'));
});

app.listen(8080);
