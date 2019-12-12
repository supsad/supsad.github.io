module.exports = function () {
    $.gulp.task('serv', function() {
        $.bs.init({
            server: {
                baseDir: "./build"
            }
        });
    });
}