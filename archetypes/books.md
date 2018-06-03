+++
title = "{{ replace .TranslationBaseName "-" " " | title }}"
date = {{ .Date }}
draft = false
author = "Rahul Madhavan"
allow_comments = false
show_title_date_author = false
show_popup = true

# Should this be listed in front page
featured = true
enable_comments = true
comment_count = true

# Does the content use math formatting?
math = false

# Highlight.js options, View this demo and choose: https://highlightjs.org/static/demo/
highlight = false
highlight_languages = []
highlight_style = "ocean"

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []
categories = []


# Specific Template Meta
[books]
        title = "5S Organizational Principles"
        tagline = "The last book you'll ever need"
        authors = ["K S Madhavan", "Goody Two Shoes"]
        abstract = "A small snippet about the book is good enough"
        price = 100
        size = "17.8 x 2.5 x 22.9 cm"
        num_pages = 280
        isbn = "978-0262035613"
        reading_level = "18+ years"
        format = "Hardcover"
        publisher = "MIT Press"
        date_of_publication = "3 January 2017"
        language = "English"

[book-images]
        # Featured image
        featured_image = ""
        # Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
        images = ["img.jpg","img1.jpg"]
[SEO]
        # Page description for Search Engines and Social Media shares. No longer than 155 characters.
        description = "This is the page description. Tis is an amazing awesome book."
        # The image below will be used in the SEO (the sharing buttons). Please place the image in the static/img folder.
        image = "bubbles.jpg"
        author_twitter_handle= "@rahulm"

# The book details go below
+++

The book is a comprehensive book on everything under the sun
