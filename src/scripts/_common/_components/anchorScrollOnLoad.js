$(document).ready(function(){
    if(window.location.hash) {
        var hash = window.location.hash;
        var link = $(hash);
        window.location.hash = '';
        $(window).load(function(){
            if(link.length > 0){
                $('html, body').animate({
                    scrollTop: link.offset().top
                }, 500).promise().done(function(){
                    window.location.hash = hash;
                });
            }
        });
    }
});
