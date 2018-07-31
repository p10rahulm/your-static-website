var elem = document.querySelector('#{{($.Scratch.Get "layout_data").name}}_cards');

console.log("infinite_scroll_enabled");
var infScroll = new InfiniteScroll( elem, {
    // defaults listed

    path: '.pagination_next',
    // REQUIRED. Determines the URL for the next page
    // Set to selector string to use the href of the next page's link
    // path: '.pagination__next'
    // or set with function
    // path: function() {
    //   return return '/articles/P' + ( ( this.loadCount + 1 ) * 10 );
    // }

    append: '.details_cards',
    // REQUIRED for appending content
    // Appends selected elements from loaded page to the container

    checkLastPage: true,
    // Checks if page has path selector element
    // Set to string if path is not set as selector string:
    //   checkLastPage: '.pagination__next'

    prefill: false,
    // Loads and appends pages on intialization until scroll requirement is met.

    responseType: 'document',
    // Sets the type of response returned by the page request.
    // Set to 'text' to return flat text for loading JSON.

    outlayer: false,
    // Integrates Masonry, Isotope or Packery
    // Appended items will be added to the layout

    scrollThreshold: false,
    // Sets the distance between the viewport to scroll area
    // for scrollThreshold event to be triggered.

    elementScroll: false,
    // Sets scroller to an element for overflow element scrolling

    loadOnScroll: false,
    // Loads next page when scroll crosses over scrollThreshold

    history: false,
    // Changes the browser history and URL.
    // Set to 'push' to use history.pushState()
    //    to create new history entries for each page change.

    historyTitle: true,
    // Updates the window title. Requires history enabled.

    hideNav: '.paginationed',
    // Hides navigation element

    status: '.page-load-status',
    // Displays status elements indicating state of page loading:
    // .infinite-scroll-request, .infinite-scroll-load, .infinite-scroll-error
    // status: '.page-load-status'

    button: '.view-more-button',
    // Enables a button to load pages on click
    // button: '.load-next-button'

    onInit: undefined,
    // called on initialization
    // useful for binding events on init
    // onInit: function() {
    //   this.on( 'append', function() {...})
    // }

    debug: false,
    // Logs events and state changes to the console.
});
// Switch off the view more button on request and load it back when items are appended
$(elem).on( 'request.infiniteScroll', function( event, path ) {
    $('.view-more-button-container').css('display', 'none');
});
$(elem).on( 'append.infiniteScroll', function( event, path ) {
    $('.view-more-button-container').css('display', 'block');
});

// https://infinite-scroll.com/events.html
$(elem).on( 'append.infiniteScroll', function( event, response, path, items ) {
    console.log( 'Loaded: ' + path );
    lazyLoadFunction();
});
