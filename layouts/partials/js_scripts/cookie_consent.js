document.addEventListener('DOMContentLoaded', function(){
    window.cookieconsent.initialise({
        "content": {
            "message": "{{ $.Site.Params.cookie_message }}",
            "dismiss": "{{ $.Site.Params.cookie_button_message }}",
            "link": "Learn more"
        },
        "palette": {
            popup: {background: "{{$.Site.Params.cookie_background_color }}", text: "{{$.Site.Params.cookie_text_color}}", link: "{{$.Site.Params.cookie_link_color}}"},
            button: {background: "{{$.Site.Params.cookie_button_color}}", border: "{{$.Site.Params.cookie_button_border_color}}", text: "{{$.Site.Params.cookie_button_text_color}}"},
            highlight: {background: 'red', border: 'red', text: '#000000'},
        }
    })
}, false);
