var gulp = require('gulp');
var config = require('../gulp.config')();

// Images
gulp.task('images', ['clean:images'], function() {
  gulp.src(config.src.images)
  .pipe(gulp.dest(config.dist.images));
});
