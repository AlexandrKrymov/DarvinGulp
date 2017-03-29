 $('.js-alert').each(function(){
   var alert = $(this);
    alert.find('.alert__close').click(function(){
       alert.fadeOut(function(){
           alert.remove();
       });

   })
});