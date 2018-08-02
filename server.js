var express = require('express');
var app = express();
var router = express.Router();

// respond with "hello world" when a GET request is made to the homepage
router.get('/a', function(req, res) {
    res.send('<h1>ao World</h1>');
});
router.get('/', function(req, res) {
    res.send('<h1>Hello World</h1>');
});

app.use('/home', router)
app.listen(3000)