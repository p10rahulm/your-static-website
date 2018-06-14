<script type="text/javascript">
    $(document).ready(function() {
        $('#back_to_top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({
                'scrollTop': 0
            }, 800, function () {
                window.location.hash = "";
            });
        });
    });
</script>