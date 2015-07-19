var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('styles', function() {
    return sass('src/scss/styles.scss')
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('src/css'))
        .pipe(reload({ stream:true }));    
});

gulp.task('serve', ['styles'], function() {
    browserSync({
        server: {
            baseDir: './src'
        }
    });

    gulp.watch(['*.html', 'js/*.js'], {cwd: 'src'}, reload);
    gulp.watch('src/scss/*/**.scss', ['styles']);
});