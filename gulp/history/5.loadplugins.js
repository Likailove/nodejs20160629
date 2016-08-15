var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
//function load(){
//    var devDependencies = JSON.parse(fs.readFileSync('package.json'));
//    var $ = {};
//    for(var attr in devDependencies) {
//        if (attr.indexOf('gulp-') == 0) {
//            $[attr.slice(5)] = require(attr);
//        }
//    }
//    return $;
//}

gulp.task('default', function () {
    gulp.src('app/*.js')
        .pipe($.concat('all.js')).pipe(gulp.dest('dist'))
});

//编译sass  gulp-sass
//编译less  gulp-less
//合并文件   gulp-concat
//压缩js文件   gulp-uglify
//重命名js文件   gulp-rename
//优化图像大小   gulp-imagemin
//压缩css文件    gulp-minify-css
//创建本地服务器   gulp-connect
//实时预览   gulp-connect
//gulp-load-piugins
