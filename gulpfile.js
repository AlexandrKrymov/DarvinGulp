'use strict';

// PROJECT
// - - - - - - - - - - - - - - -

global.$ = {
    dev: true,
    gulp: require('gulp'),
    config: require('./gulp/config'),
    tasks: require('./gulp/tasks.js'),
    rimraf: require('rimraf'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')({
        rename: {
            'gulp-svg-sprite': 'svgSprite'
        }
    })
};

// TASKS
// - - - - - - - - - - - - - - -
$.tasks.forEach(function (taskPath) {
    return require(taskPath)();
});

$.gulp.task('default',
    $.gulp.series(
        'clean',
        'fonts',
        'icons:svg',
        'icons:img',
        'images',
        'js:vendor',
        'js:modernizr',
        'js',
        'sass',
        'sass:vendor',
        'templates',
        $.gulp.parallel('watch', 'server')
    )
);