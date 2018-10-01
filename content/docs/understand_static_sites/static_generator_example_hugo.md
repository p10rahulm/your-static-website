+++
title = "A Static Website Generator Example: Hugo"
date = 2018-06-08T19:44:35+05:30

pageNumber = 8
# -----------------------------------------
# Summary section
# -----------------------------------------
# The below image will be shown in all the cards pointing to this article
caption_image = "dog_popup_thanks3.jpg"
# The below summary message will be shown in all the cards pointing to this article. If not available, it would be generated from the content of the page.
summary_content = '''
Hugo, the best way to create your own website'''
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
tags = ["Static Sites","documentation","Hugo","websites"]
categories = ["Website"]

[[previous_page]]
text = "Assembling a Website"
url = "/docs/understand_static_sites/assembling_webpage/"

[[next_page]]
text = ""
url = ""

[[quick_links]]
text = "*Why Hugo*"
url = "#why-hugo"
[[quick_links]]
text = "*Why not Hugo*"
url = "#why-not-hugo"
[[quick_links]]
text = "*Hugo Setup*"
url = "#a-typical-setup-in-hugo"
[[quick_links]]
text = "*Creation of a new content piece*"
url = "#creation-of-a-new-content-piece"

[[quick_links]]
text = "Introduction to Static Sites"
url = "/docs/understand_static_sites/introduction/"
[[quick_links]]
text = "Parts of a Webpage"
url = "/docs/understand_static_sites/parts_of_webpage/"
[[quick_links]]
text = "Retrieving a webpage from the internet"
url = "/docs/understand_static_sites/retrieving_a_webpage/"
[[quick_links]]
text = "What is a Static Website"
url = "/docs/understand_static_sites/static_website/"
[[quick_links]]
text = "Website Templates"
url = "/docs/understand_static_sites/website_templates/"
[[quick_links]]
text = "Static Website Generator"
url = "/docs/understand_static_sites/static_website_generators/"
[[quick_links]]
text = "Assembling a Website"
url = "/docs/understand_static_sites/assembling_webpage/"

# Writeup goes below
+++

Hugo is a static website generator as good as any other you will see. It is fast and effective, but takes time to learn, if you are creating a template and not using a readymade one.

### Why Hugo

1. It is the fastest static website generator
2. It is opensource and constantly under developement
3. It has a decent amount of documentation (though this can be improved)
4. It has a good number of templates (though as of this writing other static websites generators like Jekyll have more and better templates)
5. There are minimal errors during content writing, and when they do occur while creating templates, the error messages are very good. 
    - Note: This may come from the fact that it is written in [Go Templates](https://golang.org/pkg/text/template/) which is written in [GoLang](https://golang.org/), supposedly a language supported by Google. 
    - Note 2: You don't need any of these to create with Hugo.

For me the biggest factors are 1 and 5.

### Why not Hugo

1. There is a steep learning curve in case you are planning to build your own templates. This is very different from Wordpress which felt at the time I was much more of a novice as very plug and play.
    - If you have gone through and understood the above contents, you have already gone through much of this learning curve
2. The biggest fear with adopting a framework for very large companies is will it last for 5 or 10 years. Hugo has about 30k stars on github and is actively developed. I can only hope that it will remain active even if other frameworks start being faster, or better than hugo
3. The list of functions available in Go Templates is ok to good, but is not amazing. If you intend to extend Hugo a bit of coding may be required in an unfamiliar language (GoLang, though good is note widely adopted). You can attempt workarounds through basic functions currently available in Go Templates.
4. Hugo attempts to be minimal and not maximal. Templates in Hugo on the other hand are monolithic. You either take all or leave it. Wordpress excels in this where you have options to extend just a small part of wordpress through plugins.
5. Since templates are monolithic, you cannot assemble websites from smaller parts that you like (at present). Therefore one may decide to code in templates oneself. This leads to the website development taking time (for the first time hugo developer). If you like any template, and adopt it, this does not apply and development is very fast.

### FAQ

Two important questions before starting is what you need to do to setup and after setup, how much time/effort it will take to generate new content. If you are satisfied with the answers for these two questions you may want to go ahead/not go ahead with Hugo

#### A Typical Setup in Hugo

1. Download [Hugo](https://gohugo.io/getting-started/installing/)
    1. Place it in [PATH](https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/)
2. [Choose a theme](https://themes.gohugo.io/)
    1. Go to the hugo website and choose a template, or stick with this one!
3. Modify the files that come with the theme
    1. Site-level configurations:
        - This is found in the config.toml file
    2. Front page content
        - '_index.md' file in the content folder
    3. All content for website
        - Content files in each of the directories in the content folder
    4. Changing look and feel through images and logo
        = Logo, Favicon, Images, Audios and PDF files in the static folder
4. Create a local website for checking
    1. Go to [Terminal](https://askubuntu.com/questions/38162/what-is-a-terminal-and-how-do-i-open-and-use-it) or download [git for windows](https://git-scm.com/)
    2. cd into the directory of the hugo files
    3. Type `hugo server -D -p 1313`
    4. This means create a hugo server here which serves all pages including draft pages and serves it on localhost port 1313.
5. Check the files
    1. Open a browser window. Type localhost:1313 at the address bar
    2. Your site should open up
    3. If it is not fine, then go to your terminal and check for error message. This should be rare in case you have taken care to only modify content files from your chosen theme
    4. If it is fine proceed to next step
6. Create the website files
    1. In the terminal/bash you were using, you can type `Ctrl + c` to close the server. Alternatively open a new terminal/bash and cd into your hugo files directory
    2. Type `hugo`
    3. You should see all the website files being created in a directory called public.
7. Upload the files for Google static storage or whichever static host you are using. Push the files into your github repo for github pages
    1. Uploading can be automated, but this is discussed later
    2. Files can be pushed into git the first time by the following commands
        ```bash
        git init
        git add -A
        git commit -m "First time, creating static site!"
        git remote add origin https://github.com/user/repo.git
        git push --set-upstream origin master
        ```

#### Creation of a new content piece

1. Create a new content piece, say a post.
    - The types of content pieces you can create are described by the archetypes folder
    - open a terminal/bash window and cd into the hugo files directory
    - type `hugo new posts/my_post_name.md` replacing my post name by the title of the article.     - Note that it is recommended to use no spaces. Use underscores '_' instead.
    - When you type `hugo new posts/my_post_name.md`, the terminal should give some information ending with "`C:\My\hugo\directory\content\posts\my_post_name.md created`"
2. Add content to the content piece.
    - Open this file. If you are on windows, you can simply type 'F:\Code\hugo\first_site\content\posts\mypost.md' after pressing the windows button on the bottom left of your screen, the file should open on your default text editor.
    - Finish editing the post. You can use [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for writing content and any shortcodes provided by the template (or theme) author and save it
3. Push the content piece
    - Go back to the terminal window and type `git push`
    - This should push your content into your github repository.
4. Check your website
    - If you have correctly configured your DNS(say godaddy) and github (or any other host), you should immediately see the new post on the website.

We are (almost) ready at this stage to ask the question -  So how do I implement a static website with Hugo.
