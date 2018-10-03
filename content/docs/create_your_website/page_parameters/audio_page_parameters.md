+++
title = "Audio Page Parameters"
date = 2018-06-08T19:44:35+05:30

pageNumber = 112
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

Below are the additional settings to be specified for Audio pages

```toml
# 1. The main artist is mentioned under the field "artist". This plays the same role as artist on other pages
artist = "Madhav theBard"

# 2. Additional to tags and categories, we also have two additional categorizations for audio pages. These are albums and artists. In artists, we list all additional artists to the main one involved
albums = ["Kannada","Language"]
artists = ["yourName","Madhav theBard"]

# 3. We can add multiple audios to a single page (as in an album). We need to mention the name of the piece, the filename (placed in audios folder), the artist and a cover image

[[audios]]
name = "Kannadify Introduction"
filename = "KL1.wav" # Place the file below in the "audios" folder inside static folder
artist = "Madhav theBard"
cover = "k.jpg" # Place the file below in the "audios" folder inside img folder in static folder

[[audios]]
name = "Moving On"
filename = "KL2.wav" # Place the file below in the "audios" folder inside static folder
artist = "Madhav theBard"
cover = "k.jpg" # Place the file below in the "audios" folder inside img folder in static folder

```