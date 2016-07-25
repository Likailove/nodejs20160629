//检查必须登录，不登录就跳到登陆页面
exports.checkLogin = function(req,res,next){
    if(req.session.user){
        next();
    }else{
        req.flash('error','你尚未登录，请登录');
        res.redirect('/users/login');
    }
}
//检查必须登录，已登录跳到首页
exports.noLogin = function(req,res,next){
    if(req.session.user){
        req.flash('error','你已经登录');
        res.redirect('/');
    }else{
        next();
    }
}
