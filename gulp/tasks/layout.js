var gulp = require('gulp');
var config = require('../gulp.config')();
var $ = require('gulp-load-plugins')();
var nunjucksRender = require('gulp-nunjucks-render');

// This task renders the different layouts,
// so that the wrapping page html does not need to be included on every page
gulp.task('layout', ['clean:html'], function() {
  return gulp.src(config.src.html)
    .pipe($.plumber())
    .pipe(
      nunjucksRender({
        path: [config.src.path],
        envOptions: {
          tags: {
            blockStart: '<%',
            blockEnd: '%>',
            variableStart: '<<',
            variableEnd: '>>',
            commentStart: '<#',
            commentEnd: '#>'
          },
        }
      })
      .on('error', function(error) {
        $.util.log(error);
      })
    )
    .pipe(gulp.dest(config.dist.path));
});
