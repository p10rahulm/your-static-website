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

1. Open a bash/terminal/command prompt and cd into your website folder
    - For example if your website files are at `c:\users\yourname\website`, then type `cd c:\users\yourname\website`
2. We will now create a server and check files. Type into the prompt

    ```bash
    hugo server -D -p 1313
    ```
3. The above command will create a local server at port 1313. You can check your site by going to `http://localhost:1313` on your browser and perusing all the links there for sanity check
4. Now if all the files are fine, we can commit the templates and deploy the output to our output repository
5. You have already gone through steps 1-4 below while [downloading the template](/docs/create_your_website/download_template/), so you can skip it here if you want

    ```bash
    # 1. Check your remote url for template folder. They should point to the 
    # #  repositories *you* created
    git remote -v
    # #  make sure you see something like 
    # #  https://github.com/yourusername/yourblogname-template-files.git here
    # 2. Check your remote url for public folder
    cd public

    git remote -v
    # #  make sure you see something like
    # #  https://github.com/yourusername/yourblogname.git here

    # 3. Go back to the main folder
    cd ..

    # 4. Deploy the files (replace forward with backslash in windows)
    ./deploy.sh
    # # Note: Sometimes you will find that hugo fails on the first run throwing errors like 'runtime.throw(0xf5c376, 0x21)'. For such cases, stop the run where it is failing by pressing Ctrl+C and then rerun the command.

    # 5. Commit template files to github also
    ./commit.sh

    # 6. Check your repos to see that everything is in place
    # #  Browse to https://github.com/yourusername/yourblogname-template-files/ 
    # #  and https://github.com/yourusername/yourblogname/ to see that everything
    # #  is updated recently there
    ```

### In case of error

This has been tested and should work. If you find normal error messages, try to fix them. If you find really bad (!!) error messages try the following:

1. First backup your website folder by [copying it](https://stackoverflow.com/questions/14922562/how-do-i-copy-folder-with-files-to-another-folder-in-unix-linux). In windows this is easy enough through windows explorer
2. Repeat the instructions [here](/docs/create_your_website/download_template/)
3. Replace in this new directory from your older copy:
    1. the whole content folder
    2. config.toml file
    3. favicon and logo and any other images
4. Then rerun `./deploy.sh` and `./commit.sh`
