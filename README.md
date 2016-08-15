# nodejs20160629
第一个nodejs项目
1、安装express
npm install -g express-generator
2、用express创建nodejs项目
express -e nodejs20160629
3、到项目目录下安装依赖
npm install
4、启动npm
SET DEBUG=nodejs20160629:* & npm start    #nodejs20160629@0.0.0 start D:\nodejs20160629
5、安装bower
npm install bower -g
6、初始化bower
bower init
7、创建配置文件
.bowerrc
{
  "directory":"./public/lib"
}
8、安装bootstrap
bower install bootstrap --save
如果下载了项目的话就bower install

9、安装mongoose
npm install mongoose --save

10、安装消息提醒一次中间件
npm install connect-flash --save

11、安装文件上传中间件
npm install multer --save

12、安装angularjs
bower install angular --save

13、安装angular-route
bower install angular-route --save

14、安装angular-ui-router
bower install angular-ui-router --save

15、安装gulp
npm install -g gulp
npm install gulp --save
npm install gulp-load-plugins gulp-concat --save-dev
npm install gulp-less --save-dev
npm install gulp-connect --save-dev
npm install gulp-uglify --save-dev
npm install gulp-rename --save-dev
npm install gulp-minify-css --save-dev
npm install gulp-imagemin --save-dev
npm install gulp-jshint --save-dev


16、安装yeoman项目生成器
npm install -g yo
mkdir gulpdemo
cd gulpdemo
npm install -g generator-gulp-webapp
yo gulp-webapp gulpdemo



GIT
git init
git add -A
git commit -m"init project"
git remote add origin git@github.com:Likailove/nodejs20160629.git
git push origin master
