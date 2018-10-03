+++
title = "Documentation Page Parameters"
date = 2018-06-08T19:44:35+05:30

pageNumber = 123
# -----------------------------------------
# Summary section
# -----------------------------------------
# The below image will be shown in all the cards pointing to this article
caption_image = "dog_popup_thanks3.jpg"
# The below summary message will be shown in all the cards pointing to this article. If not available, it would be generated from the content of the page.
summary_content = '''
Create your site in 10 easy steps'''
# -----------------------------------------
# Meta
# -----------------------------------------
layout = "docs"
featured = true
enable_comments = true

# Highlight.js: https://highlightjs.org/static/demo/
math = false
highlight = true
highlight_languages = ["bash","toml"]
highlight_style = "railscasts"

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["Static Sites","documentation","Hugo","websites","setup"]
categories = ["Website"]

[[previous_page]]
text = "Add your content to the website"
url = "/docs/create_your_website/add_content/"

[[next_page]]
text = ""
url = ""

[[quick_links]]
text = "Implement Static Site with Godaddy & github"
url = "/docs/create_your_website/implement_static_website_godaddy_github/"
[[quick_links]]
text = "Download Essential Software"
url = "/docs/create_your_website/download_essentials/"
[[quick_links]]
text = "Setup Github"
url = "/docs/create_your_website/setup_github/"
[[quick_links]]
text = "Buy the domain and setup godaddy"
url = "/docs/create_your_website/setup_godaddy/"
[[quick_links]]
text = "Download the template files"
url = "/docs/create_your_website/download_template/"
[[quick_links]]
text = "Preview the site"
url = "/docs/create_your_website/preview_site/"
[[quick_links]]
text = "Modify Site Settings"
url = "/docs/create_your_website/modify_settings/"
[[quick_links]]
text = "Check site and Upload to github"
url = "/docs/create_your_website/upload_to_github/"
[[quick_links]]
text = "Connect github and Godaddy"
url = "/docs/create_your_website/connect_github_godaddy/"
[[quick_links]]
text = "Plan your website"
url = "/docs/create_your_website/plan_website/"
[[quick_links]]
text = "Add your content to the website"
url = "/docs/create_your_website/add_content/"

# Writeup goes below
+++

Documentation pages (like the one you are reading) contain a number of parameters that make it useful to navigate. Further there is a pageNumber option which is useful for sorting

```toml
# 1. The pageNumber is a sortfield. If you decide your page numbers carefully, you can even get the list pages in order across documentation folders
pageNumber = 123

# 2. Do you use Math in the Code Page. If so, use math=true below. The math display is based on [mathjax](https://www.mathjax.org/)
math = false

# 3. Do you use code in this page? If so mention highlight=true below. The style "ocean" is a dark themed style. You can choose themes and languages based on this site https://highlightjs.org/static/demo/
highlight = true
highlight_languages = ["bash","toml"]
highlight_style = "railscasts"

# 4. If you want your readers to read the pages in order, you can add two tags, previous_page and next_page. The previous page tag comes with two options where you can specify a text for the page link and the url itself. This goes at the bottom of the page to the left
[[previous_page]]
text = "Add your content to the website"
url = "/docs/create_your_website/add_content/"

# 5. The next page tag comes with two options where you can specify a text for the page link and the url itself. This goes at the bottom of the page to the right
[[next_page]]
text = ""
url = ""

# 6. A menu will be displayed at the top of the page for quick navigation to various parts of the documentation. The quick_links tag enables you to modify these.
# #  There are two kinds of tags below, internal and external with different formatting. To mark a quick links tag as internal, all you have to do is to mark the text with asterix at the start and end.
# #
# #  For internal quicklinks, note that every heading in the markdown you create creates an html anchor which you can navigate to. For example, a heading marked as "## This is a heading: Howzzatt!" will have the html anchor `#this-is-a-heading-howzzatt`. That is to say that spaces are replaced with '-' and other special characters are ignored.
# #  All headings, from H1-H6 create anchor elements you can navigate to.
# #
# #  With regard to external quicklinks that are outside your site, note that they will be opened in the same window.

[[quick_links]]
text = "*An internal quicklink*"
url = "#a-heading"
[[quick_links]]
text = "*Another internal quicklink*"
url = "#another-heading"
[[quick_links]]
text = "Another external quicklink within the site"
url = "/docs/create_your_website/download_essentials/"
[[quick_links]]
text = "An external quicklink outside site"
url = "//www.google.com"
```
