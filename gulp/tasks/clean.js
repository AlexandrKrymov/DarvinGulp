'use strict';

module.exports = function () {
    $.gulp.task('clean', function (cb) {
        return $.rimraf($.config.paths.clean,cb);
    });
};