// Get the modal
var modal = document.getElementById('subscription_popup');
// Get the button that opens the modal
var btn = document.getElementById("popup_activation_button");

//There are four modes of opening the popup: 1) Clicking the open button 2) Delay of certain seconds 3) exit intent 4) scrolling a certain amount
// 1. When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
    popup_opened_so_far = "opened";
    localStorage.setItem("popup_opened_so_far", popup_opened_so_far);
};