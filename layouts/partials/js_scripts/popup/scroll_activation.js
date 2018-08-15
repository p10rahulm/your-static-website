// Get the modal
var modal = document.getElementById('subscription_popup');

//There are four modes of opening the popup: 1) Clicking the open button 2) Delay of certain seconds 3) exit intent 4) scrolling a certain amount
// 4. Scroll Popup: https://stackoverflow.com/questions/15798360/show-div-on-scrolldown-after-800px
let browserHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var body = document.body,    html = document.documentElement;

var documentHeight = Math.max( body.scrollHeight, body.offsetHeight,    html.clientHeight, html.scrollHeight, html.offsetHeight );
var scrollPixelsforActivation = {{ $.Site.Params.popup.scroll_percentage_before_activation }} * (documentHeight - browserHeight);
// console.log("scrollPixelsforActivation ="+scrollPixelsforActivation );
// console.log("documentHeight ="+documentHeight );
// console.log("browserHeight ="+browserHeight );
// console.log(" $.Site.Params.popup.scroll_percentage_before_activation  ="+{{ $.Site.Params.popup.scroll_percentage_before_activation }} );

$(document).scroll(function() {
    var scrolly = $(this).scrollTop();
    // console.log("scrolly ="+scrolly );
    if (scrolly > scrollPixelsforActivation) {
        if(popup_opened_so_far == "unopened"){
            // console.log("inside scroll popup");
            modal.style.display = "block";
            popup_opened_so_far = "opened";
            localStorage.setItem("popup_opened_so_far", popup_opened_so_far);
        }
    }
});
