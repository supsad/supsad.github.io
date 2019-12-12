'use strict';

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('html', 'sass', 'scripts', 'img:dev'),
    $.gulp.parallel('watch', 'serv')
    ));

$.gulp.task('build', $.gulp.series(
    $.gulp.parallel('html', 'sass', 'scripts', 'img:build-png','img:build-jpg', 'img:build-gif' ),
    $.gulp.parallel('watch', 'serv')
    ));