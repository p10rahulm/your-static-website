+++
title = "Events Page Parameters"
date = 2018-06-08T19:44:35+05:30

pageNumber = 116
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

The events pages unlike other pages do not contain many of the common settings. Instead they may contain a few additional (self-explanatory) settings

```toml
# 1. A short description of the event that goes below the title
tagline = "The beats are coming to town"

# 2. who, where and when describe the event to have an artist, a location and a time. This is used in list pages as well as the top of the events single page layout
who = "Kailash Kher"
where = "Asilomar, Aranyaka, India"
when = "17th Dec 2018"

# 3. The banner_image is an image that is used as a banner for the event page itself. Choose this carefully as it occupies a good amount of space on the webpage
banner_image = "events/bw_crowd.jpg"

# 4. Upload posters and youtube videos related to the event below. The first will appear featured and the visitor can scroll, zoom or click to view the images
# Media will be from below list
# Featured image The featured image will be the first from the following list
posters = ["events/clean_bandit.jpg","orange-fractal.jpg","dog_popup_thanks3.jpg","dog_transparency1.jpg", ]
# Currently only youtube is supported. Please enter only the id. For example if the video url is "https://www.youtube.com/watch?v=lk60ObnbIOk", please enter "lk60ObnbIOk"
youtube_ids = ["lk60ObnbIOk","9hHq2lYof4U"]

# 5. Apart from categories and tags, we provide an additional taxonomy for events called genres
genres = ["Rock","Paper","Scissors"]

```
