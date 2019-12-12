module.exports = function () {
    $.gulp.task('img:dev', function () {
        return $.gulp.src('src/static/img/*.png')
            .pipe($.gulp.dest('build/static/img/'))
    });

    $.gulp.task('img:build-png', function () {
        return $.gulp.src('src/static/img/*.png')
            .pipe($.gp.tinypng('jKvvTkxGgs2DqhDH8S2Mczr3cHwzkntk'))
            .pipe($.gulp.dest('build/static/img/'));
    });

    $.gulp.task('img:build-gif', function () {
        return $.gulp.src('src/static/img/*.gif')
            .pipe($.gulp.dest('build/static/img/'));
    });

    $.gulp.task('img:build-jpg', function () {
        return $.gulp.src('src/static/img/*.jpg')
            .pipe($.gp.tinypng('jKvvTkxGgs2DqhDH8S2Mczr3cHwzkntk'))
            .pipe($.gulp.dest('build/static/img/'));
    });
};