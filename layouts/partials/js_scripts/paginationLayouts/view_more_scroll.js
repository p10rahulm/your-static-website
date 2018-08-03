
var element_container = document.querySelector('#{{($.Scratch.Get "layout_data").name}}_cards');
// var append_elements = document.querySelector('.details_cards');
var view_more_button = document.querySelector('.view_more_button');
// var next_page_url = document.querySelector('.pagination_next').href;
var view_more_button_container = document.querySelector('.view_more_button_container');
var loading_dots_container = document.querySelector('.loading_dots_container');
var error_message = document.querySelector('.view_more_error');

var total_pages = {{$.Paginator.TotalPages}} -1; //we subtract 1 so that it is in the format of 0,1,2...
var current_page_num = 0;

var base_url = "{{.URL}}";
var pages = [];
{{range $index, $element := $.Paginator.Pagers}}{{if not (eq $index 0)}}
    pages.push("{{ $element.URL |absURL}}");
{{end}}{{end}}
console.log(pages);

var jquery_request = function() {
    $(loading_dots_container).css("display","block");
    $(view_more_button_container).css("display","none");
    $.ajax({
        url: pages[current_page_num],
        context: document.body,
        success: function (response) {
            $(response).find('.details_cards').each(function( index ) {
                $(element_container).append(this);
            });
            $(loading_dots_container).css("display","none");
            if( (total_pages-1) > current_page_num) {
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
            $(error_message).innerHTML(msg);
        }
    });
};
$(view_more_button).click(function () {
    console.log("clicked" + pages[current_page_num]);
    console.log(current_page_num);
    jquery_request();
});