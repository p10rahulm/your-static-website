+++
title = "{{ replace .TranslationBaseName "-" " " | title }}"
date = {{ .Date }}

pageNumber = 1
# -----------------------------------------
# Summary section
# -----------------------------------------
# The below image will be shown in all the cards pointing to this article
caption_image = "dog_popup_thanks3.jpg"
# The below summary message will be shown in all the cards pointing to this article. If not available, it would be generated from the content of the page.
summary_content = '''
Hugo, the best way to create your own website'''
# -----------------------------------------
# Meta
# -----------------------------------------
layout = "docs"
featured = true
enable_comments = true

# Highlight.js: https://highlightjs.org/static/demo/
math = false
highlight = false
highlight_languages = ["bash","html"]
highlight_style = "railscasts"

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["Static Sites","documentation","Hugo","websites"]
categories = ["Website"]

[[next_page]]
text = "Parts of a Webpage"
url = "/docs/understand_static_sites/parts_of_webpage/"

[[previous_page]]
text = "Retrieving a webpage from the internet"
url = "/docs/understand_static_sites/retrieving_a_webpage/"


[[quick_links]]
text = "*Internal Link**"
url = "#internal-link-anchor"
[[quick_links]]
text = "*Internal Link 2**"
url = "#another-heading"
[[quick_links]]
text = "Link to a page"
url = "/docs/understand_static_sites/assembling_webpage/"
[[quick_links]]
text = "Link to another page"
url = "/docs/understand_static_sites/static_generator_example_hugo/"

# Writeup goes below
+++
The document content goes here