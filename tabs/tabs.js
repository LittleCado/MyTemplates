$(document).ready(function () {

    $('body').on('click','.tab-nav a',function(){
        $('.tab-nav a').removeClass('active');
        $(this).addClass('active');
        var href = $(this).attr('href');
        $('.tab-pane').removeClass('active').removeClass('in');
        $(href).addClass('active');
        setTimeout(function(){
            $(href).addClass('in');
        }, 200)
        return false;
    });
    
});