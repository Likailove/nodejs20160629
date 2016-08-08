var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.all('/ajax',function (req,res,next) {
    console.log(req.query);
    console.log(req.body);
    res.send('hello');
});

app.listen(8080);