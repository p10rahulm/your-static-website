var element_container = document.querySelector('#{{($.Scratch.Get "layout_data").name}}_cards');
var view_more_button = document.querySelector('.view_more_button');
var view_more_button_container = document.querySelector('.view_more_button_container');
var loading_dots_container = document.querySelector('.loading_dots_container');
var error_message_div = document.querySelector('.view_more_error');

var total_pages = {{$.Paginator.TotalPages}};
var current_page_num = 1;
var num_errors = 0;

var base_url = window.location.href;
var pages = [];
{{range $index, $element := $.Paginator.Pagers}}
    pages.push("{{ $element.URL |absURL}}");
{{end}}
// console.log(pages);
var jquery_request = function() {
    if(window.location.href == pages[current_page_num-1]) {current_page_num++;}
    $(loading_dots_container).css("display","block");
    $(view_more_button_container).css("display","none");
    $(error_message_div).css("display","none");
    $.ajax({
        url: pages[current_page_num-1],
        context: document.body,
        success: function (response) {
            $(response).find('.details_cards').each(function( index ) {
                $(element_container).append(this);
            });
            $(loading_dots_container).css("display","none");
            if( (total_pages) > current_page_num && base_url != pages[current_page_num]) {

                $(view_more_button_container).css("display","block");
            }
            lazyLoadFunction();
            // Use below if you want to change the URL of the page
            // history.pushState(null, null, pages[current_page_num]);
            current_page_num++;

        },
        error: function (jqXHR, exception) {
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Could not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            $(error_message_div).html(msg );
            $(error_message_div).css("display","block");
            $(loading_dots_container).css("display","none");
            num_errors++;
            if(3 > num_errors){
                $(view_more_button_container).css("display","block");
            }
        },
        timeout: 10000 // sets timeout to 10 seconds
    });
};
$(view_more_button).click(function () {
    jquery_request();
});