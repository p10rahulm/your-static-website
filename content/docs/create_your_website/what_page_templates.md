+++
title = "Deciding what to put on your website: My experience"
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

My main motivation behind having this website was to have a space on the internet where I could share my work. Facebook and social media were good places to spread the message, but not host thoughts and work. Given I wanted to share my work, I started by figuring out what different forms of output I had. For each kind of output, the page display and input format should make it easy for me to write and for the world to read. The page types are an outcome of this thought process.

What I was creating on facebook, twitter, workplace, classes mainly fit into the following categories:

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

Each of these has a slightly different format and different inputs on the markdown side. Lastly, for very generic markdown, I needed a default layout that would just output the html as-is.

--

Based on all this I created 15 different kinds of pages to start with

1. [Audios](https://template.thinkingtree.me/audios/): This is for any recordings you might have taken including songs or podcasts
2. [Books](https://template.thinkingtree.me/books/): This is meant for any books you have written
3. [Code-Snippets](https://template.thinkingtree.me/code-snippets/): This is meant for a mix of content and code.
4. [Courses](https://template.thinkingtree.me/courses/): This is meant to showcase any courses that one has created
5. [Docs](https://template.thinkingtree.me/docs/understand_static_sites/): This is meant for any documentation. Like the one you are reading presently.
6. [Events](https://template.thinkingtree.me/events/): This page type can be used for showcasing events like concerts
7. [Notes](https://template.thinkingtree.me/notes/): This is meant for a short content piece. Comes without a banner image
8. [People](https://template.thinkingtree.me/people/): This is for writing about people, possibly in your team or company
9. [Posts](https://template.thinkingtree.me/posts/): This is meant for long generic content pieces. Comes with a banner image on top
10. [Presentations](https://template.thinkingtree.me/presentations/): This is meant to showcase presentation pdfs that you may have made
11. [Publications](https://template.thinkingtree.me/publications/): You can link any publications (journals or otherwise) that you have made here
12. [Reviews](https://template.thinkingtree.me/reviews/): You can review any kinds of websites, products, movies etc here.
13. [Thoughts](https://template.thinkingtree.me/thoughts/): This is meant for noting down any (profound) thoughts you may have
14. [Workshops](https://template.thinkingtree.me/workshops/): You can showcase any workshops (short courses) in these pages.
15. Default: This is a default setting for simple markdown.

I shortly intent to add a few more based on usage. One of them for sure will be 'data' pages where you should be able to create graphs and the like from any input data.