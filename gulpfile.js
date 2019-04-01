var gulp = require("gulp");
var cssnano = require('gulp-cssnano');
var php  = require('gulp-connect-php');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require("browser-sync").create();

var path = {
  css: {  src: "app/css", dest: "dist/css" },
  js: { src: "app/js", dest: "dist/_js" },
  html: { src: "app/", dest: "dist/" }
};

function js() {
  return gulp.src(['app/js/*.js', 'app/js/*.js']).pipe(concat('all.js')).pipe(uglify()).pipe(gulp.dest(path.js.dest));
}

function css() {
  return gulp.src(['app/css/*.css']).pipe(concat('app.css')).pipe(cssnano()).pipe(gulp.dest(path.css.dest));
}

function html() {
  return gulp.src(['app/*.html']).pipe(gulp.dest('dist/'));
}

function php(){
  php.server({ base: 'app', port: 8010, keepalive: true});
}

function watch() {
  browserSync.init({ proxy: "localhost" });
  gulp.watch(path.js.src, js);
  gulp.watch(path.css.src, css);
  gulp.watch(path.html.src, html);
  gulp.watch("app/*.html", reload);
}


function reload(){ browserSync.reload(); }


exports.js = js;
exports.html = html;
exports.css = css;
exports.watch = watch;
exports.php = php
