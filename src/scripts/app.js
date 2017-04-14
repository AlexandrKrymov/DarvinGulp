//= require _common/_components/forms.js


function resize() {

    if($(window).width() <= 768){
        owl.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
		owl.find('.owl-stage-outer').children().unwrap();
    }else {

    }
}
$(window).on('load',function () {
    resize();
}).on('resize',function () {
    resize();
}).on('click',function (e) {

}).on('scroll',function () {

});
