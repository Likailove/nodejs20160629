var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('uglify', function () {
   return gulp.src(['app/js/*.js','!app/js/*.tmp.js'])
       .pipe(concat('app.js'))//把多个js文件合并成一个文件
       .pipe(uglify())//对合并后的app.js文件进行压缩
       .pipe(gulp.dest('dist/js'));//输出到目的地
});

gulp.task('default',['uglify']);
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
