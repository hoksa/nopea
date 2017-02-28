var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var browserSync = require('browser-sync');

gulp.task('css', function() {
  var processors = [
    autoprefixer(),
    precss
  ];

  return gulp.src('./src/pcss/styles.css')
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
  gulp.watch('src/pcss/**/*.css', ['css', browserSync.reload]);
  gulp.watch('src/js/**/*.js', browserSync.reload);
  gulp.watch('src/*.html', browserSync.reload);
});

gulp.task('default', ['css', 'browser-sync', 'watch']);
