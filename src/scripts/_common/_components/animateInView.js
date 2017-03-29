/*
*  !надо бы добавить порог
*/
var $animation_elements = $('.js-animate-in-view');

var $window = $(window);
function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {

            $element.removeClass('no-animation');

        }
    });
}

$window.on('scroll resize', check_if_in_view);


$(document).on('ready',function () {
    
    $animation_elements.each(function () {
        $(this).addClass('no-animation');
    });
   

});