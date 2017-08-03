/*
* табы
**/

(function( $ ){

    var methods = {
        init : function( options ) {

            var settings = $.extend( {
                'active'              : 0,
                'onChange'            : function() {}
            }, options);
            var tabID = 0;

            return this.each(function() {
                var tabs = $(this);
                tabID++;
                var activeTab = tabs.find('.tabs-nav li').eq(settings.active);

                if(tabs.find('.tabs-nav li.is-active').length > 0){
                    activeTab = tabs.find('.tabs-nav li.is-active');
                }

                var target = activeTab.find('a').attr('href');
                var other = tabs.find('.tabs-nav li').not(activeTab);

                other.each(function () {
                    $(this).removeClass('is-active');
                    $($(this).find('a').attr('href')).hide();
                }).promise().done(function () {
                    activeTab.addClass('is-active');
                    $(target).fadeIn();
                });

                tabs.find('.tabs-nav  li a').on('click',function (event) {
                    var tab = $(this).closest('li');
                    var target = $(this).attr('href');
                    var other = tabs.find('.tabs-nav  li').not(tab);

                    other.each(function () {
                        $(this).removeClass('is-active');
                        $($(this).find('a').attr('href')).hide();
                    }).promise().done(function () {
                        tab.addClass('is-active');
                        $(target).fadeIn();
                    });

                    event.preventDefault();
                });


                tabs.on('change',function () {
                    var data = {
                        'tab' : tabs
                    };
                    settings.onChange(data);
                });

            });
        },
        set : function (val) {
            return this.each(function() {
                var tabs = $(this);
                var activeTab;
                var target;

                if($(val).length > 0){
                    activeTab = tabs.find('.tabs-nav li a[href="'+val+'"]').closest('li');
                    target = $(val);
                }else{
                    activeTab = tabs.find('.tabs-nav li').eq(val);
                    target = $(activeTab.find('a').attr('href'));
                }


                var other = tabs.find('.tabs-nav li').not(activeTab);

                other.each(function () {
                    $(this).removeClass('is-active');
                    $($(this).find('a').attr('href')).hide();
                }).promise().done(function () {
                    activeTab.addClass('is-active');
                    target.fadeIn();
                });


            });
        },
        destroy : function () {
            return this.each(function() {
                var tabs = $(this);
                tabs.find('li').removeClass('is-active');

                tabs.find('li a').each(function () {
                    var tab = $(this);
                    $(tab.attr('href')).css('display','');
                })

            });
        }
    };

    $.fn.tabs = function( method ) {
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

//$('.tabs').tabs();
//$('.tabs').tabs('destroy');
//$('.tabs').tabs('set','1');
//$('.tabs').tabs('set','#tab-1');
