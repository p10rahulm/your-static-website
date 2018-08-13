$(document).ready(function() {
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
});