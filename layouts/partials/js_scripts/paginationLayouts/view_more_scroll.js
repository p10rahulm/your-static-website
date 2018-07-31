
var element_container = document.querySelector('#{{($.Scratch.Get "layout_data").name}}_cards');
var append_elements = document.querySelector('.details_cards');
var view_more_button = document.querySelector('.view-more-button');
var next_page_url = document.querySelector('.pagination_next').href;
var view_more_button_container = document.querySelector('.view-more-button-container');
var loading_dots = document.querySelector('.loader-ellips');
var status = document.querySelector('.page-load-status');

var total_pages = {{$.Paginator.TotalPages}};
var current_page_num = 1;


var jquery_request = function() {
    $.ajax({
        url: next_page_url,
        context: document.body,
        success: function (response) {
            $(response).find('.details_cards').each(function( index ) {
                $(element_container).append(this);
            });
            lazyLoadFunction();
            history.pushState(null, null, next_page_url)
            // $(element_container).append(next_page_elements);
        }
    });
};
$(view_more_button).click(function () {
    console.log("clicked");
    console.log(next_page_url);
    jquery_request();
});