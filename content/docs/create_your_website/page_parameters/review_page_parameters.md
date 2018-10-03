+++
title = "Reviews Page Parameters"
date = 2018-06-08T19:44:35+05:30

pageNumber = 120
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

The reviews pages mostly contain new configurations regarding the product or item being reviewed

```toml

# 1. Firstly enter some basic details about the item being reviewed including the name, the maker, and the item link

reviewed_item = "Opel Astra Car"
reviewed_item_maker = "General Motors"
reviewed_item_link = "https://en.wikipedia.org/wiki/Opel_Astra"

# 2. The taxonomies for reviewed items also includes reviewed_item_categories. This can be used to mention the item being reviewed like movies, or books or some such.
reviewed_item_categories = ["Products"]

# 3. The rating (number of stars) you give the item should be mentioned below. 0.5 being lowest and 5 being the highest number of stars
stars = 4.5

# 4. The title of the review is known here as headline
headline = "Heartbeat on wheels"

# 5. A good review may contain images also. The first of the following list will be featured and the rest can be clicked, zoomed, scrolled and shared
images = ["reviews/opel1.png","reviews/opel2.png"]

```
