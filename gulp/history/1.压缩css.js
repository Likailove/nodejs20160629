var gulp = require('gulp');
var less = require('gulp-less');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('minify', function () {
   return gulp.src('app/less/page.less')
       .pipe(less())//把less编译成css
       .pipe(gulp.dest('dist/css'))//保存此文件
       .pipe(minify())//对css文件进行压缩
       .pipe(rename('page.min.css'))//对此文件进行重命名
       .pipe(gulp.dest('dist/css'))//再输出一次
});

gulp.task('default',['minify']);
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
