'use strict';

module.exports = function () {
    $.gulp.task('server', function () {
        $.browserSync.init({
            open: true,
            server: $.config.paths.root
        });

        $.browserSync.watch([$.config.paths.root + '/**/*.*', '!**/*.css','!**/*.html'], $.browserSync.reload);
    });
};