function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /*create lens:*/
    var zoomed_result = document.getElementById("zoomed_result");

    var container = document.getElementsByClassName("container")[0];
    var container_style = container.currentStyle || window.getComputedStyle(container);


    var calced_width = (document.body.clientWidth - container.offsetLeft - parseInt(container_style.paddingLeft,10)  - 20 - 20 - 300);
    zoomed_result.style.width = calced_width + "px";
    // console.log("calced_width = "+ calced_width + "; document.body.clientWidth = "+document.body.clientWidth + "; container.offsetLeft = " + container.offsetLeft + "; parseInt(container_style.paddingLeft,10) = " + parseInt(container_style.paddingLeft,10) );

    /*create lens:*/
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    lens.setAttribute("id", "img_zoom_lens");

    /*insert lens:*/
    img.parentElement.insertBefore(lens, img);
    /*set width of lens:*/
    lens.style.width = Math.min(lens.offsetHeight * zoomed_result.offsetWidth/zoomed_result.offsetHeight,300) + "px";
    // console.log("zoomed_result.innerWidth/zoomed_result.innerHeight = "+zoomed_result.offsetWidth/zoomed_result.offsetHeight);
    // console.log("lens.offsetHeight = " + lens.offsetHeight);
    // console.log("lens.offsetWidth = " + lens.offsetWidth);
    /*calculate the ratio between result DIV and lens:*/
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /*set background properties for the result DIV*/
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);

    function moveLens(e) {
        var pos, x, y;
        /*prevent any other actions that may occur when moving over the image*/
        // e.preventDefault();
        /*get the cursor's x and y positions:*/
        pos = getCursorPos(e);
        /*calculate the position of the lens:*/
        x = pos.x - (lens.offsetWidth / 2);
        y = pos.y - (lens.offsetHeight / 2);
        /*prevent the lens from being positioned outside the image:*/
        if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
        if (0 > x) {x = 0;}
        if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
        if (0 > y) {y = 0;}
        /*set the position of the lens:*/
        lens.style.left = x + "px";
        lens.style.top = y + "px";
        /*display what the lens "sees":*/
        result.style['background-position-x']= "-" + (x * cx) + "px";
        result.style['background-position-y']= "-" + (y * cy) + "px";
        // result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
        // console.log("x = "+x + " y = " + y + " cx = "+ cx+" cy ="+cy + " lens.offsetHeight = "+lens.offsetHeight);
        // console.log("result.css(backgroundPosition) = " + result.style.backgroundPosition);
    }
    function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        /*get the x and y positions of the image:*/
        a = img.getBoundingClientRect();
        /*calculate the cursor's x and y coordinates, relative to the image:*/
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {x : x, y : y};
    }
}


$(document).ready(function() {
    imageZoom("featured_image", "zoomed_result");
    $('.other_images').click(function() {
        document.getElementById("zoomed_result").style.backgroundImage = "url('" + document.getElementById("featured_image").src + "')";
    });
    var zoomed_result = document.getElementById("zoomed_result");
    zoomed_result.style.display = "none";
    document.getElementById("featured_image_container").addEventListener("mouseenter", switchOn);
    document.getElementById("featured_image_container").addEventListener("mouseleave", switchOff);
    var lens = document.getElementById("img_zoom_lens");
    function switchOn(){
        zoomed_result.style.display = "block";
        lens.style.border = "2px solid rgba(200,200,200,0.4)";
    }
    function switchOff(){
        zoomed_result.style.display = "none";
        lens.style.border = "none";
    }

});
