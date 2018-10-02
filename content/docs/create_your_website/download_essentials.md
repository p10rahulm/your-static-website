+++
title = "Download Git Bash, Hugo and a text editor"
date = 2018-06-08T19:44:35+05:30

pageNumber = 2
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
highlight_style = "ocean"

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["Static Sites","documentation","Hugo","websites","setup"]
categories = ["Website"]

[[previous_page]]
text = "Implement Static Site with Godaddy & github"
url = "/docs/create_your_website/implement_static_website_godaddy_github/"
[[next_page]]
text = "Setup Github"
url = "/docs/create_your_website/setup_github/"

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

The following are going to be needed for creating your own site:

1. Git Bash
2. Hugo
3. Text Editor

### Get git bash

1. Go to [Git Download Website](https://git-scm.com/downloads)
2. At the top, you would find a few operating systems. Click on your operating system, ex: windows or mac, etc
3. You will be lead to a site which auto triggers the download. If there is no download triggered you can choose 64 bit for most computers today.
4. Once it is downloaded into your directory, run it.
5. You can use the following options
    1. Agree to their terms
    2. Use the default installation folder. **Note this down**
    3. In the "Select components", choose all checkbox options
    4. In "Select start menu folder": Choose the appropriate start menu folder
    5. In "Adjusting your Path Environment": Choose "Use Git from Windows Command Prompt" **Please note that this step is important**
    6. In "Choose HTTPS transport backend": Choose OpenSSL
    7. In "Configuring line ending conversions": Choose the default (checkout windows style commit linux style)
    8. In "Configuring Terminal Emulator": Choose Mintty. It looks way better than windows stuff
    9. In "Configuring extra options" leave the default on.
6. This completes your setup of git. Now you are ready to code like a pro!
7. This is an excellent resource to visually check against in case you get stuck at any steps: [Install Git Bash Instructions](http://www.techoism.com/how-to-install-git-bash-on-windows/)

### Get Hugo

1. [Hugo](https://gohugo.io/) is an amazing framework for generating static websites. It is fast, well maintained and has excellent support. I'm going to list the main pros and cons of hugo here
    1. Pros:
        1. It is the fastest website generator. My template which has 1000+ files gets generated in 1 second flat.
        2. It is well supported and constantly improving.
        3. It is getting used on major platforms by major companies.
        4. It's main competitor is Jekyll which is built on ruby.
    2. Cons:
        1. If any, the only con is that it is built on GO, and Go Templates has the minor flaw of variable scope. There are workarounds due to Hugo's amazing developer 'bep'. (I'm told this issue has gone away with hugo version 0.48)
2. Go to the [Hugo downloads page](https://github.com/gohugoio/hugo/releases).
3. Choose the latest and greatest version. For example: For windows this would be 'hugo_0.45_Windows-64bit.zip', where the version 0.45 may be different.
4. When you click the download should trigger and the OS may ask you whether you want to save the file or open it. Save it into your downloads folder.
5. Go to your downloads folder. You should see the file.
6. Create a directory to store hugo like for example `c:\users\yourname\hugo` or `c:\hugo`. Let's call this the Hugo Directory
7. Note that if it is under your username other users of the computer may not have access rights to it.  
8. Click on the hugo zip file you downloaded and extract files into the hugo directory you created above.
9. You need to add this hugo folder to PATH. [This resource](https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/) is an excellent graphical tutorial on how to add a folder to path. I'm outlining the broad steps below for windows. For other OS, use [this](https://www.java.com/en/download/help/path.xml)
    1. Click on the windows button at the bottom left of your screen and type 'env'
    2. The first option you see on top should be 'Edit the system Environment variables'. Click this.
    3. You will automatically be taken to the advanced tab under system properties.
    4. Click on 'Environment Variables' at the bottom of this tab
    5. You should see two sections, 'User variables for user YOURNAME' and 'System Variables'
    6. Under System Variables, scroll down till you see 'Path'. Click on this and then click 'Edit' at the bottom of the page
    7. Here the first option on the right is 'New'. Click this.
    8. Type in the Hugo Directory path you choose for keeping hugo. Ex: `c:\hugo` or `c:\users\yourname\hugo`
    9. Click OK in all the windows to exit the control panel.
10. Now Hugo should be added to path. You can confirm this by going to the Google Cloud SDK shell and then typing `hugo` into the command line.
    - If it works you should get an output like `Error: Unable to locate Config file. Perhaps you need to create a new site.`
    - If it doesn't work, you should just see `'hugo' is not recognized as an internal or external command`. In this case revisit instructions for adding to PATH.
11. You can go to this site as a reference: [Hugo: Getting Started](https://gohugo.io/getting-started/installing/)
12. [This video is an excellent resource for installing hugo on windows](https://www.youtube.com/watch?v=G7umPCU-8xc) and [this video for installing hugo on mac](https://www.youtube.com/watch?v=WvhCGlLcrF8). In general that series of videos are an excellent introduction to hugo, which I recommend you look at when you have the time.

### Get a good text editor

1. I recommend Atom as
    1. it's good for '.md' files that we'll be using,
    2. It has a good color scheme and highlighting in case you like a dark themed editor
    3. It is made by github, is open source and is well maintained.
    4. It is extendable through plugins.
2. I also like VS Code and notepad++.
    1. NP++ is lightest and comes in light theme without code highlighting.
    2. VS Code is super good and it would be on top of the list if it weren't for Microsoft bad rap of the 2000s.
    3. If you want to have a full featured IDE, you can download Webstorm from intellij. This is good if you have large projects.
3. You can any of these of your choice from here: [Atom](https://atom.io/), [VSCode](https://code.visualstudio.com/), [Notepad++](https://notepad-plus-plus.org/download) and [Webstorm](https://www.jetbrains.com/webstorm/). Setup for all is very simple and you can go with default options when asked for setup configurations.
