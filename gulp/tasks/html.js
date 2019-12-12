module.exports = function () {
    $.gulp.task('html', function () {
        return $.gulp.src('src/html/**/*.html')
        .pipe($.gulp.dest('build'))
        .on('end', $.bs.reload);
    })
}