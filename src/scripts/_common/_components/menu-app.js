function mobileMenu(event) {
    var menu = $('#main-header .menu_wrap');
    var menuBack = menu.find('.menu__header-back .btn');
    var menuTitle = menu.find('.menu__header-title span');

    function setTitle() {
        var text;
        if(menu.find('.subcategory.is-opened').length > 0){
            text = $.trim(menu.find('.subcategory.is-opened').prev().text());
        }else{
            text = 'Меню'
        }
        menuTitle.text(text);
    }
    function backToogle() {
        if(menu.find('.subcategory.is-opened').length > 0){
            menuBack.show();
        }else{
            menuBack.hide();
        }
    }

    if($(window).width() <= 768){
        menu.find('.list > span, .list > a').on('click',function (event) {
            var item = $(this).closest('.list');
            var itemsList =  item.closest('ul');
            var child = item.find('.subcategory').first();

            itemsList.addClass('child-opened');
            child.addClass('is-opened');
            setTitle();
            backToogle();
            event.preventDefault();
        });

        menuBack.on('click',function (event) {
            var opened = menu.find('.subcategory.is-opened');
            opened.removeClass('is-opened');
            opened.closest('.child-opened').removeClass('child-opened');

            setTitle();
            backToogle();
            event.preventDefault();
        });

    }
    setTitle();
    backToogle();
}
mobileMenu();
function mobileMenuReset(event) {
    var menu = $('#main-header .menu_wrap');
    var menuBack = menu.find('.menu__header-back .btn');
    var menuTitle = menu.find('.menu__header-title span');
    menu.find('.subcategory.is-opened').removeClass('is-opened');
    menu.find('.child-opened').removeClass('child-opened');
    menuBack.hide();

    menu.css('display', '');
    menuTitle.text('Меню');
}
