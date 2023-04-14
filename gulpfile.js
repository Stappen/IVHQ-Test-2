// Sass configuration
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const ignore = require('gulp-ignore');

gulp.task('sass', function (cb) {
    gulp
        .src('css/*.scss')
        .pipe(ignore.exclude('variables.scss'))
        .pipe(sass())
        .pipe(
            gulp.dest(function (f) {
                return f.base;
            })
        );
    cb();
});

gulp.task(
    'default',
    gulp.series('sass', function (cb) {
        gulp.watch('css/*.scss', gulp.series('sass'));
        cb();
    })
);