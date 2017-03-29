/*
* рейтинг радио батонами
* */
$('.js-rating').each(function(){
   if($(this).is('.disabled')){
       $(this).find('input').prop("disabled", true);
   }
});