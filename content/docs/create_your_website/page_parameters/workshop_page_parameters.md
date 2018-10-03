+++
title = "Workshops Page Parameters"
date = 2018-06-08T19:44:35+05:30

pageNumber = 122
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


Workshops pages contain a good number of new configurations apart from the common ones.We may have come across some of these in different Page Types already

```toml
# 1. Equivalent to author in various other pages, we have presenters for the workshop pages
presenters = "yourName and anotherName"

# 2. A short intro of the workshop may be given
short_intro = "Sustainable practices for creating a new you"

# 3. Workshop details are listed in a tabular format. While optional, they provide a template to the page maker as to what details may be included.

who_should_attend = "Humanity"
pre_requisites = "Being human"
workshop_date = "24th December 2016"
duration = "4 weeks"
delivery = "In Person/Online"
location = "Bangalore Gymkhana/Online"
fees = "Rs. 1000"
certification = "Rs. 1000"



# 4. Posters and youtube videos describing the workshop may be included. The first poster is used as a featured image with the rest as thumbnails below that one. Visitors may scroll, zoom into, or share the images

posters = ["orange-fractal.jpg","dog_popup_thanks3.jpg","dog_transparency1.jpg", ]
youtube_ids = ["lk60ObnbIOk","9hHq2lYof4U"]

# 5. Files describing the workshop may be used by providing the name and location below.
# Place the pdfs below in the "files" folder inside static folder:
files = [
    { name = "Brochure for 5S Course", pdf_file = "Brochure_for_5S_books.pdf" },
    { name = "Business and Ethics", pdf_file = "B_E_Brochure.pdf" },
]

# 6. An additional taxonomy called subjects is provided apart from tags and categories
subjects = ["People Management"]

```
