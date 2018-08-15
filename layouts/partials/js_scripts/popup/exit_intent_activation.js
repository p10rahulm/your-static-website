// Get the modal
var modal = document.getElementById('subscription_popup');

//There are four modes of opening the popup: 1) Clicking the open button 2) Delay of certain seconds 3) exit intent 4) scrolling a certain amount
// 3. Exit Intent Popup: Ref: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_mouseleave_mouseout , https://www.w3schools.com/jsref/event_clientx.asp
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
