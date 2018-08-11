$(document).ready(function() {
    {{if $.Site.Params.sharer.sharer_rollup_button_active}}
    $("#share_menu_activation_button").click(function() {
        if(document.getElementById("toggled_social_shares").style.display == "block"){
            document.getElementById("toggled_social_shares").style.display = "none";
        } else {
            // document.getElementById("toggled_social_shares").style.display = "block";
            $("#toggled_social_shares").css({
                "opacity":"0",
                "display":"block",
            }).fadeIn(1000).animate({opacity:1})
        }
    })
    {{end}}
    {{if $.Site.Params.sharer.show_menu_on_scroll}}
    $(window).scroll(function() {
        if ($(this).scrollTop()>{{$.Site.Params.sharer.scroll_amount_to_activate_sharer}})
        {$('#fixed_social_shares').fadeIn(1000);}
    });
    {{end}}
});