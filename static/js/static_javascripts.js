
(function($){

  /* ---------------------------------------------------------------------------
   * Responsive scrolling for URL hashes.
   * --------------------------------------------------------------------------- */

  // Dynamically get responsive navigation bar offset.
  let $navbar = $('.navbar-header');
  let navbar_offset = $navbar.innerHeight();

  /**
   * Responsive hash scrolling.
   * Check for a URL hash as an anchor.
   * If it exists on current page, scroll to it responsively.
   * If `target` argument omitted (e.g. after event), assume it's the window's hash.
   */
  function scrollToAnchor(target) {
    // If `target` is undefined or HashChangeEvent object, set it to window's hash.
    target = (typeof target === 'undefined' || typeof target === 'object') ? window.location.hash : target;
    // Escape colons from IDs, such as those found in Markdown footnote links.
    target = target.replace(/:/g, '\\:');

    // If target element exists, scroll to it taking into account fixed navigation bar offset.
    if($(target).length) {
      $('body').addClass('scrolling');
      $('html, body').animate({
        scrollTop: $(target).offset().top - navbar_offset
      }, 600, function () {
        $('body').removeClass('scrolling');
      });
    }
  }

  // Make Scrollspy responsive.
  function fixScrollspy() {
    let $body = $('body');
    let data = $body.data('bs.scrollspy');
    if (data) {
      data.options.offset = navbar_offset;
      $body.data('bs.scrollspy', data);
      $body.scrollspy('refresh');
    }
  }

  // Check for hash change event and fix responsive offset for hash links (e.g. Markdown footnotes).
  window.addEventListener("hashchange", scrollToAnchor);

  /* ---------------------------------------------------------------------------
   * Add smooth scrolling to all links inside the main navbar.
   * --------------------------------------------------------------------------- */

  $('#navbar-main li.nav-item a').on('click', function(event) {
    // Store requested URL hash.
    let hash = this.hash;

    // If we are on the homepage and the navigation bar link is to a homepage section.
    if ( hash && $(hash).length && ($("#homepage").length > 0)) {
      // Prevent default click behavior.
      event.preventDefault();

      // Use jQuery's animate() method for smooth page scrolling.
      // The numerical parameter specifies the time (ms) taken to scroll to the specified hash.
      $('html, body').animate({
        scrollTop: $(hash).offset().top - navbar_offset
      }, 800);
    }
  });

  /* ---------------------------------------------------------------------------
   * Smooth scrolling for Back To Top link.
   * --------------------------------------------------------------------------- */

  $('#back_to_top').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
      'scrollTop': 0
    }, 800, function() {
      window.location.hash = "";
    });
  });

  /* ---------------------------------------------------------------------------
   * Hide mobile collapsable menu on clicking a link.
   * --------------------------------------------------------------------------- */

  $(document).on('click', '.navbar-collapse.in', function(e) {
    //get the <a> element that was clicked, even if the <span> element that is inside the <a> element is e.target
    let targetElement = $(e.target).is('a') ? $(e.target) : $(e.target).parent();

    if (targetElement.is('a') && targetElement.attr('class') != 'dropdown-toggle') {
      $(this).collapse('hide');
    }
  });



  // Flatten object by concatenating values.
  function concatValues( obj ) {
    let value = '';
    for ( let prop in obj ) {
      value += obj[ prop ];
    }
    return value;
  }




  /* ---------------------------------------------------------------------------
  * Google Maps
  * --------------------------------------------------------------------------- */

    function initMap() {
        if ($('#map').length) {
            let map_provider = $('#map-provider').val();
            let lat = $('#map-lat').val();
            let lng = $('#map-lng').val();
            let zoom = parseInt($('#map-zoom').val());
            let address = $('#map-dir').val();
            let api_key = $('#map-api-key').val();
            let map = new GMaps({
                div: '#map',
                lat: lat,
                lng: lng,
                zoom: zoom,
                zoomControl: true,
                zoomControlOpt: {
                    style: 'SMALL',
                    position: 'TOP_LEFT'
                },
                panControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                overviewMapControl: false,
                scrollwheel: true,
                draggable: true
            });

            map.addMarker({
                lat: lat,
                lng: lng,
                click: function (e) {
                    let url = 'https://www.google.com/maps/place/' + encodeURIComponent(address) + '/@' + lat + ',' + lng + '/';
                    window.open(url, '_blank')
                },
                title: address
            })

        }
    }

  /* ---------------------------------------------------------------------------
   * On window load.
   * --------------------------------------------------------------------------- */

  $(window).on('load', function() {
    if (window.location.hash) {
      // When accessing homepage from another page and `#top` hash is set, show top of page (no hash).
      if (window.location.hash == "#top") {
        window.location.hash = ""
      } else {
        // If URL contains a hash, scroll to target ID taking into account responsive offset.
        scrollToAnchor();
      }
    }

    // Initialize Scrollspy.
    let $body = $('body');
    $body.scrollspy({offset: navbar_offset });

    // Call `fixScrollspy` when window is resized.
    let resizeTimer;
    $(window).resize(function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(fixScrollspy, 200);
    });





    // Initialise Google Maps if necessary.
    initMap();
  });

})(jQuery);
