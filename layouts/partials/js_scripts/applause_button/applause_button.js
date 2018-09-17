document.addEventListener('DOMContentLoaded', function(){
    var applause_button = document.getElementById("applause_button");
    if(window.innerWidth > 1200){
        var container_width = document.getElementsByClassName("container")[0].offsetWidth;
        var applause_left = Math.max(20,(window.innerWidth/2 - (container_width/2) -70));
        applause_button.style.left = applause_left + "px";
        applause_button.style.top = "100px";
        applause_button.style.width = "55px";
        applause_button.style.height = "55px";
        applause_button.getElementsByClassName("count")[0].style.fontSize = "20px";
    } else {
        applause_button.style.bottom = "38px";
        applause_button.style.left = "5px";
        applause_button.style.width = "45px";
        applause_button.style.height = "45px";
        applause_button.style.marginBottom = "0";
        applause_button.getElementsByClassName("count")[0].style.fontSize = "18px";
    }

}, false);