module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('src/static/sass/**/*.scss')
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.sass())
        .pipe($.gp.autoprefixer({
            overridebrowserslist: ['last 10 versions']
        }))
        .on("error", $.gp.notify.onError({
            title: "style"
          }))
        .pipe($.gp.csso())
        .pipe($.gp.sourcemaps.write())
        .pipe($.gulp.dest('build/static/'))
        .pipe($.bs.reload({
            stream:true
        }));
    })
}