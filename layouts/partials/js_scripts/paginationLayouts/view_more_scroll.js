
var element_container = document.querySelector('#{{($.Scratch.Get "layout_data").name}}_cards');
// var append_elements = document.querySelector('.details_cards');
var view_more_button = document.querySelector('.view-more-button');
// var next_page_url = document.querySelector('.pagination_next').href;
var view_more_button_container = document.querySelector('.view-more-button-container');
var loading_dots = document.querySelector('.loader-ellips');
var status = document.querySelector('.page-load-status');

var total_pages = {{$.Paginator.TotalPages}};
var current_page_num = 0;

var base_url = "{{.URL}}";
var pages = [];
{{range $index, $element := $.Paginator.Pagers}}{{if not (eq $index 0)}}
    pages.push("{{ $element.URL |absURL}}");
{{end}}{{end}}
console.log(pages);

var jquery_request = function() {
    $.ajax({
        url: pages[current_page_num],
        context: document.body,
        success: function (response) {
            $(response).find('.details_cards').each(function( index ) {
                $(element_container).append(this);
            });
            lazyLoadFunction();
            // Use below if you want to change the URL of the page
            // history.pushState(null, null, pages[current_page_num]);
            current_page_num++;
            if(current_page_num>=(total_pages-1)){
                $(view_more_button_container).css("display","none");
            }
        }
    });
};
$(view_more_button).click(function () {
    console.log("clicked" + pages[current_page_num]);
    console.log(current_page_num);
    jquery_request();
});