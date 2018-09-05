+++
title = "{{ replace .TranslationBaseName "-" " " | title }}"
date = {{ .Date }}
draft = false
author = "{{ .Site.Params.site_author_name }}"
allow_comments = false
show_title_date_author = false

# The below image will be shown in all the cards pointing to this article
caption_image = "bubbles.jpg"

show_popup = true
show_sharer = true
rollup_sharer_active= true
fixed_sharer_active = true
content_sharer_active= true

# Should this be listed in front page
featured = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []
categories = []

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
        image = ""
        caption = ""
# Your content goes below
+++
