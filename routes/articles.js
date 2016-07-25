var express = require('express');
var auth = require('../auth');
var multer = require('multer');//上传文件中间件
var path = require('path');//核心模块，不需安装
var markdowm = require('markdown').markdown;
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
});
var upload = multer({ storage: storage });

//var upload = multer({ dest: '../public/uploads/' });
var router = express.Router();

//添加文章
router.get('/list/:pageNum/:pageSize',auth.checkLogin, function(req, res, next) {
    //req.query;//get提交取值
    var pageNum = parseInt(req.params.pageNum)?parseInt(req.params.pageNum):1;
    var pageSize =parseInt(req.params.pageSize)?parseInt(req.params.pageSize):2;
    var query = {};
    if (req.query.keyword) {
        query['title'] = new RegExp(req.query.keyword, 'i');
    }
    Model('Article').count(query,function(err,count){
        Model('Article').find(query).skip((pageNum-1)*pageSize).limit(pageSize).sort({createAt:-1}).populate('User').exec(function(err,docs){//populate把id转对象
            docs.forEach(function(article){
                article.content = markdowm.toHTML(article.content);
            });
            res.render('index',{
                title:'my blog',
                articles:docs,
                keyword:req.query.keyword,
                pageNum:pageNum,
                pageSize:pageSize,
                totalPage:Math.ceil(count/pageSize)
            })
        });
    });
});

//添加文章
router.get('/add',auth.checkLogin, function(req, res, next) {
    res.render('article/add',{article:{}});
});
router.post('/add',auth.checkLogin, upload.single('img'),function(req, res, next) {
    var article = req.body;
    var _id = req.body._id;
    if(req.file){
        article.img =path.join( '/uploads',req.file.filename);
    }
    if(_id){//修改
        var update = {
            title:article.title,
            content:article.content
        };
        if(article.img){
            update.img = article.img;
        }
        Model('Article').findByIdAndUpdate(_id,{$set:update},function(err,doc){
            if(err){
                req.flash('error','更新文章失败！');
                return res.redirect('back');//回到上个页面
            }else{
                req.flash('success','更新文章成功！');
                res.redirect('/articles/detail/'+_id);
            }
        })
    }else{//新增
        var user = req.session.user;
        article.user = user._id;
        delete article._id;
        new Model('Article')(article).save(function(err,doc){
            if(err){
                req.flash('error','发布文章失败！');
                return res.redirect('back');//回到上个页面
            }else{
                //req.session.user = doc;
                req.flash('success','发布文章成功！');
                res.redirect('/');
            }
        });
    }
});
router.get('/detail/:_id',function(req, res, next) {
    var _id = req.params._id;
    Model('Article').findById(_id,function(err,doc){
        if(err || !doc){
            req.flash('error','文章不存在！');
            res.redirect('/');
        }else{
            req.flash('success','文章详情查询成功！');
            doc.content = markdowm.toHTML(doc.content);
            res.render('article/detail',{article:doc});
        }
    });
});
router.get('/edit/:_id',function(req, res, next) {
    var _id = req.params._id;
    Model('Article').findById(_id,function(err,doc){
        if(err || !doc){
            req.flash('error','文章不存在！');
            return res.redirect('back');//回到上个页面
        }else{
            req.flash('success','文章详情查询成功！');
            res.render('article/add',{article:doc});
        }
    });
});
router.get('/delete/:_id',function(req, res, next) {
    var _id = req.params._id;
    Model('Article').findByIdAndRemove(_id,function(err,doc){
        if(err){
            req.flash('error','删除文章失败！');
            return res.redirect('back');//回到上个页面
        }else{
            req.flash('success','删除文章成功！');
            res.redirect('/');
        }
    });
});
module.exports = router;