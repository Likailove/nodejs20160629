var express = require('express');
var app = express();
app.all('/jsonp/su',function (req,res) {
    var data = req.query;
    var callback = data.cb;
    res.send(callback+'({s:["a","a2","a3"]})');
});

app.listen(8080);