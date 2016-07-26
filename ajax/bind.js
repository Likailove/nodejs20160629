var util = {
    bind:(function(){
        //if(Function.prototype.bind){
        //    return function(func,context){
        //        return func.bind(context);
        //    }
        //}
        return function(){
            var args = Array.prototype.slice.call(arguments,2);
            var func = args.shift();//第一个参数
            var context = args.shift();//第二个参数
            return function (){
                func.apply(context,args.concat(Array.prototype.slice.call(arguments)));
            }
        }
    })()
}

function say(age,word){
    console.log(this.name,age,word);
}
var obj = {name:'lk'};
//var newSay = say.bind(obj);
var newSay = util.bind(say,obj,8);
newSay('hello');