+++
title = "Download the template files"
date = 2018-06-08T19:44:35+05:30

pageNumber = 5
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
text = "Buy the domain and setup godaddy"
url = "/docs/create_your_website/setup_godaddy/"

[[next_page]]
text = "Preview the site"
url = "/docs/create_your_website/preview_site/"

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

1. Open a bash/terminal/command prompt
2. create (mkdir) a folder where you want to keep your website files. For example, type `mkdir c:\users\yourname\website`. Note that you need to use forward slash if working in mac or linux environments.
3. Go to that folder `cd c:\users\yourname\website`
4. Use git to download the files. **It's important to follow the below steps in order**

    ```bash
    # 1. Clone the site into your directory
    git clone https://github.com/p10rahulm/your-static-website.git .

    # 2. Change the remote url (origin) to the template repo you created
    git remote set-url origin https://github.com/yourusername/yourblogname-template-files.git

    # 3. Listing your existing remote urls should indicate whether the change was successful
    git remote -v

    # 4. The output files will eventually be created in a directory called 'public'.
    # #  We will add the submodule setting to the file called .gitmodules
    git config --file=.gitmodules submodule.public.url https://github.com/yourusername/yourblogname.git

    # 5. Sync and update the submodule to ensure all files (like .git/config) also 
    # #  have the updated setting
    git submodule sync
    git submodule init
    git submodule update
    # #  You should see 'warning: You appear to have cloned an empty repository.' and
    # #  'fatal: no matching remote head'. This is expected.

    # 6. Check the remote repository url in the public folder
    cd public
    git remote -v
    # This should show something like https://github.com/yourusername/yourblogname.git

    # 7. Go back to main directory
    cd ..

    # 8. Send your files into your git repository through script (you may have to
    # #  use backslash on windows). You may be asked for username and password now
    ./commit.sh

    # 9. Now on your browser, check your template repository at
    # #  https://github.com/yourusername/yourblogname-template-files/
    # #  to see that everything is updated there
    ```

Note:

1. The first time you use a git command to upload, it will ask you for your username and password. The password should appear in a small additional popup window that maintains encryption. It should only ask for your password the first time you are uploading. More advanced users may want to use ssh method for login, but that will not be covered here. You can find [good resources](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/) from github on how to do this at a later point.
2. You have another repository at https://github.com/yourusername/yourblogname/ for our output files. As of now we have not yet deployed our site and so this will not be updated. We will come back here in the [Upload to github](/docs/create_your_website/upload_to_github/) step
3. If some part of above has failed, it is likely due to the step 4. We can do this manually by creating adding the following text to the `.gitmodules` file in the main website folder

    ```bash
    [submodule "public"]
        path = public
        url = https://github.com/yourusername/yourblogname.git
    ```