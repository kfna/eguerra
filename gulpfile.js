var gulp = require("gulp");
var cssnano = require('gulp-cssnano');
var php  = require('gulp-connect-php');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var handlebars = require('gulp-compile-handlebars');

var browserSync = require("browser-sync").create();

var path = {
  css: {  src: "app/css", dest: "dist/css" },
  js: { src: "app/js", dest: "dist/_js" },

  html: { src: "app/", dest: "dist/" },
  php: { src: "app/", dest: { ctrl: "dist/_ctrl", class: "dist/_class", config: "dist/_config" } }
};

function js() {
  //.pipe(uglify())
  return gulp.src(['app/js/*.js', 'app/js/*.js']).pipe(concat('all.js')).pipe(gulp.dest(path.js.dest));
}

function css() {
  return gulp.src(['app/css/*.css']).pipe(concat('app.css')).pipe(cssnano()).pipe(gulp.dest(path.css.dest));
}

function html() {
  //return gulp.src(['app/*.html']).pipe(gulp.dest('dist/'));
}
function php_ctrl() {
  return gulp.src(['app/_ctrl/*.php']).pipe(gulp.dest(path.php.dest.ctrl));
}
function php_class() {
  return gulp.src(['app/_class/*.php']).pipe(gulp.dest(path.php.dest.class));
}
function php_config() {
  return gulp.src(['app/_config/*.php']).pipe(gulp.dest(path.php.dest.config));
}

function php(){
  php.server({ base: 'app', port: 8010, keepalive: true});
}

function watch() {
  browserSync.init({ proxy: "localhost" });
  gulp.watch(path.js.src, js);
  gulp.watch(path.css.src, css);
  gulp.watch(path.html.src, html);
  gulp.watch(path.php.src, php_ctrl);
  gulp.watch(path.php.src, php_class);
  gulp.watch(path.php.src, php_config);
  gulp.watch("app/*.html", reload);
  gulp.watch("app/template/*.hbs", template);
}

function run() {
  js();
  css();
  html();
  php_ctrl();
  php_class();
  php_config();
  return;
}

function template(){
  var templateData = {};
	var options = {
      batch : ['app/template/partials'],
    helpers : {
        isFilter : function(filter){ if(filter==true){ return "" } else { return "hide"; }  },
        isSlugEmpty : function(slug){ if(slug!==undefined){ return "active" } else { return ""; }  },
        toJSON : function (obj){ return new handlebars.Handlebars.SafeString(JSON.stringify(obj)); },
        trim : function (str){ return str.replace(/\s/g,''); },
        isNull : function (str){ if(str=="" || str==null){ return true; }else{ return false; } }
    }
  }

  return gulp.src('app/template/*.hbs')
    .pipe(handlebars(templateData, options))
    .pipe(rename(function(path) {
        path.extname = '.html';
    }))
    .pipe(gulp.dest('dist'));
}



function reload(){ browserSync.reload(); }

exports.run = run;
exports.js = js;
exports.html = html;
exports.ctrl = php_ctrl;
exports.class = php_class;
exports.css = css;
exports.watch = watch;
exports.php = php
exports.template = template;
