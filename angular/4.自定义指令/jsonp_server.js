var express = require('express');
var app = express();
app.get('/check',function (req,res) {
    var data = req.query;
    var callback = data.callback;
    console.log('check');
    if(data.username == 'admin'){
        res.send(callback+'('+JSON.stringify({unique:false})+')');
    }else{
        res.send(callback+'('+JSON.stringify({unique:true})+')');
    }
});

app.use(function (req,res,next) {
    console.log('use');
    res.end('data');
})
app.listen(8080);