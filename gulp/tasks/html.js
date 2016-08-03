var gulp = require('gulp');
var config = require('../gulp.config')();
var $ = require('gulp-load-plugins')();

// 'layout'
gulp.task('html', [], function() {
  return gulp
    .src(config.src.html)
    .pipe($.flatten())
    .pipe(gulp.dest(config.dist.path));
});
