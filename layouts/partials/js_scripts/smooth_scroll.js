<script type="text/javascript">
    // console.log(".target = "+{{.target}});
    // console.log(".speed = "+{{.speed}});
    $(document).ready(function() {
        $("{{.target}}").click(function (e) {
            var $anchor = $(this);
            var target_link = $("{{.target}}").attr('href');
            // console.log("target_link  = "+target_link );
            // console.log("$(target_link).scrollTop() = "+$(target_link).scrollTop());
            // console.log("$(target_link).offset() = "+$(target_link).offset());
            // console.log("$(target_link).offset().top = "+$(target_link).offset().top);
            $('html, body').stop().animate({
                scrollTop:$(target_link).offset().top
            }, {{.speed}});
            e.preventDefault(); //this is the important line.
        });
    });
</script>