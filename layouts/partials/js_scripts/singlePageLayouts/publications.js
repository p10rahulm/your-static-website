
document.addEventListener('DOMContentLoaded', function() {
    var files= document.getElementsByClassName("page_filename");
    var featured_file = document.getElementById("featured_file");
    var pdf_viewer_container = document.getElementById("page_pdf_viewer_container");
    var pdf_viewer_container = document.getElementById("page_pdf_viewer_container");
    var close_container_box = document.getElementsByClassName("close_container_box")[0];

    for (var i = 0; files.length > i; i++) {
        files[i].addEventListener("mousedown", file_pointer_clicked);
        files[i].addEventListener("touchstart", file_pointer_clicked);
        files[i].file_index = i;
    }
    var files_pdf_links = [];
    {{if isset .Params "files"}}
    {{range .Params.files}}
    files_pdf_links.push("{{.pdf_file}}")
    {{end}}{{end}}
    console.log("files_pdf_links = "+files_pdf_links);
    function file_pointer_clicked(evnt) {
        var fileLink = "/files/" + files_pdf_links[evnt.target.file_index];
        featured_file.setAttribute("src", fileLink);
        pdf_viewer_container.classList.remove("hide_it_off_screen");
    }
    close_container_box.addEventListener("mousedown", close_container_box_clicked);
    close_container_box.addEventListener("touchstart", close_container_box_clicked);
    function close_container_box_clicked() {
            pdf_viewer_container.classList.add("hide_it_off_screen");
    }

}, false);
document.addEventListener('DOMContentLoaded', function(){
    hljs.initHighlightingOnLoad();
});
