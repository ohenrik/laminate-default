var gulp = require('gulp');
var config = require('../gulp.config')();
var $ = require('gulp-load-plugins')();
var autoprefixer = require('autoprefixer-stylus');

// Style: CSS/Stylus
gulp.task('styles', ['clean:css'], function() {
  return gulp.src(config.src.indexCss)
    .pipe($.sourcemaps.init())
    .pipe($.stylus({
      use: [
        autoprefixer(),
      ],
    }))
    // .pipe($.minifyCss({compatibility: 'ie8'}))
    .pipe($.sourcemaps.write(config.dist.maps))
    .pipe(gulp.dest(config.dist.assets));
});
