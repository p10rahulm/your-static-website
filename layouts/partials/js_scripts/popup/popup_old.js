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
    // Get the button that opens the modal
    var btn = document.getElementById("popup_activation_button");
    // Get the <span> element that closes the modal
    var popup_closer = document.getElementById("popup_closer");

    //There are four modes of opening the popup: 1) Clicking the open button 2) Delay of certain seconds 3) exit intent 4) scrolling a certain amount
    // 1. When the user clicks on the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
        popup_opened_so_far = "opened";
        localStorage.setItem("popup_opened_so_far", popup_opened_so_far);
    };




    // 2. Open popup on delay
    {{if $.Site.Params.popup.activate_popup_on_delay}}
    if(popup_opened_so_far =="unopened"){
        // console.log("inside delay popup");
        var popup_delay = {{mul 1000 $.Site.Params.popup.seconds_before_activation}}
        setTimeout(
            function() {
                // Recheck for popup opened as it may open through other means
                if(popup_opened_so_far =="unopened") {
                    modal.style.display = "block";
                    popup_opened_so_far = "opened";
                    localStorage.setItem("popup_opened_so_far", popup_opened_so_far);
                }
            }, popup_delay);
    }
    {{end}}


    // 3. Exit Intent Popup: Ref: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_mouseleave_mouseout , https://www.w3schools.com/jsref/event_clientx.asp
    {{if $.Site.Params.popup.activate_popup_on_exit_intent}}
    sensitivity = {{.Site.Params.popup.exit_intent_sensitivity}};
    $(document).mouseleave(function (event) {
        // console.log('out');
        var y = event.clientY;
        // console.log(y);
        if(-y > sensitivity){
            if(popup_opened_so_far =="unopened"){
                // console.log("inside exit intent popup");
                modal.style.display = "block";
                popup_opened_so_far = "opened";
                localStorage.setItem("popup_opened_so_far", popup_opened_so_far);
            }
        }
    });
    {{end}}

    // 4. Scroll Popup: https://stackoverflow.com/questions/15798360/show-div-on-scrolldown-after-800px
    {{if $.Site.Params.popup.activate_popup_on_scroll}}
    var scrollPixelsforActivation = {{ $.Site.Params.popup.scroll_percentage_before_activation }} * $(document).height();
    // console.log(scrollPixelsforActivation);
    $(document).scroll(function() {
        var scrolly = $(this).scrollTop();
        if (scrolly > scrollPixelsforActivation) {
            if(popup_opened_so_far == "unopened"){
                // console.log("inside scroll popup");
                modal.style.display = "block";
                popup_opened_so_far = "opened";
                localStorage.setItem("popup_opened_so_far", popup_opened_so_far);
            }
        }
    });
    {{end}}

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