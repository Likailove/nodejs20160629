var settings = require('../settings');
var mongoose = require('mongoose');
mongoose.connect(settings.dbUrl);
var ObjectId = mongoose.Schema.Types.ObjectId;
mongoose.model('User',new mongoose.Schema({
    username:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    avatar:{type:String}//头像
}));
mongoose.model('Article',new mongoose.Schema({
    title:{type:String,require:true},
    content:{type:String,require:true},
    createAt:{type:Date,default:Date.now()},
    img:{type:String},
    user:{type:ObjectId,ref:'User'}
}));
/*var db = mongoose.connect('mongodb://localhost:27017/nodedb');

//数据库连接
db.connection.on('error',function(err){
    console.log("database connect failed:"+err);
});

db.connection.on('open',function(){
    console.log("database connect success!");
});*/

global.Model = function(type){
    return mongoose.model(type);
}