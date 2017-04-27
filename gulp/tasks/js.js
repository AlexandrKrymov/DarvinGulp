'use strict';

module.exports = function () {
    $.gulp.task('js', function () {
        return $.gulp.src($.config.paths.src.scripts + 'app.js')
            .pipe($.gp.include({
                extensions: "js",
                hardFail: false
            }))
            .pipe($.gulp.dest($.config.paths.build.scripts))
            .pipe($.browserSync.reload({stream:true}));

    });
    $.gulp.task('js:vendor', function () {
        return $.gulp.src($.config.paths.src.scripts + 'vendor.js')
            .pipe($.gp.include({
                extensions: "js",
                hardFail: false
            }))
            .pipe($.gp.uglify())
            .pipe($.gulp.dest($.config.paths.build.scripts))
            .pipe($.browserSync.reload({stream:true}));

    });
    $.gulp.task('js:modernizr', function () {
        return $.gulp.src($.config.paths.src.scripts + 'modernizr-custom.js')
            .pipe($.gulp.dest($.config.paths.build.scripts))
            .pipe($.browserSync.reload({stream:true}));

    });
};