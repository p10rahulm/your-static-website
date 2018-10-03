+++
title = "Plan your website and contents"
date = 2018-06-08T19:44:35+05:30

pageNumber = 10
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
text = "Connect github and Godaddy"
url = "/docs/create_your_website/connect_github_godaddy/"

[[next_page]]
text = "Add your content to the website"
url = "/docs/create_your_website/add_content/"

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

Now that you have seen your site scaffold and seen what you can do with it, it is time for you to ***start planning*** what you want to launch your website with. The original motivation for this template I created was to present any and all output that I would produce. But your website may be completely different and may be about fiction, or art. So the question is:

## Deciding what to put on your website: My experience

What I was creating on facebook, twitter, work, classes mainly fit into the following categories:

1. Random Thoughts
2. Presentations
3. Long articles
4. Journal Publications (that I intended to create!)
5. Code Snippets that may help others or I would revisit later
6. Quick Notes
7. Reviews of things I had done, movies I had seen and places I had visited

For the first iteration of my website I had the content for many of these already. Some I was going to create. The format always allowed me to add more later.

--

Some (academically oriented) people that I went to for review of the templates mentioned that I should add for them pages for:

1. Courses they had taken
2. Books they had written
3. Workshops they had conducted

A friend who does podcasts and is into musicals suggested pages for audio and events. A company I worked for suggested they wanted pages for their employees. And of course I needed a page format that would help me write this documentation. So that gives us

1. Audio pages
2. Events
3. People pages
4. Documentation pages

Each of these has a slightly different format and different inputs on the markdown side. Lets formalize this.

--

### Types of Pages Available

We have 15 different types of pages. These are listed below in approximately alphabetical order:

1. Audios: This is for any recordings you might have taken including songs or podcasts
2. Books: This is meant for any books you have written
3. Code-Snippet: This is meant for a mix of content and code.
4. Courses: This is meant to showcase any courses that one has created
5. Docs: This is meant for any documentation. Like the one you are reading presently.
6. Events: This page type can be used for showcasing events like concerts
7. Notes: This is meant for a short content piece. Comes without a banner image
8. People: This is for writing about people, possibly in your team or company
9. Posts: This is meant for long generic content pieces. Comes with a banner image on top
10. Presentations: This is meant to showcase presentation pdfs that you may have made
11. Publications: You can link any publications (journals or otherwise) that you have made here
12. Reviews: You can review any kinds of websites, products, movies etc here.
13. Thoughts: This is meant for noting down any (profound) thoughts you may have
14. Workshops: You can showcase any workshops (short courses) in these pages.
15. Default: This is a default setting for simple markdown.

Given these page types, for starters, you may want to add *content that you have already created before* that falls into these categories. Further you may find that some kinds of pages, even if they don't directly fit into the above scheme may be coaxed into them. Lastly if you feel there are certain kinds of pages that just don't have a solution in the above pages, leave a comment below and I'll look to add them into the template.

#### The front end

The most important part of your website may be your front page, and it's possible you may want to have certain sections and leave out others. You may also want to change the text and content to be your own. You can make these changes in [_index.md](/docs/create_your_website/config_files/front_page_settings/)

## How to modify

Let's say you know what you want to put on your site for starters, how do you go about changing the content of the site? For all pages other than the single pages we have already seen how to modify in the [modify site settings](/docs/create_your_website/modify_settings/) section. The list pages are auto generated (except the headings), so that leaves us with the single pages.

There are two ways to go about this: Either delete the single pages and then add your own or modify existing pages to add your own content. Either should give you similar results.

### Deleting all pages and starting afresh

Let us take an example type `post` that you want to create

1. 