+++
title = "Publications Page Parameters"
date = 2018-06-08T19:44:35+05:30

pageNumber = 119
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
The publications pages use a bunch of new parameters including a few categorizations.

```toml
# 1. We list the authors in these pages with links to their personal pages (which could be outside of the site itself)
authors =  [
                { name = "yourName", url = "/people/person1" },
                { name = "Ankit Mathgenius", url = "/people/person2" },
                { name = "Sailesh Tripper", url = "/people/person3" }
            ]

# 2. Brief comments regarding the paper (arxiv style!)
Comments = "Published in the foremost literary publication"


# 3. In case you are using any math or code, set the below accordingly. These should load the mathjax or highlightjs libraries as described in the "Code Snippets Pages" section
math = true
highlight = true
highlight_languages = []
highlight_style = "railscasts"

#4. We provide a few taxonomies to classify the paper. These are fairly self explanatory. If you want to add any new taxonomies, do so below and also add these to the config.toml page
publication_types = ["Journal article"]
subjects = ["programming"]
projects = ["programming"]



# 5. Multiple pdf files along with links can be placed below for the paper. These can be viewed or downloaded from the page
# Place the pdfs below in the "files" folder inside static folder:
files = [
    { name = "Brochure for 5S Course", pdf_file = "Brochure_for_5S_books.pdf" },
    { name = "Business and Ethics", pdf_file = "B_E_Brochure.pdf" },
]


# 6. We can link any external sources or paper links here
[[links]]
    icon = "fa-tag"
    name = "Arxiv Abstract"
    url = "https://arxiv.org/abs/1704.05729"
[[links]]
    icon = "fa-star"
    name = "Arxiv Paper"
    url = "https://arxiv.org/pdf/1704.05729.pdf"


```
