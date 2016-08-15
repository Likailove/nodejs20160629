var gulp = require('gulp');
var fs = require('fs');
var Q = require('q');
gulp.task('1', function () {
    console.log('1');
});
/*gulp.task('2', function (callback) {//callback告诉gulp这是一个异步任务
    setImmediate(function () {
        fs.writeFile('1.txt','hello', function (err) {
            callback();
        })
    })
    //setTimeout(function () {
    //    console.log('2');
    //},3000)
});*/

gulp.task('2', function () {
    var defer = Q.defer();
    setImmediate(function () {
        fs.writeFile('1.txt','hello', function (err) {
            defer.resolve('success');
        })
    });
    return defer.promise;
});

gulp.task('3', function () {
    console.log('3');
});
gulp.task('default', ['1','2','3'], function () {
    fs.readFile('1.txt','utf8', function (err,data) {
        console.log(data)
    });
});

gulp.task('hello', function () {
    console.log('hello');
});

//gulp.task('default', function () {
//    gulp.src('app/**/*.js')
//        .pipe(gulp.dest('dist'));
//});

gulp.task('default1', function () {//设置base基础输出路径
    gulp.src(['app/bootstrap/*.js','!app/jquery/*.js'],{base:'app'})
        .pipe(gulp.dest('dist'));
});

//命令gulp --gulpfile history/gulpfile1.js
//命令gulp --gulpfile 1.gulpfile.js --cwd history    指到这个目录下的文件
//gulp -T   显示依赖树
//gulp  src-----pipe------dest

gulp.task('copy-js', function () {
    console.log('copy-js');
});

/*gulp.task('异步依赖',function () {
    gulp.watch('app/!**!/!*.js',['copy-js']);
});*/

gulp.task('异步依赖',function () {
    gulp.watch('app/**/*.js', function (event) {
        console.log(event.path,event.type);
        switch (event.type){
            case 'added':
                fs.readFile(event.path, function (err,data) {
                    fs.writeFile(path.join('dist',
                    event.path.slice(path.resolve('app').length)),data);
                })
                break;
            case 'changed':
                fs.createReadStream(event.path).pipe(
                    fs.createWriteStream(path.join('dist',
                    event.path.slice(path.resolve('app'.length))))
                )
                break;
            case 'deleted':
                fs.unlink(path.join('dist',
                event.path.slice(path.resolve('app').length)))
                break;
            default:
                break;
        }
    });
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
