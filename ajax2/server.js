var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.use(function (req,res) {
    console.log(req.headers.cookie);
    //res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Credentials','true');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    next();
})
app.all('/books',function (req,res,next) {
    //res.setHeader('Access-Control-Allow-Headers','Content-Type');
    //res.setHeader('Access-Control-Allow-Origin',"*");
    console.log(req.body);
    res.sendfile('books.json');
});

app.listen(8080);