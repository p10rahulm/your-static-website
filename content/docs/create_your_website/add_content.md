+++
title = "Add your content to the website"
date = 2018-06-08T19:44:35+05:30

pageNumber = 11
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

At this stage you are ready to start running your website on your own. We will in this last section look at some more things that you may want to know - how to modify single page settings, gotchas with respect to git

## Common Page Parameters

The term 'page configuration' may be met with a little bit of trepidation. Not to worry, these are most innocuous. Common page paramters include title, author, date, caption_image,summary_content,layout, tags and categories. There are also two true/false (boolean) parameters for 'enable_comments' and 'featured' on front page. You can read about these in further detail [here](/docs/create_your_website/page_parameters/common_page_parameters/)

## Individual Page Parameters

We saw above the common settings used across most single pages. Additionally, each page may have its own settings. Let's look at these below in order of alphabetical page types.

1. [Audio Page Parameters](/docs/create_your_website/page_parameters/audio_page_parameters/)
2. [Books Page Parameters](/docs/create_your_website/page_parameters/book_page_parameters/)
3. [Code Snippets Page Parameters](/docs/create_your_website/page_parameters/code_snippet_page_parameters/)
4. [Courses Page Parameters](/docs/create_your_website/page_parameters/course_page_parameters/)
5. [Events Page Parameters](/docs/create_your_website/page_parameters/event_page_parameters/)
6. Notes Page Parameters: No additional parameters apart from [common ones](/docs/create_your_website/page_parameters/common_page_parameters/)
7. [People Page Parameters](/docs/create_your_website/page_parameters/people_page_parameters/)
8. Posts Page Parameters: No additional parameters apart from [common ones](/docs/create_your_website/page_parameters/common_page_parameters/)
9. [Presentations Page Parameters](/docs/create_your_website/page_parameters/presentation_page_parameters/)
10. [Publications Page Parameters](/docs/create_your_website/page_parameters/publication_page_parameters/)
11. [Reviews Page Parameters](/docs/create_your_website/page_parameters/review_page_parameters/)
12. [Thoughts Page Parameters](/docs/create_your_website/page_parameters/thought_page_parameters/)
13. [Workshops Page Parameters](/docs/create_your_website/page_parameters/workshop_page_parameters/)
14. [Documentation Page Parameters](/docs/create_your_website/page_parameters/doc_page_parameters/)

## Git gotchas

In a lifetime of using git, you are likely to face at some point some major or minor errors. While the causes for these may not be immediately apparent, the fixes shouldn't be that hard. We will cover some of these glitches and their fixes in [this page](/docs/create_your_website/git_gotchas/). For everything else, use [stack-overflow](https://stackoverflow.com)

## Template Creation

Now, while this section is not necessary, for the purpose of completeness you would want to learn to create your own templates. The best place to start are these [giraffe academy videos](https://www.youtube.com/watch?v=G7umPCU-8xc). Prior to that deep dive, [this page](/docs/create_your_website/modify_templates/) gives you a further idea on what is possible

## Last remarks

It would not be in order if i didn't mention why I created this website template. My main motivation was that I didn't like facebook. I wanted my output to be on the internet, but didn't want it lost in the thousands and thousands of posts that go on facebook. Facebook can be used to spread ideas, not to host them. I wanted my own address.

I tried Wordpress for a while. In fact it was the first place of stop when I didn't know the least bit about coding. But i realized it was inefficient. Wordpress was not a good way to create sites. Further it was costing me every month. A bit later I found that the majority of content on wordpress sites was static but were hosted dynamically. This lead to my interest in static sites - especially given wordpress was hosting 20 percent of all sites on the internet.

Building a website should not be hard at all. If your grandpa asks you to build a site, you should be able to tell him - it's really simple - here are the instructions, why don't you try? Also, apart from your domain name, it's free. This was my motivation.

Given this motivation, these docs are aimed at people who don't have their own websites currently. Therefore the intention is to be free of technical jargon. There is a high likelihood that I have failed in this attempt. Therefore, if you find improvements to code or to docs, do send in.
