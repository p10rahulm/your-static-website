$(document).ready(function(){
    function toggle_collapsible_navbar() {
        var x = document.getElementById("navbar-right");
        if (x.style.display === "flex") {
            x.style.display = "none";
        } else {
            x.style.display = "flex";
        }
    }
    $("#collapsible_menu_icon").click(function(){
        toggle_collapsible_navbar();
    });
    $('.nav-item-link').click(function(){
        toggle_collapsible_navbar();
    });
});