


document.addEventListener('DOMContentLoaded', function() {
    var file_opener_topdiv = document.getElementsByClassName("page_header_section")[0];
    var featured_file = document.getElementById("featured_file");
    var pdf_viewer_container = document.getElementById("page_pdf_viewer_container");
    var close_container_box = document.getElementsByClassName("close_container_box")[0];

    file_opener_topdiv.addEventListener("mousedown", file_pointer_clicked);
    file_opener_topdiv.addEventListener("touchstart", file_pointer_clicked);

    function file_pointer_clicked(evnt) {
        pdf_viewer_container.classList.remove("hide_it_off_screen");
        file_opener_topdiv.style.cursor = "initial";
    }
    close_container_box.addEventListener("mousedown", close_container_box_clicked);
    close_container_box.addEventListener("touchstart", close_container_box_clicked);
    function close_container_box_clicked() {
            pdf_viewer_container.classList.add("hide_it_off_screen");
            file_opener_topdiv.style.cursor = "pointer";
    }

}, false);