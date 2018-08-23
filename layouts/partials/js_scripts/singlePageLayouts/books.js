document.addEventListener('DOMContentLoaded', function(){

    var otherimages = document.getElementsByClassName("other_images");
    var featured_image = document.getElementById("featured_image");

    for (var i = 0; otherimages.length>i; i++) {
        otherimages[i].addEventListener('click', image_array_clicked, false);
        otherimages[i].image_index = i //can also be written as otherimages[i].["image_index"]
    }
    var index_clicked;
    function image_array_clicked(evnt){
        // console.log("Clicked other images");
        if (evnt.target.tagName == 'IMG') { //This if is to be doubly sure an image was clicked
            var imageLink = evnt.target.getAttribute("src");
            console.log(imageLink);
            featured_image.setAttribute("src",imageLink);
        }
        /*
        for (var i = 0; otherimages.length>i; i++) {
            if(otherimages[i]==evnt.target){
                index_clicked = i;
                break;
            }
        };
        console.log("index_clicked = "+index_clicked);
        */
        console.log("evnt.target.image_index = "+evnt.target.image_index);

    }

}, false);