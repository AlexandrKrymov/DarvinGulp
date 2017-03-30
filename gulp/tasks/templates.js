'use strict';

module.exports = function () {

    $.gulp.task('templates', function () {

        return $.gulp.src($.config.paths.src.templates)
            .pipe($.gp.pug({ pretty: true }))
            .on('error', $.gp.notify.onError(function (error) {
            return {
                title: 'templates',
                message: error.message
            };
        }))
            .pipe($.gulp.dest($.config.paths.build.templates))
            .pipe($.browserSync.stream());

    });
};