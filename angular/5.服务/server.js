var express = require('express');
var app = express();
app.use(function (req,res,next) {
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.statusCode = 404;
    res.end();
});

app.listen(8080);