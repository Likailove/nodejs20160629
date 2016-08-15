var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function () {
    return gulp.src('app/less/*.less')
        .pipe(less()).pipe(gulp.dest('dist/css'))
});

gulp.task('default',['less']);
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
