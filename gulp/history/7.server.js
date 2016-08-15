var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('server', function () {
    connect.server({
        root:'dist',//服务器根目录
        port:8081//服务器地址，没有配置默认8080
    })
});

gulp.task('default',['server']);
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
