module.exports = function () {
    $.gulp.task("scripts", function () {
        return $.gulp.src('src/static/js/**/*.js')
            .pipe($.gulp.dest('build/static/'))
            .pipe($.bs.reload({
                stream:true
            }));
    });
};