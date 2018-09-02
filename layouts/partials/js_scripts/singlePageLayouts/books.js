var initialize_popup = function(index_clicked,imageHeights,imageWidths){
    var pswpElement = document.querySelectorAll('.pswp')[0];
    // build items array

    var items = [
        {{ range $index, $element := .Params.images }}
        {
            src: '/img/{{$element}}',
            w: imageWidths[{{$index}}],
            h: imageHeights[{{$index}}]
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
            {id:'linkedin', label:'Share on LinkedIn', url:'https://www.linkedin.com/shareArticle?mini=true&amp;url={{"{{url}}"}}&amp;title={{"{{text}}"}}'},
            {id:'download', label:'Download image', url:'{{"{{raw_image_url}}"}}', download:true}
        ],
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

document.addEventListener('DOMContentLoaded', function(){
    var index_clicked = 0;
    var image_heights = [];
    var image_widths = [];
    var otherimages = document.getElementsByClassName("other_images");
    var featured_image = document.getElementById("featured_image");

    for (var i = 0; otherimages.length>i; i++) {
        otherimages[i].addEventListener('click', image_array_clicked, false);
        otherimages[i].image_index = i; //can also be written as otherimages[i].["image_index"]
        // console.log("i = " + i + "otherimages[i].naturalheight ="+otherimages[i].naturalHeight );
        image_heights.push(otherimages[i].naturalHeight);
        image_widths.push(otherimages[i].naturalWidth);
    }
    // console.log("image_heights = "+image_heights + "image_widths = "+image_widths);

    function image_array_clicked(evnt){
        // console.log("Clicked other images");
        if (evnt.target.tagName == 'IMG') { //This if is to be doubly sure an image was clicked
            var imageLink = evnt.target.getAttribute("src");
            // console.log(imageLink);
            featured_image.setAttribute("src",imageLink);
        }
        // for (var i = 0; otherimages.length>i; i++) {if(otherimages[i]==evnt.target){index_clicked = i;break;}};
        // console.log("evnt.target.image_index = "+evnt.target.image_index);
        index_clicked = evnt.target.image_index;
    }

    var featured_image = document.getElementById("featured_image");
    featured_image.addEventListener("mousedown", featured_image_clicked);
    featured_image.addEventListener("touchstart", featured_image_clicked);
    var featured_image_container = document.getElementById("featured_image_container");
//    featured_image_container.addEventListener("mousedown", featured_image_clicked);

    function featured_image_clicked() {
        // console.log("featured_image_clicked");
        // console.log("index_clicked = "+index_clicked);
        initialize_popup(index_clicked,image_heights,image_widths);
    }

}, false);