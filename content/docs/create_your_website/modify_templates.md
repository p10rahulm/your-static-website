+++
title = "Modify Templates"
date = 2018-06-08T19:44:35+05:30

pageNumber = 131
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
highlight_languages = ["bash"]
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
When you are creating new single page templates or list templates, it may be easy to first copy an existing template. These are html files with additional hugo code. You can view these files in the singlePageLayouts and listLayouts section. The homepage-sections contains template pieces used to render individual sections in the home page.

I will be extending this if useful to somebody later, but these [giraffe academy videos](https://www.youtube.com/watch?v=G7umPCU-8xc) and the [hugo docs](https://gohugo.io/documentation/) are good places to start learning how to create templates

### Some Basics

1. Within template files you can hugo code by placing it within curly braces like so: `{{some code}}`
2. Hugo code can access the parameters from your content files by referencing `.Params.parameter`
3. Various [hugo functions](https://gohugo.io/functions/) can be used within the code
4. You can use global variables by setting [Scratch](https://regisphilibert.com/blog/2017/04/hugo-scratch-explained-variable/)
5. If you change the "layout" parameter in the content file, the name that you set there will be the template piece called to render the layout. For instance if you create a layout called "myLayout.html" and want a content piece you created to be rendered by this layout, use 'layout = "myLayout"' setting
6. When using html, css, javascript or urls in your files, you may want to pipe it to [safeHTML](https://gohugo.io/functions/safehtml/), [safeCSS](https://gohugo.io/functions/safecss), [safeJS](https://gohugo.io/functions/safejs) and [safeURL](https://gohugo.io/functions/safeurl) functions in hugo as otherwise hugo doesn't mark them as secure and outputs gibberish.

#### Template call order

1. When a content piece is encountered, we go to baseof under layouts/_defaults folder.
2. Based on the type of content one of the other template pieces is called.
3. If the page has a layout name matching a file under _defaults section, this template will be used.
4. Otherwise if a single page is being rendered single.html is called
5. If a non taxonomy list page is being rendered, list.html is called.
6. If a taxonomy list page is being rendered, then taxonomy.html is called
7. If a taxonomy terms list page is being rendered, then terms.html is called
8. The above four pages list a set of defaults for those pages and modify "blocks" within baseof.html
9. Each block may be thought of as part of a page, like navbar, footer, sharer, popup and of course "main" section
10. The defaults for single page Layout are listed
    1. First at the single page Layout level
    2. These can be modified from Single Page prebuilt layout sheets. For example at /data/layouts/sectionwise_singlepage_layouts.toml
    3. These can be modified from the page parameters itself.
11. Similarly defaults for list page Layouts are listed
    1. First at the list.html level
    2. These are passed to the listPages.html template piece (partial)
    3. The configuration defaults can be modified from the prebuild layout at /data/layotus/sectionwise_list_layouts.toml
    4. These combined layout settings can be modified from _index.html page parameters for a particular section (content directory)
12. These layout settings are passed to the layout page mentioned from above parameters. This file is the one that renders the final html content.

With these points in mind, and having watched the videos mentioned in the beginning of the file, you should be ready to start creating your own templates. Do keep in mind that this is not necessary. If you decide to do so - goodluck!!