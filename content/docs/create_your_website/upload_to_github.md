+++
title = "Check site and Upload to github"
date = 2018-06-08T19:44:35+05:30

pageNumber = 8
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
highlight_languages = ["bash","html"]
highlight_style = "railscasts"

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["Static Sites","documentation","Hugo","websites","setup"]
categories = ["Website"]

[[previous_page]]
text = "Modify Site Settings"
url = "/docs/create_your_website/modify_settings/"

[[next_page]]
text = "Connect github and Godaddy"
url = "/docs/create_your_website/connect_github_godaddy/"

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

So the files are now all with your settings and basic configurations have been changed, it's a good time to preview the site and then upload to github


1. Open a command prompt
2. create (mkdir) a folder where you want to keep your website files. For example, type `mkdir c:\users\yourname\website`. Note that you need to use forward slash if working in mac or linux environments.
3. Go to that folder `cd c:\users\yourname\website`
4. Use git to download the files. Then we will be changing the remote url names to the ones you created in the step where you [setup the version control system](#step-4-getting-a-version-control-system-or-login-to-github)

    ```bash
    # 1. Clone the site into your directory
    git clone --recurse-submodules -j8 https://github.com/p10rahulm/yourWebsite.git .

    # 2. Change the remote url (origin) to the template repo you created
    git remote set-url origin https://github.com/yourusername/yourblogname-template-files.git

    # 3. Listing your existing remote urls should indicate whether the change was successful
    git remote -v

    # 4. The output files will eventually be created in a directory called 'public'. 
    # #  We will create a submodule to link to your blog repo
    git submodule add https://github.com/yourusername/yourblogname.git public

    # 5. Send your files into your git repository through script (you may have to 
    # #  use backslash on windows). You may be asked for username and password now
    ./commit.sh

    # 6. Ensure deploy function is working
    ./deploy.sh

    # 7. Check your repos to see that everything is in place
    # #  Browse to https://github.com/yourusername/yourblogname-template-files/ 
    # #  and https://github.com/yourusername/yourblogname/ to see that everything 
    # #  is updated there
    ```

Note: More advanced users may want to use ssh method for login, but that will not be covered here. You can find [good resources](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/) from github itself on how to do this