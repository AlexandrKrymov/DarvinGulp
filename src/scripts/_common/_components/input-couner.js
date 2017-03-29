/*
* инпут с кнопками + и -
**/
$('.js-input-counter').each(function (e) {
   var input = $(this).find('input');
   var btnPlus = $(this).find('.input-counter__plus');
   var btnMinus = $(this).find('.input-counter__minus');

   $(document).ready(function () {
      if(input.val() < 0 || input.val() === ''){
          input.val(0);
      }
   });

    btnPlus.on('click', function (e) {
        var val = parseInt(input.val());
        if(input.val() == ''){
            input.val(0);
            input.trigger('change');
        }else{
            input.val(val + 1);
            input.trigger('change');
        }
        e.preventDefault();
    });
    btnMinus.on('click', function (e) {
        var val = parseInt(input.val());
        if(input.val() == 0){
            input.val(0);
            input.trigger('change');
        }else{
            input.val(val - 1);
            input.trigger('change');
        }
        e.preventDefault();
    });

    input.keyup(function () {
        var val = input.val();

        if (/[^[0-9]/.test(val)) {
            input.val(0);
        }
        input.trigger('change');
    });
});