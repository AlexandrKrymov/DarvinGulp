'use strict';

module.exports = function () {
    $.gulp.task('fonts', function () {
        return $.gulp.src($.config.paths.src.fonts).pipe($.gulp.dest($.config.paths.build.fonts));
    });
};