+++
title = "Introduction to Static Sites with Hugo"
date = 2018-06-08T19:44:35+05:30

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
highlight_style = "ocean"

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["Static Sites","documentation","Hugo","websites"]
categories = ["Website"]

[[next_page]]
text = "Parts of a Webpage"
url = "/docs/understand_static_sites/parts_of_webpage/"

[[previous_page]]
text = ""
url = ""

[[quick_links]]
text = "Introduction to Static Sites"
url = "/docs/understand_static_sites/introduction/"
[[quick_links]]
text = "Parts of a Webpage"
url = "/docs/understand_static_sites/parts_of_webpage/"
[[quick_links]]
text = "Retrieving a Webpage from the internet"
url = "/docs/understand_static_sites/retrieving_a_webpage/"
[[quick_links]]
text = "What is a Static Website"
url = "/docs/understand_static_sites/static_website/"
[[quick_links]]
text = "Website Templates"
url = "/docs/understand_static_sites/website_templates/"
[[quick_links]]
text = "Static Website Generator"
url = "/docs/understand_static_sites/static_website_generators/"
[[quick_links]]
text = "Assembling a Website"
url = "/docs/understand_static_sites/assembling_webpage/"
[[quick_links]]
text = "What is Hugo"
url = "/docs/understand_static_sites/static_generator_example_hugo/"

# Writeup goes below
+++
This document is aimed at someone who has not built a website before, so if this is too simple, then bear with me, or skim through this section. If it is too complicated, my apologies, leave a comment on what section you didn't follow and i'll redo to make it simple. This documentation is not hands-on in the sense it will not require you to do anything, but just read.

To understand Hugo, one needs to understand what are Static Sites. To understand Static Sites, one needs to understand what is a server and how websites are served across the internet. Lastly you may want to have an understanding of how your browser displays a website - the content, the styles and any dynamic parts.

We will attempt an understanding of what is Hugo through a few sub-sections:

- Parts of a webpage
- Retrieving a Webpage from the internet
- What is a static website
- Website Templates
- Static website generator
- Assembling a Website
- What is Hugo