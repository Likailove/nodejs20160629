var gulp = require('gulp');
gulp.task('default', function () {
    gulp.src(['../app/src.js','../app/src2.js'])//获取文件的流的api
        .pipe(gulp.dest('dist/dest.js'));//写的是目录
});