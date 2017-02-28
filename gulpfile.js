var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

gulp.task('css', function() {
  var processors = [
    autoprefixer(),
    precss
  ];

  return gulp.src('./src/pcss/styles.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./src/css'));
});
