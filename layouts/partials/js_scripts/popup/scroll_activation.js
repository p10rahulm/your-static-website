$(document).ready(function() {
    // Get the modal
    var modal = document.getElementById('subscription_popup');

    //There are four modes of opening the popup: 1) Clicking the open button 2) Delay of certain seconds 3) exit intent 4) scrolling a certain amount
    // 4. Scroll Popup: https://stackoverflow.com/questions/15798360/show-div-on-scrolldown-after-800px
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
});