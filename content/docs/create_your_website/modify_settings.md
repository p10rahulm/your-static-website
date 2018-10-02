+++
title = "Modify Settings and site configurations"
date = 2018-06-08T19:44:35+05:30

pageNumber = 6
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
highlight = false
highlight_languages = ["bash","html"]
highlight_style = "ocean"

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["Static Sites","documentation","Hugo","websites","setup"]
categories = ["Website"]

[[previous_page]]
text = "Preview the site"
url = "/docs/create_your_website/preview_site/"

[[next_page]]
text = "Check site and Upload to github"
url = "/docs/create_your_website/upload_to_github/"

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
text = "Download the template files"
url = "/docs/create_your_website/download_template/"
[[quick_links]]
text = "Preview the site"
url = "/docs/create_your_website/preview_site/"
[[quick_links]]
text = "Check site and Upload to github"
url = "/docs/create_your_website/upload_to_github/"
[[quick_links]]
text = "Buy the domain and setup godaddy"
url = "/docs/create_your_website/setup_godaddy/"
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

At this stage, you will want to modify all the settings like the site author name, website name, etc on the site to be your own. We will do this in this section.

## What needs to be modified

The main files to be modified are:

1. [config.toml](/docs/create_your_website/config_files/config_toml/)
2. [_index.md](/docs/create_your_website/config_files/front_page_settings/)
3. [contact.md](/docs/create_your_website/config_files/contact_page/)
4. [contact_success.md](/docs/create_your_website/config_files/contact_success_page/)
5. [popup_success.md](/docs/create_your_website/config_files/popup_success_page/)
6. [privacy.md](/docs/create_your_website/config_files/privacy_terms/)
7. [termservice.md](/docs/create_your_website/config_files/terms_of_service/)

## How to modify

1. At this stage, you should ensure you modify the following words to your own
    - yourdomain
    - Your Website Name
    - your_username
    - yourWebsite
    - yourCompanyName
    - yourRole
    - yourName
    - anotherName
    - disqusShortname
    - Company1, Company2, Company3, Company4, Company5
    - University1, University2
    - logo.jpg (to your logo file in static folder)
    - UA-123456789-1 (google analytics)
    - map_api_key, latitude, longitude (google maps)
    - favicon.jpg (to your favicon file in static folder)

    Note that the context of usage at each occurance of above words may be different. For example yourName may occur for your email id as *yourName@gmail.com* or even as an author of website. So you may not want a simple replace all function without going through context of usage.

2. On a good text editor this can be done by pressing ctrl+shift+F or ctrl+shift+R, where the replace all occurances in project is available. Note that for this you may have to choose your project folder (to enable search in this folder). Depending on your editor you may have to look up google for instructions for Replace All

3. Ensure favicon and logo are changed