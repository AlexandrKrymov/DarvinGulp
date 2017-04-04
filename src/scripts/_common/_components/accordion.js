function accordion(wrapper,screen) {
    $(wrapper).each(function () {
        var container = $(this);
           var btn = container.find('.accordion__btn');
           var content = container.find('.accordion__content');
           var breakpoint = parseInt(screen);

           if (breakpoint){
               btn.on('click',function (e) {
                   if($(window).width() <= breakpoint){
                       if(content.is(':hidden')){
                           content.stop().addClass('is-active').slideDown();
                           btn.addClass('is-active');
                       }else {
                           content.stop().removeClass('is-active').slideUp();
                           btn.removeClass('is-active');
                       }
                       e.preventDefault();
                   }
               });

               $(window).on('resize',function () {
                   if($(window).width() > breakpoint) {
                       btn.removeClass('is-active');
                       content.removeClass('is-active').css('display','');
                   }
               });

           }else{
               btn.on('click',function (e) {
                   if($(window).width() <= breakpoint){
                       if(content.is(':hidden')){
                           content.stop().addClass('is-active').slideDown();
                           btn.addClass('is-active');
                       }else {
                           content.stop().removeClass('is-active').slideUp();
                           btn.removeClass('is-active');
                       }
                       e.preventDefault();
                   }

               });
           }
       });

}