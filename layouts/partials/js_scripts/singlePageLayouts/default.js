$(document).ready(function() {

    let browserHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let navbarHeight = document.getElementById('navbar-main').offsetHeight;
    let top_contentsHeight = document.getElementById('page_header').offsetHeight;

    // console.log("browserHeight = " + browserHeight);
    // console.log("navbarHeight = " + navbarHeight);
    // console.log("top_contentsHeight = " +top_contentsHeight);
    let banner_height = (browserHeight - navbarHeight - top_contentsHeight - 5)+"px";
    // console.log(banner_height);
    $('.banner_image').css('height', banner_height);
});