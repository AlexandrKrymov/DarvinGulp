$('.js-popup').click(function(e){
    var btn = $(this);
    var overlay = $('#window-overlay');
    var target = $(btn.attr('href'));
    if(target.length){
        $('#window-overlay').addClass('is-active');
        $('body').addClass('window-opened');
        target.addClass('is-active').fadeIn();
        overlay.fadeIn();
        e.preventDefault();
    }
});

function windowClose() {
    $( ".window" ).on('click',function( event ) {
        var popup = $(this);
        if(event.target == $('.window__close') || event.target.closest('.window__close')){
            try{
                popup.remove();
                // $("#loading").remove();
                $("#window-overlay").remove();
            }
            catch(ex)
            {
                alert(ex);
            }
            return false;
        }else{
            if(!(event.target.closest('.window__body'))){
                try{
                    popup.remove();
                    // $("#loading").remove();
                    $("#window-overlay").remove();
                }
                catch(ex)
                {
                    alert(ex);
                }
                return false;
            }
        }
    });
}

$(window).on('load',function (event) {
    windowClose();
});
$(document).ajaxComplete(function() {
    windowClose();
});

