var express = require('express');
var router = express.Router();

//添加文章
router.get('/add', function(req, res, next) {
    res.render('article/add',{title:'发表文章'});
});
router.post('/add', function(req, res, next) {
    var article = req.body;
    var user = req.session.user;
    article.user = user._id;;
    new Model('Article')(article).save(function(err,doc){
        if(err){
            req.flash('error','发布文章失败！');
            return res.redirect('back');//回到上个页面
        }else{
            req.session.user = doc;
            req.flash('success','发布文章成功！');
            res.redirect('/');
        }
    });
});

module.exports = router;
