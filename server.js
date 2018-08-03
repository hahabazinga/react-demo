var express = require('express');
var app = express();
var router = express.Router();
const name = 'name'
var reg = new RegExp(name + '=([^;]*)+(;|$)')
var cookie = 'name=' + encodeURIComponent('wang;sa') + ';pwd=ppp'
var arr = cookie.match(reg)
console.log(decodeURIComponent(arr[1]))
// respond with "hello world" when a GET request is made to the homepage
router.get('/a', function(req, res) {
    res.send('<h1>ao World</h1>');
});
router.get('/', function(req, res) {
    res.send('<h1>Hello World</h1>');
});
app.use('/home', router)
app.listen(3030)