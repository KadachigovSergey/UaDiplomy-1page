;(function ($){
    $(window).on('load', function(){
        // $('select').styler();


        var sidebarBtn = $('.mobile-btn');
        var sidebar = $('.list-for-upper');
        sidebarBtn.on('click', function (){
            sidebarBtn.toggleClass('open');
            sidebar.toggleClass('open');
        });
    });

})(jQuery);