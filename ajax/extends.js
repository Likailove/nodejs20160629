/*
@param _defaultOptions  默认配置
@param options 用户自定义配置
*/
var utils = {
    extends:function(_defaultOptions,options){
        var result = {};
        for(var attr in _defaultOptions){
            result[attr] = options[attr] || _defaultOptions[attr];
        }
        return result;
    }
}
var _defaultOptions = {
    name:'kevin',
    age:6
}

var options = {
    name:'kevin1713',
    age:7
}

console.log(utils.extends(_defaultOptions,options));
console.log(utils.extends(_defaultOptions,{}));