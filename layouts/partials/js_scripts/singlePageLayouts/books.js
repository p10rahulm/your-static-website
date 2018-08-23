var initialize_popup = function(index_clicked){
    var pswpElement = document.querySelectorAll('.pswp')[0];
    // build items array
    var items = [
        {{range .Params.images}}
        {
            src: '/img/{{.}}',
            w: 900,
            h: 900
        },
        {{end}}

    ];
    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // http://photoswipe.com/documentation/options.html
        index: index_clicked,
        escKey: false,
        closeOnScroll: false,
        clickToCloseNonZoomable: false, //see https://stackoverflow.com/questions/36526054/photoswipe-gallery-close-itself-on-image-click-in-case-of-small-image
        // ui options
        shareButtons: [
            {id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{"{{url}}"}}'},
            {id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{"{{text}}"}}&url={{"{{url}}"}}'},
            {id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/?url={{"{{url}}"}}&media={{"{{image_url}}"}}&description={{"{{text}}"}}'},
            {id:'linkedin', label:'Share it on LinkedIn', url:'https://www.linkedin.com/shareArticle?mini=true&amp;url={{"{{url}}"}}&amp;title={{"{{text}}"}}'},
            {id:'download', label:'Download image', url:'{{"{{raw_image_url}}"}}', download:true}
        ],
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

document.addEventListener('DOMContentLoaded', function(){
    var index_clicked = 0;
    var otherimages = document.getElementsByClassName("other_images");
    var featured_image = document.getElementById("featured_image");

    for (var i = 0; otherimages.length>i; i++) {
        otherimages[i].addEventListener('click', image_array_clicked, false);
        otherimages[i].image_index = i //can also be written as otherimages[i].["image_index"]
    }

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
        index_clicked = evnt.target.image_index;
    }

    var featured_image = document.getElementById("featured_image");
    featured_image.addEventListener("click", featured_image_clicked);

    function featured_image_clicked() {
        console.log("featured_image_clicked");
        console.log("index_clicked = "+index_clicked);
        // gallery.options.index = index_clicked;
        initialize_popup(index_clicked);
        // gallery.init();
    }

}, false);