var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jsLint', function () {
   gulp.src('src/*.js')
       .pipe(jshint())//把less编译成css
       .pipe(jshint.reporter())//保存此文件
});

gulp.task('default',['jsLint']);
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
