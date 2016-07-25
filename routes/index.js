var express = require('express');
var markdowm = require('markdown').markdown;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //Model('Article').find({}).populate('User').exec(function(err,docs){//populate把id转对象
        //docs.forEach(function(article){
        //    article.content = markdowm.toHTML(article.content);
        //});
        //res.render('index',{title:'my blog',articles:docs})
    //});
    res.redirect('articles/list/1/2')
});

router.get('/middle', function(req, res, next) {
    res.render('middle', { name: 'Express' });
});

module.exports = router;
