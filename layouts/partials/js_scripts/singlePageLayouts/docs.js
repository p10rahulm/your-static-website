{{if .Params.quick_links}}{{if ne (index .Params.quick_links 0).text ""}}
document.addEventListener('DOMContentLoaded', function() {
    if(window.innerWidth >= 1000){
        console.log("large_screen");
        let menu_heading = document.querySelector('#docs-menu');
        let page_right_section = document.getElementsByClassName("page_right_section")[0];
        let navbarHeight = document.getElementById("navbar-main").clientHeight;
        var thresholdSets = []
        for (let i=0; 1.0>=i; i+= 0.01) {
            thresholdSets.push(i);
        }
        const config = {
          rootMargin: '0px',
          threshold: thresholdSets
        };
        function convertRemToPixels(rem) {
            return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
        }

        observer = new IntersectionObserver((entry, observer) => {
            //  console.log('entry:', entry);
            // console.log('observer:', observer);
            var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            var total_right_height = page_right_section.clientHeight;
            var right_stop_limit = total_right_height - (window.innerHeight -  navbarHeight);
            if((right_stop_limit - convertRemToPixels(1.5)) >= scrollTop){
                menu_heading.style.marginTop = (scrollTop ) + 'px';
            }
        }, config);
        observer.observe(menu_heading);
    }
}, false);
document.addEventListener('DOMContentLoaded', function() {
    if(1000 > window.innerWidth){
        console.log("small screen");
        let menu_heading = document.querySelector('.docs_menu_heading');
        let docs_menu = document.querySelector('#docs-menu');
        let doc_menu_items = document.getElementsByClassName("docs_menu_item");
        let mid_section = document.getElementsByClassName("mid_section")[0];

        menu_heading.classList.toggle('docs_menu_heading_button');
        menu_heading.classList.toggle('docs_menu_heading');
        let page_header = document.querySelector('.page_header_section');
        var thresholdSets = []
        for (let i=0; 1.0>=i; i+= 0.01) {
            thresholdSets.push(i);
        }
        const config = {
            rootMargin: "-80px 0px 0px 0px",
            threshold: 0.2
        };
        observer = new IntersectionObserver((entry, observer) => {
            // console.log('entry:', entry);
            // console.log('observer:', observer);
            var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            if(scrollTop!=0){
                menu_heading.classList.toggle('docs_menu_heading_button');
                menu_heading.classList.toggle('docs_menu_heading');
                if(docs_menu.classList.contains("docs_menu_right")){
                    docs_menu.classList.toggle("docs_menu_right");
                    for(var i = 0; doc_menu_items.length> i ; i++)            {
                        doc_menu_items[i].classList.toggle("docs_menu_item_right");
                    }
                }
            }
        }, config);
        observer.observe(page_header);

        menu_heading.onclick = function(){
            docs_menu.classList.toggle("docs_menu_right");
            for(var i = 0; doc_menu_items.length> i ; i++)            {
                doc_menu_items[i].classList.toggle("docs_menu_item_right");
            }
        };
        mid_section.onclick = function(){
            if(docs_menu.classList.contains("docs_menu_right")){
                docs_menu.classList.toggle("docs_menu_right");
                for(var i = 0; doc_menu_items.length> i ; i++)            {
                    doc_menu_items[i].classList.toggle("docs_menu_item_right");
                }
            }
        }

    };
}, false);
{{end}}{{end}}