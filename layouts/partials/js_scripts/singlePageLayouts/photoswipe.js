var initialize_popup = function(){
    var pswpElement = document.querySelectorAll('.pswp')[0];
    // build items array
    var items = [
        {
            src: 'https://placekitten.com/600/400',
            w: 600,
            h: 400
        },
        {
            src: 'https://placekitten.com/1200/900',
            w: 1200,
            h: 900
        }
    ];
    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0 // start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

};

document.addEventListener('DOMContentLoaded', function(){

    var featured_image = document.getElementById("featured_image");
    featured_image.addEventListener("click", featured_image_clicked);
    function featured_image_clicked() {
        console.log("featured_image_clicked");
        console.log("index_clicked = "+index_clicked);
    }
}, false);