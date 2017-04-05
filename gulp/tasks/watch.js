'use strict';
var path = $.config.paths.watch;
module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch(path.fonts, $.gulp.series('fonts'));
        $.gulp.watch(path.templates, $.gulp.series('templates'));
        $.gulp.watch(path.scriptsApp, $.gulp.series('js'));
        $.gulp.watch(path.scriptsVendor, $.gulp.series('js:vendor'));
        $.gulp.watch(path.scriptsModerniz, $.gulp.series('js:modernizr'));
        $.gulp.watch(path.stylesApp, $.gulp.series('sass'));
        $.gulp.watch(path.stylesPrint, $.gulp.series('sass:print'));
        $.gulp.watch(path.stylesVendor, $.gulp.series('sass:vendor'));
        $.gulp.watch(path.images, $.gulp.series('images'));
        $.gulp.watch(path.icons, $.gulp.series('icons:img','sass'));
        $.gulp.watch(path.iconsSvg, $.gulp.series('icons:svg','sass'));
        $.gulp.watch(path.iconsTemplate, $.gulp.series('icons:img','sass'));
        $.gulp.watch(path.iconsTemplateSvg, $.gulp.series('icons:svg','sass'));
    });
};