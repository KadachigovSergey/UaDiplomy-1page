;(function ($){
    $(window).on('load', function(){


        var sidebarBtn = $('.mobile-btn');
        var sidebar = $('.list-for-upper');
        sidebarBtn.on('click', function (){
            sidebarBtn.toggleClass('open');
            sidebar.toggleClass('open');
        });
    });

    var input = $('.custom-input');
    input.on('change', function () {
        var inputVal =  $(this).val();
        var placeholder = $(this).next('span');

        if (inputVal && inputVal != ' '){
            placeholder.addClass('hidden');
        } else if(!inputVal || ' '){
            placeholder.removeClass('hidden');
        }
    });

})(jQuery);