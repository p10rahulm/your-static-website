$(document).ready(function() {
    $('#fixed_social_shares').css("display","none");
    $(window).scroll(function() {
        if ($(this).scrollTop()>{{$.Site.Params.sharer.scroll_amount_to_activate_sharer}})
        {$('#fixed_social_shares').fadeIn(1000);}
    });
});