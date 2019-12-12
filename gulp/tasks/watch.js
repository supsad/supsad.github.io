module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('src/html/**/*.html', $.gulp.series('html'));
        $.gulp.watch('src/static/sass/**/*.scss', $.gulp.series('sass'));
        $.gulp.watch('src/static/js/*.js', $.gulp.series('scripts'));
        $.gulp.watch('src/static/img/*', $.gulp.series('img:dev'))
    });
}