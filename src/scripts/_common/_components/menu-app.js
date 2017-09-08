(function( $ ){

    var methods = {
        init : function( options ) {

            var settings = $.extend( {
                'title'          : 'Меню',
                'dropdownClass'  : '',
                'breakpoint'     : 0,
                'onChange'       : function() {},
                'onOpen'         : function() {},
                'onClose'        : function() {}
            }, options);

            return this.each(function() {
                var menu = $(this);
                var menuCurrent;

                function checkBreakpoint() {
                    if(settings.breakpoint !== 0){
                        if($(window).width() <= parseInt(settings.breakpoint) ){
                            return true;
                        }else{
                            return false;
                        }
                    }else{
                        return true
                    }


                }

                var menuHead = $('<div class="menu-header"><div class="menu__header-back"><div class="btn" style="display: none;"><span class="icon icon-back">&nbsp;</span></div></div><div class="menu__header-title"><span>'+ settings.title+'</span></div><div class="menu__header-close"><div class="btn"><div class="menu-hamburger is-active "><span></span><span></span><span></span><span></span></div></div></div></div>');

                if(checkBreakpoint()){
                    menuHead.prependTo(menu);
                }

                var menuTitle = menuHead.find('.menu__header-title span');
                var menuBack = menuHead.find('.menu__header-back .btn');
                var menuClose = menuHead.find('.menu__header-close .btn');

                function menuBackToogle() {
                    if(menu.find('.dropdown-active').length > 0){
                        menuBack.show();
                    }else{
                        menuBack.hide();
                    }
                }

                menuClose.on('click',function () {
                    menu.trigger('close');
                });


                menuBack.on('click',function () {
                    if(checkBreakpoint()){
                        var parent = menuCurrent.closest('ul');
                        var list = menuCurrent.closest('li');
                        parent.removeClass('dropdown-active');
                        list.removeClass('dropdown-opened');
                        var dropdown = menuCurrent.next('ul').first();
                        if(menuCurrent.next('.'+settings.dropdownClass).length > 0){
                            dropdown = menuCurrent.next('.'+settings.dropdownClass);
                        }
                        if(dropdown.length > 0){
                            dropdown.removeClass('is-active');
                        }

                        if(parent.closest('li').find('a').first().length > 0){
                            menuCurrent = parent.closest('li').find('a').first();
                            menuTitle.text(menuCurrent.text());
                        }else{
                            menuTitle.text(settings.title);
                        }

                        menuBackToogle();
                        menu.trigger('change');
                    }

                });

                menu.find('a').on('click',function (event) {
                    if(checkBreakpoint()){
                        var link = $(this);
                        var parent = $(this).closest('ul');
                        var list = $(this).closest('li');
                        var dropdown = $(this).next('ul').first();
                        if($(this).next('.'+settings.dropdownClass).length > 0){
                            dropdown = $(this).next('.'+settings.dropdownClass);
                        }
                        if(dropdown.length > 0){
                            parent.addClass('dropdown-active');
                            list.addClass('dropdown-opened');
                            dropdown.addClass('is-active');
                            menuTitle.text(link.text());
                            menuBackToogle();
                            menuCurrent = link;
                            menu.trigger('change');

                            event.preventDefault();
                        }
                    }

                });

                menu.on('change',function () {
                    var data = {
                        'menu'          : menu,
                        'menuCurrent'   : menuCurrent
                    };
                    settings.onChange(data)
                }).on('open',function () {
                    if(checkBreakpoint()){
                        menuTitle.text(settings.title);
                        menu.stop().addClass('is-active').fadeIn();
                        var data = {
                            'menu'          : menu,
                            'menuCurrent'   : menuCurrent
                        };
                        settings.onOpen(data)
                    }

                }).on('close',function () {
                    if(checkBreakpoint()){
                        menuBackToogle();

                        menu.stop().removeClass('is-active').fadeOut().promise().done(function () {
                            menu.css('display','');

                            var data = {
                                'menu'          : menu,
                                'menuCurrent'   : menuCurrent
                            };
                            settings.onClose(data);
                        });
                    }

                });

            });

        },
        open : function(  ) {
            $(this).trigger('open');
        },
        close : function(  ) {
            $(this).trigger('close');
        },
        destroy : function(  ) {
            $(this).trigger('destroy');
        }
    };

    $.fn.menuApp = function( method ) {
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

