+++
title = "Common Page Parameters"
date = 2018-06-08T19:44:35+05:30

pageNumber = 111
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

Our templates contain both the contents as well as configurations for the pages we are creating. Some of the configurations are common across the page types and some are specific to the type of page. Let us look at the common configuration types

1. title: This is the most common configuration for the heading of the page
2. author: This is the creator of the page. Also goes as artist or faculty in some page types
3. date: This is the date/time of the page creation
    - It is auto generated during page creation.
    - To change it, you would want to keep it in YYYY-MM-DDThh:mm:ssTZ format. In other words, for 29th Sep 2018 01:46 pm 23 seconds in India which is in Time Zone (+05:30 hours), the date field would be 2018-09-29T13:46:23+05:30
4. caption_image: This is the image used in any list layout showcasing that page
5. summary_content: This is the short description used in describing the page summary in any list layouts containing that page
6. layout: This is where you can choose between the single page layout used to render the page. As of now each type of page comes with a standard type of layout
    - *Note that if no layout is specified, in any page, we revert to the default layout*
7. featured: This is either true or false based on whether you want it to appear on the front page list sections
    - This is not a guarantee of the page featuring on the front page as the number_featured may be lower than number available to feature.
8. enable_comments: If this is true, disqus comments is turned on for that page. There is also a default for every type of page if this field is not available
9. tags: This is used to classify the page so that it may later be retrieved based on those tags.
    - For example, a page that is tagged as "['cute dog','cool stuff']" will appear in the list pages http://www.your_domain.com/tags/cute-dog/ and http://www.your_domain.com/tags/cool-stuff/
    - Please don't use special characters in tags to remove confusion
10. categories: We are using an additional way of classification based on categories. Typically a page may have many tags, but just one category
    - For example, a page that is categorized as ['Music'] would appear in the list page http://www.your_domain.com/categories/music/
