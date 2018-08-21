var express = require('express');
var app = express();
var router = express.Router();
var https = require('https');

/*const name = 'name'
var reg = new RegExp(name + '=([^;]*)+(;|$)')
var cookie = 'name=' + encodeURIComponent('wang;sa') + ';pwd=ppp'
var arr = cookie.match(reg)
console.log(decodeURIComponent(arr[1]))*/
// respond with "hello world" when a GET request is made to the homepage

router.get('/', function(req, res) {
    const appkey = 'a66edc481d5f8640ddee452fb1c12596';
    const num = '65806686409'
    const url = 'https://way.jd.com/jisuapi/query'
    const options = url+'?type=auto&number='+num+'&appkey='+appkey
    let now = new Date()
    https.get(options, (re) => {
        re.on('data', (d) => {
            console.log(new Date()-now);
            res.send(JSON.parse(d))
        })
    })
})
app.use('/home', router)
app.listen(3030)
