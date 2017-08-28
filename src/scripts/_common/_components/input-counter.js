(function( $ ){
    var methods = {
        init : function( options ) {

            var settings = $.extend( {
                'onChange'            : function() {}
            }, options);

            return this.each(function() {
                var input = $(this);
                input.addClass('input-counter__input');
                input.wrap('<div class="input-counter"></div>');
                var btnPlus = $('<div class="input-counter__btn input-counter__plus"><span>+</span></div>');
                var btnMinus = $('<div class="input-counter__btn input-counter__minus"><span>-</span></div>');
                btnPlus.insertAfter(input);
                btnMinus.insertBefore(input);


                if(input.val() < 1 || input.val() === ''){
                    input.val(1);
                }

                btnPlus.on('click', function (event) {
                    var val = parseInt(input.val());
                    if(input.val() == ''){
                        input.val(1);
                        input.trigger('change');
                    }else{
                        input.val(val + 1);
                        input.trigger('change');
                    }
                    event.preventDefault();
                });

                btnMinus.on('click', function (event) {
                    var val = parseInt(input.val());
                    if(input.val() == 1){
                        input.val(1);
                        input.trigger('change');
                    }else{
                        input.val(val - 1);
                        input.trigger('change');
                    }
                    event.preventDefault();
                });

                input.keyup(function () {
                    var val = input.val();

                    if (/[^[0-9]/.test(val)) {
                        input.val(parseInt(input.val()));
                    }
                    input.trigger('change');
                });

                input.on('change',function () {
                    var data = {
                        'counter' : input,
                        'val'    : input.val()
                    };
                    settings.onChange(data);
                });

            });

        }
    };

    $.fn.inputCounter = function( method ) {
        // логика вызова метода
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод с именем ' +  method + ' не существует ' );
        }
    };
})( $ );
