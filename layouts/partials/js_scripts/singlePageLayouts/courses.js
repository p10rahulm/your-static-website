
var player;
function onYouTubeIframeAPIReady() {
    console.log("youtube api ready");
    player = new YT.Player('ytplayer', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
        }
    });
}



function onPlayerReady(event) {
    console.log("Player Ready");
    var index_clicked = 0;
    var current_featured_is_video = false;
    var image_heights = [];
    var image_widths = [];
    var otherimages = document.getElementsByClassName("image_thumbs");
    var othervideos = document.getElementsByClassName("video_thumbs");
    var featured_image = document.getElementById("featured_image");
    var youtube_vid = document.getElementById("ytplayer");
    var image_array_clicked;
    var videos_array_clicked;

    for (var i = 0; otherimages.length > i; i++) {
        otherimages[i].addEventListener('click', image_array_clicked, false);
        otherimages[i].image_index = i; //can also be written as otherimages[i].["image_index"]
        // console.log("i = " + i + "otherimages[i].naturalheight ="+otherimages[i].naturalHeight );
        image_heights.push(otherimages[i].naturalHeight);
        image_widths.push(otherimages[i].naturalWidth);
    }
    var playlist = ['{{ delimit .Params.youtube_ids "','" }}'];
    //    console.log(playlist);
    for (var i = 0; othervideos.length > i; i++) {
        othervideos[i].addEventListener('click', videos_array_clicked, false);
        othervideos[i].video_index = i;
    }
    function image_array_clicked(evnt) {
        // console.log("Clicked other images");
        if (evnt.target.tagName == 'IMG') { //This if is to be doubly sure an image was clicked
            var imageLink = evnt.target.getAttribute("src");
            // console.log(imageLink);
            player.pauseVideo();
            youtube_vid.style.display = "none";
            featured_image.style.display = "block";
            featured_image.setAttribute("src", imageLink);
        }
        // for (var i = 0; otherimages.length>i; i++) {if(otherimages[i]==evnt.target){index_clicked = i;break;}};
        // console.log("evnt.target.image_index = "+evnt.target.image_index);
        index_clicked = evnt.target.image_index;
        current_featured_is_video = false;
    }

    // console.log("image_heights = "+image_heights + "image_widths = "+image_widths);
    function videos_array_clicked(evnt) {
        if (evnt.target.tagName == 'IMG') { //This if is to be doubly sure an image was clicked
            player.pauseVideo();
            player.loadVideoById(playlist[evnt.target.video_index]);
            console.log("Currently Playing video: " + playlist[evnt.target.video_index]);
            featured_image.style.display = "none";
            youtube_vid.style.display = "block";
        }
        current_featured_is_video = true;
    }
    var featured_image = document.getElementById("featured_image");
    featured_image.addEventListener("mousedown", featured_image_clicked);
    featured_image.addEventListener("touchstart", featured_image_clicked);

    function featured_image_clicked() {
        // console.log("featured_image_clicked");
        // console.log("index_clicked = "+index_clicked);
        if(!current_featured_is_video){
            initialize_popup(index_clicked,image_heights,image_widths);
        }
    }

}
function onPlayerStateChange(event) {console.log("Player stage changed");}



var initialize_popup = function(index_clicked,imageHeights,imageWidths){
    var pswpElement = document.querySelectorAll('.pswp')[0];
    // build items array

    var items = [
        {{ range $index, $element := .Params.posters }}
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


document.addEventListener('DOMContentLoaded', function() {
    var files= document.getElementsByClassName("page_filename");
    var featured_file = document.getElementById("featured_file");
    var pdf_viewer_container = document.getElementById("page_pdf_viewer_container");
    var pdf_viewer_container = document.getElementById("page_pdf_viewer_container");
    var close_container_box = document.getElementsByClassName("close_container_box")[0];

    for (var i = 0; files.length > i; i++) {
        files[i].addEventListener("mousedown", file_pointer_clicked);
        files[i].addEventListener("touchstart", file_pointer_clicked);
        files[i].file_index = i;
    }
    var files_pdf_links = [];
    {{if isset .Params "files"}}
    {{range .Params.files}}
    files_pdf_links.push("{{.pdf_file}}")
    {{end}}{{end}}
    console.log("files_pdf_links = "+files_pdf_links);
    function file_pointer_clicked(evnt) {
        var fileLink = "/files/" + files_pdf_links[evnt.target.file_index];
        featured_file.setAttribute("src", fileLink);
        pdf_viewer_container.classList.remove("hide_it_off_screen");
    }
    close_container_box.addEventListener("mousedown", close_container_box_clicked);
    close_container_box.addEventListener("touchstart", close_container_box_clicked);
    function close_container_box_clicked() {
            pdf_viewer_container.classList.add("hide_it_off_screen");
    }

}, false);