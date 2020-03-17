var gulp = require('gulp');
var sass = require('gulp-sass');
const concat = require('concat');




sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./sass/*.sass')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css/min'));
    concat('./css/min', './css/style.min.css');
});

gulp.task('concat', function () {
    return concat('./css/min', './css/style.min.css');
});

gulp.task('default', function () {
    gulp.watch('./sass/*.sass', gulp.series('sass', 'concat'));

});