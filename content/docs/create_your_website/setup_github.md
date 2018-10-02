+++
title = "Get Github login and setup Github"
date = 2018-06-08T19:44:35+05:30

pageNumber = 3
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
text = "Download Git Bash, Hugo and a text editor"
url = "/docs/create_your_website/download_essentials/"

[[next_page]]
text = "Buy the domain and setup godaddy"
url = "/docs/create_your_website/setup_godaddy/"

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

As described [here](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control), a version control system (or VCS) is a system that records changes to a file or set of files over time so that you can recall specific versions later. This basically ensures that you don't lose files or even content of files. Since it resides on the cloud, it is a must have if you intend to update your static site from multiple computers. Further github is going to be out website host, and that too for free. So let's get setup!

There are two parts to this: The signup and then the repository creation

## Signup for github

1. Go to [github.com](https://github.com/). Unless you are already signed in, it will ask you to sign up. github is very user friendly so this step should be easy.
    1. Pick a username, email and password. Needless to say, note these down
    2. It will ask you in the next step to verify your account. Click ok
    3. In the next step, choose the free plan.
    4. In the section 'tailor your experience' choose appropriate answers
2. Github is based on repositories. Think of these as version controlled directories you have on the cloud. To start off, we will be creating a repository.
    1. If you haven't yet verified your email id, now would be a good time to do so. Once you get click verify on the email, head back to [your main github page](https://github.com/dashboard)

## Create Repositories: One for template files and one for website output files

You will need to create ***two repositories***. One for the output webpages and one for the input template pages that you will be working on.

After the previous step, you will be taken to [your main github page](https://github.com/dashboard). If you are new to github, you will see a big green button on the left saying 'new repository'. If you don't see this, you can click the '+' button on the top right menu and click on 'new repository'

### Create first repository

1. Choose a repository name. This doesn't have to be unique across github, just unique to your username. Therefore choose something descriptive. Simple ones like `yourblogname` should be good enough.
2. Choose public, it should be ok as your site is static and everyone can view all files anyway.
3. Uncheck the box for "Initialize repository with a README"
4. Add .gitignore should be None for now
5. Add a license should be None for now. You can add these later if you feel like

- You will be taken to a page that looks like `https://github.com/yourusername/yourblogname`. Bookmark this page. Also note down the link to the git repository which should look like: `https://github.com/yourusername/yourblogname.git`

### Create second repository

1. Follow the five steps above create another repository. This can be of a simple name like `yourblogname-template-files`. Post creating the repo, it should be available at the page `https://github.com/yourusername/yourblogname-template-files` and the git repository would be at `https://github.com/yourusername/yourblogname-template-files.git`

You should have at the end two repositories: (1) yourblogname which will be the repository for your output files and (2) yourblogname-template-files which will be the repository for the input files. Note these down, we will keep coming back to these.