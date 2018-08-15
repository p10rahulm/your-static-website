// Get the modal
var modal = document.getElementById('subscription_popup');

//There are four modes of opening the popup: 1) Clicking the open button 2) Delay of certain seconds 3) exit intent 4) scrolling a certain amount
// 2. Open popup on delay
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
