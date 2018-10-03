+++
title = "Courses Page Parameters"
date = 2018-06-08T19:44:35+05:30

pageNumber = 115
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

Courses, similar to books, have a number of additional optional settings that may be input

```toml
# 1. The "faculty" for the course is a similar option to author name in the regular pages
faculty = "yourName and Goody Two Shoes"

# 2. A short intro may be provided which visitors may see for quickly understanding what the course is about. It should be similar to abstract for a book
short_intro = "An in-depth look at management with a specific view on Marketing"

# 3. There are several optional course-specific details that you can provide. These are mentioned in a table format in the webpage

topic = "Management"
who_should_attend = "Management Professionals and Final Year Students"
pre_requisites = "Knowledge in Marketing"
course_date = "Anytime"
duration = "4 weeks"
delivery = "In Person/Online"
location = "Bangalore Gymkhana/Online"
fees = "Rs. 1000"
certification = "Rs. 1000"


# 4. A mixture of poster images and youtube videos may be used in the featured images section. Here the first poster is used as the first image that appears and the visitor can choose to scroll, zoom, or click on thumbnails to view the rest.

# Media will be from below list
# Featured image The featured image will be the first from the following list

posters = ["orange-fractal.jpg","dog_popup_thanks3.jpg","dog_transparency1.jpg", ]

# Currently only youtube is supported. Please enter only the id. For example if the video url is "https://www.youtube.com/watch?v=lk60ObnbIOk", please enter "lk60ObnbIOk"

youtube_ids = ["lk60ObnbIOk","9hHq2lYof4U"]

# 5. Optionally, brochures and other pdf files may be placed in the files section below to enable users to open them within the page (or download)

# Place the pdfs below in the "files" folder inside static folder:
files = [
    { name = "Brochure for 5S Course", pdf_file = "Brochure_for_5S_books.pdf" },
    { name = "Business and Ethics", pdf_file = "B_E_Brochure.pdf" },
]


# 6. Similar to tags and categories, an additional taxonomy based on subjects is introduced here
subjects = ["management"]

```

