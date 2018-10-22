var gulp = require('gulp');
var postcss = require('gulp-postcss');
var postcssPresetEnv = require('postcss-preset-env');
var browserSync = require('browser-sync');

gulp.task('css', function() {
  var processors = [
    postcssPresetEnv
  ];

  return gulp.src('./src/precss/styles.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './src/'
    }
  });
});

gulp.task('watch', function() {
  gulp.watch('src/precss/**/*.css', ['css', browserSync.reload]);
  gulp.watch('src/js/**/*.js', browserSync.reload);
  gulp.watch('src/*.html', browserSync.reload);
});

gulp.task('default', ['css', 'browser-sync', 'watch']);
