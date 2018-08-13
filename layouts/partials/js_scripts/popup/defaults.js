$(document).ready(function() {
    // Set some local variables
    // LocalStorage stores only string values.
    // Tested for booleans, doesn't work so well: https://stackoverflow.com/questions/16206322/how-to-get-js-variable-to-retain-value-after-page-refresh
    {{if $.Site.Params.popup.reload_popup_once_per_session}}
    localStorage.setItem("popup_opened_so_far", "unopened");
    {{end}}

    if (localStorage.getItem("popup_opened_so_far")=="opened"){
        var popup_opened_so_far = "opened";
    } else {
        var popup_opened_so_far = "unopened";
    }

    // Get the modal
    var modal = document.getElementById('subscription_popup');
    // Get the <span> element that closes the modal
    var popup_closer = document.getElementById("popup_closer");

    // Scroll to top on fresh load: https://stackoverflow.com/questions/7035331/prevent-automatic-browser-scroll-on-refresh
    {{if $.Site.Params.open_at_top}}
    $(window).on('beforeunload', function() {
        $(window).scrollTop(0);
    });
    {{end}}


    //The below will close the modal once opened
    // When the user clicks on <span> (x), close the modal
    popup_closer.onclick = function () {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});