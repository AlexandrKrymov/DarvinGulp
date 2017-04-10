function wrapTables(table) {
    table.each(function () {
       var table = $(this);
       table.wrap('<div class="table-wrapper"></div>');
       var wrapper = table.closest('.table-wrapper');

        if(table.width() > wrapper.width()){
            wrapper.addClass('is-active');
        }else{
            wrapper.removeClass('is-active')
        }
       $(window).on('resize',function () {
           if(table.width() > wrapper.width()){
               wrapper.addClass('is-active');
           }else{
               wrapper.removeClass('is-active')
           }
       });
    });
}
wrapTables($('.page-content .page-text table'));
