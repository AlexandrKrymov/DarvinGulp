'use strict';
var bourbon = require("node-bourbon").includePaths;

module.exports = function () {

    $.gulp.task('sass', function () {
        return $.gulp.src($.config.paths.src.styles + 'app.scss')
            .pipe($.gp.if($.dev, $.gp.sourcemaps.init()))
            .pipe($.gp.sass({
                    //includePaths: [$.config.paths.src.styles + 'app.scss'],
                    includePaths: bourbon
                }
            ))
            .on('error', $.gp.notify.onError({ title: 'sass' }))
            .pipe($.gp.autoprefixer({
                browsers: $.config.autoprefixerConfig
                }
            ))
            .pipe($.gp.if($.dev, $.gp.sourcemaps.write()))
            .pipe($.gulp.dest($.config.paths.build.styles));
    });

    $.gulp.task('sass:vendor', function () {
        return $.gulp.src($.config.paths.src.styles + 'vendor.scss')
            .pipe($.gp.sass())
            .on('error', $.gp.notify.onError({ title: 'sass' }))
            .pipe($.gp.csso())
            .pipe($.gulp.dest($.config.paths.build.styles));
    });


};