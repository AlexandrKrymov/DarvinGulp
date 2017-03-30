'use strict';
var merge = require('merge-stream');
var buffer = require('vinyl-buffer');

module.exports = function () {
    $.gulp.task('images', function () {
        return $.gulp.src($.config.paths.src.images)
            .pipe($.gp.imagemin({
                interlaced: true,
                progressive: true,
                optimizationLevel: 5,
                svgoPlugins: [{removeViewBox: true}]
            }))
            .pipe($.gulp.dest($.config.paths.build.images));
    });

    $.gulp.task('icons:img', function () {
        var spriteData = $.gulp.src([$.config.paths.src.icons + '**/*.*', '!' + $.config.paths.src.icons + '**/*.svg'])
            .pipe($.gp.spritesmith({
                imgName: '../images/icons.png',
                cssName: '_icons-img.css',
                //cssFormat: 'scss',
                padding: 2
            }));

        var imgStream = spriteData.img
            .pipe(buffer())
            .pipe($.gp.imagemin({
                interlaced: true,
                progressive: true,
                optimizationLevel: 5
            }))
            .pipe($.gulp.dest($.config.paths.build.images));

        var cssStream = spriteData.css.pipe($.gulp.dest($.config.paths.src.styles + '_common/'));

        return merge(imgStream, cssStream);
    });


    $.gulp.task('icons:svg', function () {
        var svgminConfig = {js2svg: {pretty: true}};

        var cheerioConfig = {
            run: function run($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },

            parserOptions: {xmlMode: true}
        };

        var svgSpriteConfig = {
            mode: {
                symbol: {
                    sprite: '../icons.svg',
                    render: {
                        scss: {
                            dest: '../../../../src/styles/_common/_icons-svg.scss',
                            template: $.config.paths.src.iconsTemplateSvg
                        }
                    }
                }
            }
        };



        return   $.gulp.src($.config.paths.src.icons + '**/*.svg')
                    .pipe($.gp.svgmin(svgminConfig))
                    .pipe($.gp.cheerio(cheerioConfig))
                    .pipe($.gp.replace('&gt;', '>'))
                    .pipe($.gp.svgSprite(svgSpriteConfig))
                    .pipe($.gulp.dest($.config.paths.build.images))

    });

}