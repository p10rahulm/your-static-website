+++
title = "List Index File Settings"
date = 2018-06-08T19:44:35+05:30

pageNumber = 101
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
highlight_style = "railscasts"

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["Static Sites","documentation","Hugo","websites","setup"]
categories = ["Website"]

[[previous_page]]
text = "Plan your website"
url = "/docs/create_your_website/plan_website/"

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

There are different options available in the  _index.md in any content folder. I have already set these based on defaults, so this section is completely optional.

Let us see what these options are:

1. name = "audios"
2. title = "Audio Clips and Podcasts"
3. subtitle = "Thus spake Zarathustra"
4. num_featured = 12
5. number_in_list_page = 8
6. sort_field = "date"
7. sort_order = "asc"
8. card_layout = "audio_carousel"
9. pagination_layout = "pages"

### Name

The name should be the same as the section you are using. For example if you are creating a directory called posts, the usage should be `name = "posts"`

### Title

The title for the list pages should be listed in this option. For example if the title for the posts list page is "These are posts", the usage should be `title = "These are posts"`

### Subtitle

Very similar to above title. For example if the subtitle for the posts list page is "keep reading", the usage should be `subtitle = "keep reading"`

### num_featured

The featured list section used in the front page use this option to decide how many pages should be in the list. For example if you want the two posts in the front page, then usage should be `num_featured = 2`

### number_in_list_page

In every list page you can decide how many should appear before there is a pagination or a view more button. For example if you want the 5 posts in the list page before a pagination, then usage should be `number_in_list_page = 2`

### sort_field

Lets say that you have ten posts and you choose to display only 3 per list page (before pagination happens). In such a case which three are displayed? That depends on how the set of pages are *sorted* before displaying. You can choose any parameter in the page parameters. For example, if you want to sort the post pages by the title, the usage should be `sort_field = "title"`

### sort_order

For sorting, once the parameter by which to sort is decided, there are always two ways to sort - ascending and descending. This parameter helps to choose whether ascending sort or descending sort is used. For example, if you want to sort ascending, the usage would be `sort_order = "asc"` and if descending, the usage would be `sort_order = "desc"`

### List Layout types

1. Audio Carousel:
    - Example Page: [Audios list](https://template.thinkingtree.me/audios/)
    - Usage: `card_layout = "audio_carousel"`
2. Cards Alternating Picture Grid
    - Example Page: [Unused](#)
    - Usage: `card_layout = "cards_alternating_picture_grid"`
3. 5 Cards Grid
    - Example Page: [Posts list](https://template.thinkingtree.me/posts/)
    - Usage: `card_layout = "cards_grid5"`
4. 7 Cards Grid
    - Example Page: [Events list](https://template.thinkingtree.me/events/)
    - Usage: `card_layout = "cards_grid7"`
5. 4 cards Carousel
    - Example Page: [Thoughts list](https://template.thinkingtree.me/thoughts/)
    - Usage: `card_layout = "carousel_4card"`
6. Category Terms
    - Example Page: [Tags list](https://template.thinkingtree.me/tags/)
    - Usage: `card_layout = "category_terms"`
7. Default List Layout
    - Example Page: [Pages in a taxonomy](https://template.thinkingtree.me/tags/static-sites/)
    - Usage: `card_layout = "default_listLayout"`
8. Generic List Layout
    - Example Page: [Unused](#)
    - Usage: `card_layout = "generic_list_layout"`
9. Large Cards Left Image No overlay
    - Example Page: [Publications list](https://template.thinkingtree.me/publications/)
    - Usage: `card_layout = "large_cards_leftimage_centertext_box_nooverlay"`
10. List of Large Cards No overlay
    - Example Page: [Workshops list](https://template.thinkingtree.me/workshops/)
    - Usage: `card_layout = "list_of_large_cards_no_overlay"`
11. List of large Cards (with overlay)
    - Example Page: [Courses list](https://template.thinkingtree.me/courses/)
    - Usage: `card_layout = "list_of_large_cards"`
12. Long List with Image
    - Example Page: [Books list](https://template.thinkingtree.me/books/)
    - Usage: `card_layout = "long_list_with_image"`
13. Masonry grid cards
    - Example Page: [Reviews list](https://template.thinkingtree.me/reviews/)
    - Usage: `card_layout = "masonry_grid_cards"`
14. People Cards List Style 1
    - Example Page: [List of People](https://template.thinkingtree.me/people/)
    - Usage: `card_layout = "people_cards_list_style1"`
15. Responsive grid cards no box
    - Example Page: [Notes list](https://template.thinkingtree.me/notes/)
    - Usage: `card_layout = "responsive_3cards_nobox"`
16. Responsive Grid Cards with box
    - Example Page: [Presentations list](https://template.thinkingtree.me/presentations/)
    - Usage: `card_layout = "responsive_3cards_wbox"`
17. Simple List No Pic
    - Example Page: [Documentation list](https://template.thinkingtree.me/docs/create_your_website/)
    - Usage: `card_layout = "simple_list_no_pic"`

The files for the above are listed in the folder `> layouts > partials > listLayouts`. Most often these list layouts can be interchangeably used, but i've set defaults based on page content type.

### The pagination types

There are three kinds of pagination available for every list page

1. View More Pagination:
    - Example Page: [Publications list](https://template.thinkingtree.me/publications/)
    - Usage: `pagination_layout = "view_more_scroll"`
2. Pages:
    - Example Page: [Thoughts list](https://template.thinkingtree.me/thoughts/)
    - Usage: `pagination_layout = "pages"`
3. Infinite Scroll:
    - Example Page: [Unused](#)
    - Usage: `pagination_layout = "infinite_scroll"`
