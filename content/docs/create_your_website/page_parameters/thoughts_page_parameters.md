+++
title = "Thoughts Page Parameters"
date = 2018-06-08T19:44:35+05:30

pageNumber = 121
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

These are the only pages where the configurations include styling elements. The thought layout would contain some content placed on a background image

```toml

# 1. Please change the image used for the background_image. Images here are taken from Pixabay.
# -----------------------------------------
# Formatting
# -----------------------------------------
# 2. The header image would be used to place an image used before the content. A good example of usage is in your_domain.com/thoughts/thought2/ in the demo content. Typically outline images are used here
header_image = ""

# 3. The background image is used to create a background effect for your thought. The rest of the options you can leave as is. The rgba colors can be chosen from here: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool
background_image = "backgrounds/purples.jpg"
background_color = "rgba(255,255,255,0.05)"
foreground_color = "rgba(255,255,255,0.7)"

#4. Of the below properties, the only one that you may want to change is text_color. You can choose the color here: https://htmlcolorcodes.com/color-picker/
text_padding = "10% 5%"
text_color = "#164"
text_size = "1.35rem"

```
