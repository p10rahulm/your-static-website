<script type="text/javascript">
    $(document).ready(function() {
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
        // Initialise Google Maps if necessary.
        initMap();
    });
</script>