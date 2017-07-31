(function( $ ){

    var methods = {
        init : function( options ) {

            var settings = $.extend( {
                'onChange'            : function() {}
            }, options);
            var counterID = 0;

            return this.each(function() {
                var counter = $(this);
                var input = counter.find('.input-counter__val');
                var btnPlus = counter.find('.input-counter__plus');
                var btnMinus = counter.find('.input-counter__minus');

                counterID++;


                if(input.val() < 0 || input.val() === ''){
                    input.val(0);
                }

                btnPlus.on('click', function (event) {
                    var val = parseInt(input.val());
                    if(input.val() == ''){
                        input.val(0);
                        input.trigger('change');
                    }else{
                        input.val(val + 1);
                        input.trigger('change');
                    }
                    event.preventDefault();
                });

                btnMinus.on('click', function (event) {
                    var val = parseInt(input.val());
                    if(input.val() == 0){
                        input.val(0);
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

                counter.on('change',function () {
                    var data = {
                        'counter' : counter,
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
