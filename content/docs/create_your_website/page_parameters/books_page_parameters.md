+++
title = "Books Page Parameters"
date = 2018-06-08T19:44:35+05:30

pageNumber = 113
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

Some additional settings need to be specified for books pages

```toml
# 1. tagline is some small snippet about the book that will come just below the title
tagline = "The last book you'll ever need"

# 2. the abstract should be a brief description of the book.
abstract = "A small snippet about the book is good enough"

# 3. Book Details: The template mentions optional details that you can mention that are converted to a tableformat to display

price = 100
size = "17.8 x 2.5 x 22.9 cm"
num_pages = 280
isbn = "978-0262035613"
reading_level = "18+ years"
recommended_audience = "MBAs,Management Professionals"
format = "Hardcover"
publisher = "MIT Press"
date_of_publication = "3 January 2017"
language = "English"

# 4. Every book needs a good cover. Similarly every book page needs good images. Please place these in the static/img folder and list the filenames below under "images" field
images = ["bubbles.jpg", "dog_popup_thanks3.jpg","dog_transparency1.jpg","orange-fractal.jpg","bubbles.jpg"]

```
