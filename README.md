# Create a website in 9 steps using Godaddy, Hugo and Github

We are today going to look at how to setup a website from scratch. The expectation is that while the initial setup is going to take something like 3-4 hours, any changes to the website should be a matter of seconds or minutes.

# Section 3: Creating your Website Content

This is probably the most involved part of creating your website. What do you write, what images to use become creative questions that take time for all of us. While the site building itself takes time, you can start with something prebuilt, check that it works and when you do get time, modify it into something you want or need.

Broadly the following steps are involved in creating the website

1. Pre-requisite Downloads and Setup
2. Download the template files.
3. Preview the site
4. Modify basic template files.
5. Check and preview the site
6. Modify the content and preview
7. Check and preview again
8. Move from template to deployment
9. (Optional) Learn to create new templates

## Step 1: Pre-requisite Downloads and Setup

The following are going to be needed for creating your own site:

1. Git Bash
2. Hugo
3. Github Account
4. Text Editor
5. Google Cloud SDK (optional)

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

### Signup for github and create two repositories

As described [here](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control), a version control system (or VCS) is a system that records changes to a file or set of files over time so that you can recall specific versions later. This basically ensures that you don't lose files or even content of files. It is a good to have when creating a website, especially one that you expect to update frequently. It is a must have if you intend to update your static site from multiple computers.

1. Go to [github.com](https://github.com/). Unless you are already signed in, it will ask you to sign up. github is super user friendly so easy enough.
    1. Pick a username, email and password. Needless to say, note these down
    2. It will ask you in the next step to verify your account. Click ok
    3. In the next step, choose the free plan.
    4. In the section 'tailor your experience' choose appropriate answers
2. Github is based on repositories. Think of these as version controlled directories you have on the cloud. To start off, we will be creating a repository.
    1. If you haven't yet verified your email id, now would be a good time to do so. Once you get click verify on the email, head back to [your main github page](https://github.com/dashboard)
3. You will need to create ***two repositories***. One for the output webpages and one for the input template pages that you will be working on.
4. After the previous step, you will be taken to [your main github page](https://github.com/dashboard). If you are new to github, you will see a big green button on the left saying 'new repository'. If you don't see this, you can click the '+' button on the top right menu and click on 'new repository'
    1. Choose a repository name. This doesn't have to be unique across github, just unique to your username. Therefore choose something descriptive. Simple ones like `yourblogname` should be good enough.
    2. Choose public, it should be ok as your site is static and everyone can view all files anyway.
    3. Uncheck the box for "Initialize repository with a README"
    4. Add .gitignore should be None for now
    5. Add a license should be None for now. You can add these later if you feel like
5. You will be taken to a page that looks like `https://github.com/yourusername/yourblogname`. Bookmark this page
6. Note down the link to the git repository which should look like: `https://github.com/yourusername/yourblogname.git`
    - This can be the output pages
7. Follow steps in point 4 to create another repository. This can be of a simple name like `yourblogname-template-files`. Post creating the repo, it should be available at the page `https://github.com/yourusername/yourblogname-template-files` and the git repository would be at `https://github.com/yourusername/yourblogname-template-files.git`

You should have at the end two repositories: (1) yourblogname which will be the repository for your output files and (2) yourblogname-template-files which will be the repository for the input files

### Get a good text editor

- I recommend Atom as
    1. it's good for '.md' files that we'll be using,
    2. It has a good color scheme and highlighting in case you like a dark themed editor
    3. It is made by github, is open source and is well maintained.
    4. It is extendable through plugins.
- I also like VS Code and notepad++.
    1. NP++ is lightest and comes in light theme without code highlighting.
    2. VS Code is super good and it would be on top of the list if it weren't for Microsoft bad rap of the 2000s.
    3. If you want to have a full featured IDE, you can download Webstorm from intellij. This is good if you have large projects.
- You can any of these of your choice from here: [Atom](https://atom.io/), [VSCode](https://code.visualstudio.com/), [Notepad++](https://notepad-plus-plus.org/download) and [Webstorm](https://www.jetbrains.com/webstorm/)

### Get Google Cloud SDK (optional)

1. Go to [Google Cloud SDK Docs](https://cloud.google.com/sdk/docs/)
2. This should enable you to install google cloud SDK.
    1. Though the cloud SDK consists of cloud gsutil and gq command line tools, we will only be using gsutil.
3. Don't worry if you don't understand all of this yet. We will be using only one command on command line.
4. If you are unable to access the download button on that page, you can probably access it directly [here](https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe). Please check as this link may not update with versions.
5. In the installer, you will be asked for some options
    - In the install type, choose single user
    - Leave the default destination folder as is. *Note this down*.
    - In the select commands to install. Make sure all options, including "Beta Commands" are checked
    - It will begin the downloading, extract and install in the folder you noted down.
    - It should tell you that installation is done.
    - When you click next here, it will ask you to open the cloud console and says it will run the command `gcloud init`. Make sure all the options are checked and click next to finish installation.
6. On the new terminal window that opens it will take you through a bunch of questions as it initializes the gcloud engine.
    1. If you are an existing user it may detect old google cloud sdk settings
7. Please use the following answers where relevant (and just use defaults for others)
    1. "Choose the account for which you want to create configuration": Choose a gmail/google login that you will be using to host the website. If this does not work, we will have to use `gcloud auth login` in the next step.
    2. "Enter project ID that you would like to use": We will be setting this default at a later time, as of now just leave blank and press enter
8. Once `gcloud init` has run, in case authentication was not successful (likely as you didn't provide password), type on the console `gcloud auth login`.
9. This should open a browser window asking you to login to your google account. Once you do this, you should be redirected to a page where you see the message (on the browser) "You are now authenticated with the Google Cloud SDK!". You can now close the browser window and head back to the console window.
10. Note this command down - `gcloud auth login`, you may have to do this several times.
11. Also note the command - `gcloud config set project YOUR_PROJECT_ID`. We will be using it later.
12. You will need this software handy. So make sure you pin it/bookmark it or some such. In windows, you will find it in the start menu under Google Cloud SDK > Google Cloud SDK Shell
13. Before closing the software, make sure git runs on it by typing `git` into the command line. If it works it should give you a whole host of options. If it does not work, it should say something like `git is not recognized as an internal or external command`
14. If it was not recognized, most likely you would have to check the steps of installation of git-scm. Likely that the software may not have been added to PATH environment.
    1. [This website](https://www.java.com/en/download/help/path.xml) is a good reference for how to add to PATH
    2. This [stackoverflow question](https://stackoverflow.com/questions/31167181/adding-git-to-path-variable-cant-find-github-under-appdata-local) mentions which folder you need to add to PATH

## Step 2: Download the template files

1. Open a command prompt
2. create (mkdir) a folder where you want to keep your website files. For example, type `mkdir c:\users\yourname\mywebsite`. Note that you need to use forward slash if working in mac or linux environments.
3. Go to that folder `cd c:\users\yourname\mywebsite`
4. Use git to download the files. Then we will be changing the remote url names to the ones you created in the step where you [setup the version control system](#step-4-getting-a-version-control-system-or-login-to-github)
    ```bash
    # 1. Clone the site into your directory
    git clone --recurse-submodules -j8 https://github.com/p10rahulm/yourWebsite.git .

    # 2. Change the remote url (origin) to the template repo you created
    git remote set-url origin https://github.com/yourusername/yourblogname-template-files.git

    # 3. Listing your existing remote urls should indicate whether the change was successful
    git remote -v

    # 4. The output files will eventually be created in a directory called 'public'. We will create a submodule to link to your blog repo
    git submodule add https://github.com/yourusername/yourblogname.git public

    #5. Do the regular git updates through script (you may have to use backslash on windows)
    ./commit.sh

    #6. Ensure deploy function is working
    ./deploy.sh

    #7. Check your repos to see that everything is in place
    # Browse to https://github.com/yourusername/yourblogname-template-files/ and https://github.com/yourusername/yourblogname/ to see that everything is updated there

    ```

## Step 3: Preview the site

1. Check whether the website works as is. For this you need to open a hugo server. 
2. Type into the terminal that you used for downloading the files
    ```bash
    hugo server -D -p 1313
    ```
3. This opens a server with all files including those which are in draft
4. Go to your favorite web browser (preferably Firefox or Chrome, i've not tested on IE)
5. Open `http://localhost:1313`. Even after checking that everything works, keep this tab open.

## Step 4: Modify basic template files

### How are template files organized

1. If you went through the whole section, [Understanding Hugo](#Step-1-Understanding-Hugo), then great we have covered most of this. If not, please go through these sub-sections on [how information is stored](#How-is-information-stored) and [where information is stored](#Where-is-information-stored)
2. The gist on how information is stored is that configurations are stored in [toml format](https://github.com/toml-lang/toml) and html content is stored in [markdown format](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
3. The gist on where information is stored is that
    1. Site level configurations are stored in config.toml
    2. Archetypes are stored in the archetypes directory. When you ask hugo to create a new content piece, it takes information from the archetype as to what text to pre-fill it with
    3. content directory is where all the content for the pages are stored. This is the most important directory. ***Each file*** here needs to be checked so that the text is what the creator expects
    4. The data directory is where the template creator can dump data to be used in any of the templates.
    5. Layouts directory is where all the default templates, template pieces and shortcodes are stored. You will need this when you want to modify templates
    6. Static Directory is where all the assets like images, pdf files, audio files, etc are stored. These are copied as-is into any output generated by Hugo.

### What needs to be modified

The main files to be modified are:

1. config.toml
2. _index.md
3. contact.md
4. contact_success.md
5. popup_success.md
6. privacy.md
7. termservice.md

### config.toml file

The first thing you want to look at is the config.toml file. We will describe all the configurations here. But the important ones to be changed are:

- baseurl = "http://www.yourdomain.com/"
- title = "Your Website Name"
- disqusShortname = "yourdisqusShortname"
- googleAnalytics = "UA-123456789-1"
- copyright = "&copy; 2018 yourCompanyName"
- site_author_name = "yourName"
- role = "yourRole, yourCompanyName"
- email = "yourName@gmail.com"
- default_description = "-273.15K. So Cool."
- facebook_admin_handle = "yourName"
- twitter_creator_handle = "@yourName"
- twitter_site_handle = "@yourWebsite"
- favicon = "favicon.jpg"
- apple_touch_icon = "favicon.jpg"
- logo = "logo.jpg"
- map_api_key = "AIzaSyBVTxUD4jy-hOKRaOquYgxpslLv1oMffFg"
- latitude = "12.932376"
- longitude = "77.630389"
- img_source = "/img/flowers_line_drawing.jpg" # decorative image for popup
- popup_submission_mail = "yourName@gmail.com"
- popup_submission_subject = "New subscription for your site!"
- secondary_forwarding_emails = ["yourName@gmail.com","anotherName@gmail.com"]
- [[params.footer_network]]
    url = "https://www.facebook.com/yourName"
- [[params.footer_network]]
    url = "https://www.linkedin.com/in/yourName/"
- [[params.footer_network]]
    url = "http://github.com/your_username"

```toml
    # Notes. those options marked with * need to be changed. Rest are optional
    #* 1. baseurl is your domain name
    baseurl = "http://www.yourdomain.com/"

    #* 2. title is your website name
    title = "Your Website Name"

    #* 3. disqus is the third party application we will be using for comments. Get your own disqus shortname here: https://disqus.com/admin/create/ and fill it below
    disqusShortname = "yourdisqusShortname"

    #* 4. Enabling Google Analytics on your site enables you to track site usage, referrers and various other statistics.
    ## - See how to get your google analytics ID here: https://support.google.com/analytics/answer/1042508?hl=en
    ## - The file where google analytics is implemented is /layouts/partials/js_scripts/ga.js

    googleAnalytics = "UA-123456789-1"

    # 5. uglyURLs decide how your pages are saved. When enabled, creates URL of the form /filename.html instead of /filename/.
    uglyURLs = false 

    # 6. Summaries in lists - number of words used in the Hugo summary function
    summaryLength = 25  

    # 7. Pagination Options
    # 7.1 How many pages by default in any list page
    paginate = 10

    # 7.2 What are the pagination list pages called. 
    # For example http://www.mydomain.com/posts/{{paginatePath}}/2
    paginatePath = "page"


    # 8. Directories names in the theme. Keep defaults here
    themesDir = "themes"
    archetypeDir = "archetypes"
    contentDir ="content"
    dataDir ="data"
    publishDir = "public"
    layoutDir ="layouts"




    #* 9. Your copyright notice - appears in site footer and in RSS. Note: To display a copyright symbol, type `&copy;`.
    copyright = "&copy; 2018 yourCompanyName"

    # 10. If enableRobotsTXT is true, a simple robots.txt is created allowing all agents to crawl everything. If you want to create your own robots.txt, then place a robots.txt in the static folder.
    enableRobotsTXT =true



    # 11. If enableGitInfo is true, then last modified date is obtained from git logs. It may be slow. so better false.
    enableGitInfo = false

    # 12. Language - use some form of english
    languageCode = "en-us"

    # 13. For debugging while testing only, you can turn this to true. When you type `hugo` then the log file will be generated at below location. Server anyway generates errors, so turning false
    log = false
    logFile ="public/log.txt"


    # 14. Enable verbose logging for hugo server on the command `hugo server -D`.
    verbose =true
    verboseLog =true

    # Below the theme creator can create their own site wide variables

    [params]
    #* 15. Site Author name
    site_author_name = "yourName"

    #* 16. Site creator role. This will be used wherever role is required.
    role = "yourRole, yourCompanyName"

    #* 17. Site creator email. Again used in a bunch of places like contact
    email = "yourName@gmail.com"

    # SEO Section

    #* 18. This is the default description of the website used for SEO (facebook shares etc)
    default_description = "-273.15K. So Cool."

    #* 19. Add your FB admin site handle for facebook cards
    facebook_admin_handle = "yourName"

    #* 20. Add your twitter handle for twitter sharing cards
    twitter_creator_handle = "@yourName"

    #* 21. Add your twitter site handle for twitter sharing cards if any, or keep same as twitter_creator_handle
    twitter_site_handle = "@yourWebsite"


    #* 22. Choose a favicon. Make it really small, and save this in the *static* folder.
    favicon = "favicon.jpg"

    #* 23. Optionally choose another favicon for apple high resolution. Save this also in static folder
    apple_touch_icon = "favicon.jpg"

    #* 24. Diplay a logo in navigation bar (without the text). Try keeping width to height between 7:5 to 7:7
    logo = "logo.jpg"

    # 25. When a user refreshes the page, open the page at the top
    open_at_top = false

    # 26. This is the default font set for this theme. Try to not change, it's used everywhere!
    google_fonts = ["EB Garamond","Lora","Roboto Mono"]


    # 27. In case you want to add custom css and custom js, place them in (i) /static/css/ folder and (ii) /static/js/ folders
    # Add the filenames in the following two arrays
    custom_css = []
    custom_js = []

    # 28. Below will be the active menu items for the navbar (navigation menu) at the top of the page
    # Please only include the names as given in the menu.main section below
    navbar_active = ["Home","Posts","Thoughts","Publications","Reviews","Notes","Contact"]

    #* 29. You can set a map in the front page in the contact section from google maps.
    # 1. Get key here: https://developers.google.com/maps/documentation/javascript/get-api-key
    # 2. To get your coordinates, right-click on Google Maps and choose "What's here?". The coords will show up at the bottom.
    map = true
    map_api_key = "AIzaSyBVTxUD4jy-hOKRaOquYgxpslLv1oMffFg"
    latitude = "12.932376"
    longitude = "77.630389"
    zoom = 15


    # 30. Sitewide default for comments. You can enable comments on a page or section basis
    enable_comments = false

    # 31. A small "back to top" button will show up at the bottom of the website
    show_back_to_top = true

    # 32. Change various options related to cookie consent form (required for EU etc)
    show_cookie_consent = true
    cookie_button_color = "#fff"
    cookie_button_text_color = "#0095eb"
    cookie_button_border_color = "#0095eb"
    cookie_button_message = "Got it!"
    cookie_background_color = "#0095eb"
    cookie_text_color = "#fff"
    cookie_link_color = "#aaa"
    cookie_message = "This website uses cookies to ensure you get the best experience on our website."
    cookie_container_padding_top = "4px"
    cookie_container_padding_bottom = "4px"


    # There are various changes that can be made to how the sharer works below
    [params.sharer]

    # 33. Global and page settings for sharer has to be true for it to be shown
    sharer_active = true

    # There are two ways in which sharers can be included in your site.
    # 1. Through a fixed button that when clicked rolls up to show sharing buttons (bottom right of screen)
    # 2. Through a fixed menu on the left. This is active on larger screens. On smaller screens, there would be a fixed menu at bottom of screen

    # 34. Sharer Rollup button
    sharer_rollup_button_active = true
    sharer_button_color = "#0095eb"
    sharer_pullup_button_icon = "fa-share-alt"

    # 35. Fixed menu sharer
    # Note that this changes with screen width. This can be checked by pressing ctrl+shift+i on chrome
    sharer_fixed_menu_active = true
    show_fixed_sharer_on_scroll = true
    # If show_menu_on_scroll is true, how much to scroll
    scroll_amount_to_activate_sharer = 20


    # There are various changes that can be made to how the popup works below
    [params.popup]



    # 36. Below is the global popup default. 
    popup_active = true

    # 37. Should popup be shown once per session or persist across browser close? default is persist. This is done by setting a small cookie on client browser
    reload_popup_once_per_session = false


    # We will allow three types of popups, timed popup, popup on given amount of scroll and exit intent popup
    # There are three ways of activating a popup.
    #        1) There is a button on the bottom right which can always be clicked.
    #        2) There is a delay activation
    #        3) There is an exit intent activation
    #        4) There is a scroll amount activation
    # Of these the button activation is always on. The others can be set here.

    # 38. Show popup button at bottom of screen
    popup_show_button_on_bottom_right = true
    popup_button_color = "#0095eb"
    pullup_button_icon = "fa-fire"
    pullup_button_icon_color = "#fff"



    # 39. Delay activation of popup
    activate_popup_on_delay = true
    seconds_before_activation = 10

    # 40. Exit intent activation of popup
    activate_popup_on_exit_intent = true
    # The sensitivity is triggered by how fast the user takes the mouse out from top of the window (measured as mouse y coordinate when exit event is triggered)
    exit_intent_sensitivity = 20

    # 41. Amount of scroll activation of popup
    activate_popup_on_scroll = true
    scroll_percentage_before_activation = 0.6

    # Basically popup is a call to action, if all above are set to true, surely the visitor is going to see the popup


    # 42. You can change popup contents below
    # The popup will have
    #    a) A title
    #    b) explanatory text
    #    c) an image on the right or as a full background
    #    d) A formspree form for collecting name and email id
    #    e) A subscribe now button

    # choose from a font-awesome icon for the popup pullup (where applicable)

    title = "Subscribe Now"
    title_color = "#aaaaaa"
    subtitle = "Curated selection of articles straight to your inbox"
    subtitle_color = "#ffaa11"

    #* 42.1 This is an image that will be opened in the popup. Please use your own image
    img_source = "/img/flowers_line_drawing.jpg"

    # form label color
    form_label_color = "#ffaa33"

    # form submit text
    submit_text = "Subscribe"
    submit_text_color = "#ccaaaa"
    submit_button_color = "blue"

    # Tries to return to the referrer page, but in case that fails, the option below
    link_after_submit = "/subscriptionsuccess/"

    #* 43. Change the mail recipients and subject below
    popup_submission_mail = "yourName@gmail.com"
    popup_submission_subject = "New subscription for your site!"
    secondary_forwarding_emails = ["yourName@gmail.com","anotherName@gmail.com"]

    # 44. Popup close behaviour can be changed below
    # Close popup by clicking outside the box
    close_on_click_outside = true
    # Close popup by pressing escape
    close_on_escape = true

    # 45. Popup form text goes below. Leave as is.
    [[params.popup.form_inputs]]
        name="name"
        required="required"
        type="text"
        autocomplete = "name"
        helper_text = "Your Name *"

    [[params.popup.form_inputs]]
        name = "Email ID"
        requried = "required"
        type= "email"
        autocomplete = "email"
        helper_text = "Your Email *"


    #* 46. The site footer will contain three icons. You can choose the icons (from https://fontawesome.com/v4.7.0/icons/) and change links below

    [[params.footer_network]]
    url = "https://www.facebook.com/yourName"
    iconpack = "fa"
    icon = "fa-facebook"

    [[params.footer_network]]
    url = "https://www.linkedin.com/in/yourName/"
    iconpack = "fa"
    icon = "fa-linkedin"

    [[params.footer_network]]
    url = "http://github.com/your_username"
    iconpack = "fa"
    icon = "fa-github"



    # 47. This is a superset of all menu options you can choose. The actual menus chosen from this are set from Params.navbar_active above

    [menu]
    [[menu.main]]
    identifier = "home"
    name = "Home"
    pre = ""
    url = "./#about_us"
    weight = -1

    [[menu.main]]
    identifier = "posts"
    name = "Posts"
    pre = ""
    url = "./posts/"
    weight = 0

    [[menu.main]]
    identifier = "books"
    name = "Books"
    pre = ""
    url = "./books/"
    weight = 1

    [[menu.main]]
    identifier = "code"
    name = "Code"
    pre = ""
    url = "./code-snippets/"
    weight = 2

    [[menu.main]]
    identifier = "courses"
    name = "Cooks"
    pre = ""
    url = "./courses/"
    weight = 3

    [[menu.main]]
    identifier = "events"
    name = "Events"
    pre = ""
    url = "./events/"
    weight = 4

    [[menu.main]]
    identifier = "notes"
    name = "Notes"
    pre = ""
    url = "./notes/"
    weight = 5

    [[menu.main]]
    identifier = "people"
    name = "People"
    pre = ""
    url = "./people/"
    weight = 6

    [[menu.main]]
    identifier = "publications"
    name = "Publications"
    pre = ""
    url = "./publications/"
    weight = 7

    [[menu.main]]
    identifier = "reviews"
    name = "Reviews"
    pre = ""
    url = "./reviews/"
    weight = 8

    [[menu.main]]
    identifier = "thoughts"
    name = "Thoughts"
    pre = ""
    url = "./#featured_thoughts"
    weight = 9

    [[menu.main]]
    identifier = "workshops"
    name = "Workshops"
    pre = ""
    url = "./workshops/"
    weight = 10

    [[menu.main]]
    identifier = "contact"
    name = "Contact"
    pre = ""
    url = "/contact"
    weight = 100

    # 48. Here we choose the taxonomies. Various types of pages use various taxonomies. This doesn't have to be changed unless you are adding new page types to the template. default taxonomies in most pages are tags and categories

    [taxonomies]
    tag = "tags"
    category = "categories"
    project = "projects"
    division = "divisions"
    team = "teams"
    genre = "genres"
    subject = "subjects"
    topic = "topics"
    reviewed_item_category = "reviewed_item_categories"
    publication_type = "publication_types"
    artist = "artists"
    album = "albums"


    # 49. Configure the English version of the website.
    # TODO: ADD OTHER LANGUAGE SUPPORT
    [Languages.en]
    languageCode = "en-in"

    # 50. Choose the output formats you are going to use. The only important one in this case is html
    [outputs]
    home = [ "HTML", "CSS", "RSS", "JSON"]
    section = [ "HTML", "RSS" ]

    # 51. Markdown is converted to html by an engine called BlackFriday. Configure BlackFriday Markdown rendering below.
    # See: https://gohugo.io/readfiles/bfconfig/
    [blackfriday]
    hrefTargetBlank = true  # `true` opens external links in a new tab.
    fractions = true  # `false` disables smart fractions (e.g. 5/12 formatted as a fraction).
    smartypants = true  # `false` disables all smart punctuation substitutions (e.g. smart quotes, dashes, fractions).


    # 52. We are using the below shortcode for image processing in our documents. Set the defaults below
    [imaging]
    # Default resample filter used for resizing. Default is Box,
    # a simple and fast averaging filter appropriate for downscaling.
    # See https://github.com/disintegration/imaging
    # and   https://gohugo.io/content-management/image-processing/
    resampleFilter = "box"

    # Default JPEG quality setting. Default is 75.
    quality = 75

    # Anchor used when cropping pictures.
    # Default is "smart" which does Smart Cropping, using https://github.com/muesli/smartcrop
    # Smart Cropping is content aware and tries to find the best crop for each image.
    # Valid values are Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
    anchor = "smart"

    # 53. The outputs in various formats are created with a filename. The defaults for this can be set below. Not used as such so not that important

    [outputFormats]

    [outputFormats.json]
    baseName = "manifest"
    isPlainText = true

    [outputFormats.css]
    baseName = "styles"

```

### _index.md in the content folder

The descriptions are given below within the toml. use this reference to change the file.

```toml
# Please use your own images. I provide the code with no implicit or explicit warranties and I am not to be liable for any claim or damages arising from use of this software.

# All options below that are marked with * need to be changed
# There are eight sections in the front page
# 1. Top Banner
# 2. Showcase
# 3. About Us
# 4. Logo Wall
# 5. Featured Pages
# 6. Call to Action
# 7. Reviews
# 8. Contact

# At the outset decide which ones of these you want to use by viewing the preview index page.
# If you don't need any one of these, just set active to false for that section below
# Once you decide you want to have a section, you can change the options for the section.



#* 1. This is the title of the site front page
title = "The Thinking Tree Homepage"

#* 2. These are the popup and sharer options. They are described in more detail in config.toml
show_popup = true
show_sharer = true
rollup_sharer_active = true
fixed_sharer_active = true

# ----------------------------------
# Section 1: Top section
# ----------------------------------
# ----------------------------------
# #
# 1. This is the heading section. Here we use a sliding banner of two images
# 2. The content for the layout can be changed below
# 3. The main fields for rendering the layout are in top_banner.toml in folder 'data/layouts'
# 4. The fields here are rendered by 'render_content_layout_fields.html' which is called by
# #  top_banner.html in homepage-sections
# 5. These fields in 'top_banner.toml' are another (simplified?) way of rendering html.
# 6. One can list multiple slide elements as '[[slide_elements]]'
# 7. For each slide element, one can input styles as '[[slide_elements.styles]]'
# #  with multiple style values as '[[slide_elements.styles.style_value]]'
# #
# #
# 8. We will describe each of the tags in the file top_banner.toml below
# i    name: This has to be unique. It is an identifier of that element. Doesn't go into html
# ii   class & id: These are the class & id of item used in the rendered html.
# iii  content: The actual content for the viewer
# iv   has_children: Decides whether any other elements are rendered within this one
# v    has_parent: true if it is the child of any other element, else false.
# vi   parent: The name of the parent element goes here
# vii  type: Multiple types are there like div -generic html dividor, 'a' for links, etc
# viii slide_elements.styles.media_type: what browser screens to target
# #    https://www.w3schools.com/cssref/css3_pr_mediaquery.asp
# ix   slide_elements.styles.container: css parent name
# x    slide_elements.styles.target: css target
# #    https://www.w3schools.com/css/css_syntax.asp
# xi   [[slide_elements.styles.style_value]]: field (css properties) and value pairs for css
# #    https://www.w3schools.com/cssref/
# xii  [[slide_elements.custom_js_partials]]: Variables for js related to that element
# xiii slide_elements.custom_js_partials.partial_location: Location of js file to load
# xiii slide_elements.custom_js_partials.variable_name: Variables can be passed to above file
# xiv  [[slide_elements.tags]]: Elements of type links ('a') need hrefs passed in the html
# #    These can be passed within tags, which have field and a value. For example:
# xv   slide_elements.tags.field: Can take values like 'href'
# xvi  slide_elements.tags.value: Can take values like 'http://google.com' in example above
# xvii content_field_name: This can be used to replace either "content" or "tags.value"
# #    with a value from another file, which contains the field name and value
# #    For example, one can place 'content_field_name = "link2"' inside 
# #    [[slide_elements.tags]] in top_banner.toml and 
# #    pass link2 from [top_banner.content] in _index.html
# xviiiexternal css sources: One can pass these inside [[slide_elements.css_sources]] 
# #    with an url field
# xix  external js sources: One can pass these inside [[slide_elements.js_sources]]
# #    with an url field, and true/false values for async and defer js sourcing
# #
# ----------------------------------
[top_banner]

    active=true
    layout = "top_banner" # choose from single or carousel
    [top_banner.content]
        # content from below. Layout from above
        title = "The Thinking Tree"

        link1_name = "Posts"
        link1 = "#featured_posts"
        link2_name = "Events"
        link2 = "#featured_events"
        link3_name = "Thoughts"
        link3 = "#featured_thoughts"

        slide1_image = "linear-gradient(to bottom right,rgba(0,0,200,0.2), rgba(200,0,120,0.2)),url(/img/headers/bubbles-wide.jpg)"
        slide1_link = "/posts"
        slide1_subject = "Posts"
        slide1_title = "Onward and Upward, Like a Dendritic Tree"
        slide1_description = "Reducing entropy, one post at a time"
        slide2_image = "linear-gradient(to bottom right,rgba(0,0,200,0.2), rgba(200,0,120,0.2)),url(/img/orange-fractal.jpg)"
        slide2_link = "/publications"
        slide2_subject = "Publications"
        slide2_title = "Every new day, better than the last"
        slide2_description = "Nurturing creativity, like saplings amidst giants"





# ----------------------------------
# Section 2: Showcase section
# ----------------------------------
# ----------------------------------
# 1. This section can be used to highlight the salient points of your website/product
# 2. This section uses Flexbox render the cards in showcase.html in homepage-sections folder
# 3. Each card can contain an icon, a link (even internal link), a title and the content
# 4. The content can be in markdown
# 5. The icons can be chosen from here: https://fontawesome.com/v4.7.0/icons/
# ----------------------------------
[showcase]
    active=true
    headline_layout = "headline_elements"
    [showcase.headline]
        title = "Greatest ever works"
        subtitle = "Major Projects and Work Interests"

    [[showcase.card]]
        icon = "fa-laptop"
        title = "Responsive Design"
        link = "#"
        card_content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."

    [[showcase.card]]
        icon = "fa-lock"
        title = "Web"
        link = "#"
        card_content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."

    [[showcase.card]]
        icon = "fa-shopping-cart"
        title = "E-Commerce"
        link = "#"
        card_content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."


# ----------------------------------
# Section 3: About us section
# ----------------------------------
# ----------------------------------
# 1. This section broadly contains space for
# i    Heading, sub-heading
# ii   A photo with title and subtitle
# iii  A list of affiliations
# iv   Social Media links
# v    A long form content piece
# vi   A left list with icons and text below content piece
# vii  A mid-right list with icons and text below content piece
#
# 2. These subsections can be changed by changing the configurations below respectively
# i    [about_us.headline]
# ii   [about_us.descriptor] - logo_image, name_title and name_subtitle
# iii  [[about_us.descriptor.affiliations]] (add any number with name and url)
# iv   [[about_us.descriptor.social]] - you can add icon and link. 
#      Choose icon for above from https://fontawesome.com/v4.7.0/icons/
# v    [about_us.detail] - title and content
# vi   [about_us.detail.bottom_left] - title and [[about_us.detail.bottom_left.list]]
#      Add title, an optional subtitle and icon from font-awesome (link above) in the list
# vii  [about_us.detail.bottom_right] - title and [[about_us.detail.bottom_right.list]]
#      Add title, an optional subtitle and icon from font-awesome (link above) in the list
#
# 3. The layout is rendered by about_us.html in homepage-sections directory
# ----------------------------------
[about_us]
    active=true
    headline_layout = "headline_elements"
    [about_us.headline]
        title = "About Us"
        subtitle = "Serving clients since 1985"
    # ---------------------------------
    [about_us.descriptor]
        logo_image = "portrait.jpg"
        name_title = "yourName"
        name_subtitle = "yourRole, yourCompanyName"

        # ---------------------------------
        [[about_us.descriptor.affiliations]]
            name = "Company1, Company2"
            url = ""
        [[about_us.descriptor.affiliations]]
            name = "Company3, Company4, Company5"
            url = ""

        [[about_us.descriptor.affiliations]]
            name = "University1, University2"
            url = ""
        # ---------------------------------
        [[about_us.descriptor.social]]
            icon = "fa-envelope"
            icon_pack = "fa"
            link = "mailto:yourName@gmail.com"
        [[about_us.descriptor.social]]
            icon = "fa-linkedin"
            icon_pack = "fa"
            link = "//linkedin.com/in/yourName/"

        [[about_us.descriptor.social]]
            icon = "fa-facebook"
            icon_pack = "fa"
            link = "//facebook.com/yourName"

        [[about_us.descriptor.social]]
            icon = "fa-github"
            icon_pack = "fa"
            link = "//github.com/your_username"


    # ---------------------------------
    [about_us.detail]
        title = "Biography"

        # ---------------------------------
        # Put the content below between the triple quotes. You may use markdown.
        # Make sure alignment is ok. I've used replace of '                '
        # to remove the leading white space
        content = '''
                yourName founded yourCompanyName as a means to work on problems that take time and are more difficult to address than traditional start-ups would allow. Traditionally the distinction between research and production had been fairly well demarcated with research institutions working on technologies that were forward looking and companies working on production oriented technology (technologies which made money today). That distinction has become blurred, especially in computer science with much of the cutting edge improvements happening within companies.

                yourCompanyName is an attempt to work on futuristic technologies covering multidisciplinary domains. We follow problems till their origins, dive into rabbit holes and go deep into the root of problems. Many times this leads us to mathematics, which seems to be the foundation of all else. Sometimes it leads to sociology and behavioural science. Few times it leads to the complexity of Biology. Other times it leads to thought experiments. Most of this rests on a backbone of coding as it is ubiquitous as a tool.

                The research areas we work on here are network topologies, computational structures, self-organization and automata, idea space theory. Apart from this core, there is also ongoing work on pattern finding in market microstructure (high frequency trading), and a few applications of complexity and modelling. If you would like to join us to contribute on any of these problems, you are most welcome. We're sure you would find the journey at least slightly enlightening. If you have a problem that you would like us to work on, please contact us below.

                yourName has been the head of Data Science at Company1 and Company2. At Company1, he built a data science division from scratch which worked on Data Science as a Service - the Company1 data science team acted as the remote data science team for our clients. This meant building tools to solve common problems between companies and building a team to deal with bespoke problems and on demand requests for client companies. At Company2 he was the head of data science and helped in their Series-B fund-raise round.

                Prior to that he was a trader on Wall Street trading currency options. During his time at Company3 he helped setup an automated option price trading/monitoring system. On the research side, he worked on single currency fx pricing and eurchf floor failure models. At Company4 he worked on Equity Exotic Options with a specific focus on RFP pricing and generating client ideas. At Company5, he risk managed an exotics trading book. He distinctly remembers being non-plussed at the fuss over the Company5 collapse, having predicted it a year before (Ref: University2 placement talk - 2007). :rocket:'''

        # ---------------------------------
        [about_us.detail.bottom_left]
            title = "Interests"

            # Choose fa (font-awesome) icons below
            [[about_us.detail.bottom_left.list]]
                title = "Artificial Intelligence"
                subtitle = ""
                icon = "fa-rocket"
            [[about_us.detail.bottom_left.list]]
                title = "Networks"
                subtitle = ""
                icon = "fa-rocket"
            [[about_us.detail.bottom_left.list]]
                title = "Topology"
                subtitle = ""
                icon = "fa-rocket"
            [[about_us.detail.bottom_left.list]]
                title = "Language"
                subtitle = ""
                icon = "fa-rocket"
            [[about_us.detail.bottom_left.list]]
                title = "Modelling"
                subtitle = ""
                icon = "fa-rocket"

        # ---------------------------------
        [about_us.detail.bottom_right]
            title = "Education"
        # ---------------------------------
            [[about_us.detail.bottom_right.list]]
                title = "Master of Business Administration, 2012"
                subtitle = "University1"
                icon = "fa-graduation-cap"

            [[about_us.detail.bottom_right.list]]
                title = "Bachelor of Technology, 2007"
                subtitle = "University2"
                icon = "fa-graduation-cap"

# ----------------------------------
# Section 4: Logo Wall section
# ----------------------------------
# ----------------------------------
# 1. You can list all client logos in this section
# 2. This section uses CSS Grid to place the logos, so spacing between logos is dynamic
# 3. Change the images and links below to use your own
# 4. The layout is rendered by logo_wall.html in homepage-sections directory
# ----------------------------------
[logo_wall]
    active = true

    # Count the number of logos you want on a row. Choose from 1,2,3,4,6, 12
    headline_layout = "headline_elements"
    [logo_wall.headline]
        title = "Our Clients"
        subtitle = "Serving You Always"

    # List all the logos in the logo wall below.
    # Ensure height to width ratios of the images are all the same.
    [[logo_wall.logos]]
        source = "https://upload.wikimedia.org/wikipedia/commons/3/37/Palantir_company_logo.png"
        link = "//www.palantir.com/"
        name = "Palantir"

    [[logo_wall.logos]]
        source = "https://media.licdn.com/dms/image/C510BAQHxVXskfQIR-w/company-logo_200_200/0?e=2131920000&v=beta&t=I-Eibuu3JRlpqc2wCpmw--1hp-OAw64YnK8lhO-g-iA"
        link = "//www.sigmoid.com"
        name = "Sigmoid"

    [[logo_wall.logos]]
        source = "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Flipkart_logo.svg/250px-Flipkart_logo.svg.png"
        link = "//www.flipkart.com/"
        name = "Flipkart"

    [[logo_wall.logos]]
        source = "http://www.nanobi.in/wp-content/uploads/2017/09/nb-logo.png"
        link = "//www.hotstar.com"
        name = "Hotstar"

# ----------------------------------
# Section 5: Featured Posts section
# ----------------------------------
# ----------------------------------
# 1. The featured Posts section is a collection of featured content pieces from different
# #  content types
# 2. For example, it may contain featured featured posts, books, events and thoughts
# 3. The sections are rendered in the order listed in order below.
# 4. The card layouts are listed in the listLayouts folder
# 5. The card layouts may require fields which are specific to the different sections
# 6. Which cards are displayed:
# i      The content pieces with `featured = true` setting are ordered by the 'sort_field'
# ii     in either ascending (asc) or descending order (desc) based on 'sort_order'
# iii    Then the first 'num_featured' number of cards are displayed.
# 7. The rendering is done by show_featured.html in the homepage-sections folder
# 8. The default list layouts for each type of content are at sectionwise_list_layouts.toml
# #  in the data/layouts folder
# ----------------------------------
[featured_pages]
    active = true

[[featured_pages.sections]]
    name = "people"
    title = "Our Strength"
    subtitle = "Our people are our strength"
    num_featured = 4
    sort_field = "title"
    sort_order = "asc"
    card_layout = "people_cards_list_style1"

[[featured_pages.sections]]
    name = "books"
    title = "Books"
    subtitle = "The latest and greatest books"
    num_featured = 5
    sort_field = "title"
    sort_order = "asc"
    card_layout = "long_list_with_image"




# ----------------------------------
# Section 6: Call to Action section
# ----------------------------------
# ----------------------------------
# 1. This section includes two call to action buttons
# 2. This uses render layouts function
# 3. Change the images and links below to use your own
# ----------------------------------
[cta]
    active = true
    # Check the home_cta toml file in data/layouts/ to see what is rendered.
    # If you want you can create a new layout toml file in the same location and change the
    # layout field below to render that layout
    # The render function is in layouts/functions/render_content_layout_fields.html and is
    # called from cta.html in layouts/homepage-sections
    layout = "home_cta"
    # Below fields are self explanatory once you see the call to action section on front page
    [cta.content]
    top_right_image = "img/dog_transparency2.jpg"
    bottom_left_image = "img/dog_transparency1.jpg"
    heading = "You can call someone to action"
    subheading = "And hope that they come and do the action. This is called call to action"
    cta_button1_text = "Start a new blog with Raz"
    cta_button2_text = "Visit our blog"
    cta_button1_link = "//www.github.com/your_username/yourWebsite"
    cta_button2_link = "//www.thinkingtree.me"



# ----------------------------------
# Section 7: Reviews section
# ----------------------------------
# ----------------------------------
# 1. Reviews are a necessary part of many types of sites
# 2. The reviews below use the masonry layout popularized by pinterest
# 3. Instead of javascript rendering we have done the below through CSS Grid
# 4. The rendering is done by reviews.html in homepage-sections
# 5. You can change, add or remove any reviews below. Keep atleast one review
# ----------------------------------
[reviews]
    active = true
    # Check the toml file in data/layouts/ to see what is rendered.
    headline_layout = "headline_elements"
    [reviews.headline]
        title = "Reviews"
        subtitle = "We retain relevance to the latest and the greatest from across the galaxy"

    # Below are for illustration. Add your reviews below
    [[reviews.review]]
    reviewer_name = "Mighty Thor"
    reviewer_location = "Asgard"
    reviewer_review = "My strength through all these years of thick and thin has been sustained by this beautiful blog"
    [[reviews.review]]
    reviewer_name = "Cabaret Dancer"
    reviewer_location = "Moulin Rouge, Paris"
    reviewer_review = "I could use a lot of practice in my line of work. But no need for any practice as long as I have this blog. It teaches me everything!"


# ----------------------------------
# Section 8: Contact Us section
# ----------------------------------
# ----------------------------------
# 1. The main reason for this section is the map. 
# 2. This is rendered by the contact.html in the homepage section
# 3. Additional to the map, you may add any number of contact fields
# 4. The default location for the map may be set in config.toml
# 5. The maps api needs you to register, details given in config.toml
# ----------------------------------
[contact]
    active = true
    headline_layout = "headline_elements"
    [contact.headline]
        title = "Contact Us"
        subtitle = "Always here to help"

    [[contact.fields]]
        name = "contact_email"
        description = "email"
        font_awesome_icon = "fa-envelope"
        link = "mailto:yourName@gmail.com"
        text = "yourName@gmail.com"
        style = "color:#333; margin-bottom: 15px; display:block;"

    [[contact.fields]]
        name = "contact_phone"
        description = "phone"
        font_awesome_icon = "fa-phone"
        link = "tel:987-654-3210"
        text = "987-654-3210"
        style = "color:#333; margin-bottom: 30px; display:block;"

```

### contact.md in the content folder
A contact form is a good way for users to contact you and introduces some interactivity to the site. Even if the site is static, we use a third party application called [Formspree](https://formspree.io/) to enable you to setup a contact form.

Make sure **you change email and contact_secondary_email addresses below**

```toml
# (i) The form on this static site is enabled through formspree
#  1.   Setup: Set email ID and secondary_email below the first time you use the contact form
#       you will get a mail asking you to confirm email ID
#
#  2.   Pricing: Free for first 50 emails a month. At some point if this becomes a pain,
#       I'll implement the form layout with some other endpoint
#
#  3.   The layout used is contact.html in layouts/_default folder
#
# Since this template is static, the contact form uses www.formspree.io as a
# middleware proxy. The form makes a POST request to their servers to send the actual email
#
# (ii) Next Steps
#
#  1.   Set your email address under 'email' below
#  2.   You can change the thanks and error messages if you wish
#  2.   Upload the generated site to your server
#  3.   Send a dummy email yourself to confirm your account
#  4.   Click the confirm link in the email from www.formspree.io
#  5.   You're done. Happy mailing!

layout = "contact"
title = "CONTACT US"
subtitle = "_Please leave your message below and we'll get back as soon as we can_"
title_color = "azure"
subtitle_color = "#aaa"
email = "yourName@gmail.com"
contact_secondary_email = ["anotherName@gmail.com","anotherName@gmail.com"]

buttontext = "Send message"
onSubmit_link = "/contact_success"



# Success and error message overwrite for async contact form
thanks = "Thank you for awesomely contacting us."
error = "Message could not be sent. Please contact us at mail@example.com instead."

[captcha]
buttontext = "Send Message"

# 'warning' defines error messages for invalid inputs
[form.name]
text = "Your Name *"
warning = "Please enter your name."

[form.email]
text = "Your Email *"
warning = "Please enter your email address."

[form.phone]
text = "Your Phone *"
warning = "Please enter your phone number."

[form.message]
text = "Your Message *"
warning = "Please enter a message."

```

### contact_success.md in the content folder

Change these as per your preference. The fields are pretty self explanatory. The layout used is contact_success.html in the layouts/_default folder

```toml
# This is a template for a simple message to display to users who have contacted you
title = "Contact Success"
message = "You have contacted us successfully. Click [here](/) to return to homepage"
title_color = "azure"
message_color = "#aaa"
layout = "contact_success"
background_color = "#222"
```

### popup_success.md in the content folder

Change these as per your preference. The fields are pretty self explanatory. The layout used is popup_success.html in the layouts/_default folder

```toml
title = "You have successfully subscribed<br>"
message = "Thanks for subscribing to our website. Rest assured we don't spam! <br>Click [here](/) to return to homepage"
title_color = "azure"
message_color = "#aaa"
layout = "popup_success"
background_color = "#222"
```

### privacy.md in the content folder

- I have created a generic privacy policy.
- In this file, replace yourCompanyName by your real company name
- This is rendered by terms_conditions.html layout in the layouts/_default folder
- You may want to change this as per your legal jurisdiction/needs of your website.
- You can optionally add title, date and author fields at the top.

### termsservice.md in the content folder

- I have created a generic terms and conditions template which may be useful.
- In this file, replace yourCompanyName by your real company name
- Also replace http://www.yourdomain.com with your real domain name
- This is rendered by terms_conditions.html layout in the layouts/_default folder
- **In case your legal jurisdiction is different, please use a template that's relevant to your state**
- All the content is directly taken from the content markdown itself
- You can optionally add title, date and author fields at the top.

## Step 5: Check and Preview the site again

1. At this stage, you should ensure you modify the following words to your own
    - yourdomain
    - Your Website Name
    - your_username
    - yourWebsite
    - yourCompanyName
    - yourRole
    - yourName
    - anotherName
    - disqusShortname
    - Company1, Company2, Company3, Company4, Company5
    - University1, University2
    - logo.jpg
    - UA-123456789-1 (google analytics)
    - map_api_key, latitude, longitude (google maps)
    - favicon.jpg

    Note that the context of usage at each occurance of above words may be different. For example yourName may occur for your email id as *yourName@gmail.com* or even as an author of website. So you may not want a simple replace all function without going through context of usage.

2. On a good text editor this can be done by pressing ctrl+shift+F or ctrl+shift+R, where the replace all occurances in project is available. Note that for this you may have to choose your project folder (to enable search in this folder). Depending on your editor you may have to look up google for instructions for Replace All

3. Good to preview the site again now.
4. Type into the terminal that you used for downloading the files
    ```bash
    hugo server -D -p 1313
    ```
5. Open `http://localhost:1313` on your browser. Even after checking that everything works, keep this tab open to preview as you change the site.

6. You may have made a lot of changes at this stage, good to get it all into the repository
    ```bash
    #1. Do the regular git updates through script (you may have to use backslash on windows)
    ./commit.sh

    #2. Ensure deploy function is working
    ./deploy.sh
    ```
7. You can (and should) run the commit script above at even more often intervals to ensure you have all the intermediary points saved. You can preview all changes on github

## Step 6: Plan the website contents

At this stage, we are ready to do another [check and preview](#step-4-check-and-preview-the-site-again)

## Step 7: Add or modify Content

Now that we have finished changing the configuration, you can start adding content. The idea for the static site was that you should be able to express any kind of output that you have in real life into a page on the internet. With this in mind, we have created a few kinds of pages.

### Types of Pages

We have 15 different types of pages. These are listed below in approximately alphabetical order:

1. Audios: This is for any recordings you might have taken including songs or podcasts
2. Books: This is meant for any books you have written
3. Code-Snippet: This is meant for a mix of content and code.
4. Courses: This is meant to showcase any courses that one has created
5. Events: This page type can be used for showcasing events like concerts
6. Notes: This is meant for a short content piece. Comes without a banner image
7. People: This is for writing about people, possibly in your team or company
8. Posts: This is meant for long generic content pieces. Comes with a banner image on top
9. Presentations: This is meant to showcase presentation pdfs that you may have made
10. Publications: You can link any publications (journals or otherwise) that you have made here
11. Reviews: You can review any kinds of websites, products, movies etc here.
12. Thoughts: This is meant for noting down any (profound) thoughts you may have
13. Workshops: You can showcase any workshops (short courses) in these pages.
14. Default: This is a default setting that is there.

TODO: Add Docs

### Steps to create a webpage

Each of these page types (except default) goes into its own directory in the content folder. It's easy enough to create any one of these pages. For example **if you want to create a presentation page called 'Hyderabad Blues'**:

1. Open a terminal
    - On windows, you can do this by typing 'terminal' or 'bash' after clicking the windows button on the bottom left of your screen
2. Change directory (cd) into the directory with the website files
    - For example if your website directory is 'C:\users\yourname\yourwebsite', then type `cd c:\users\yourname\yourwebsite`
3. Type `hugo new presentations/hyderabadblues.md`
    - If this works, you should get a success message
4. Open the website page with your favorite text editor
    - For example, if your website directory is 'C:\users\yourname\yourwebsite' then the website content page would be at `C:\users\yourname\yourwebsite\content\presentations\hyderabadblues.md`

### Common Page Parameters

Our templates contain both the contents as well as configurations for the pages we are creating. Some of the configurations are common across the page types and some are specific to the type of page. Let us look at the common configuration types

1. title: This is the most common configuration for the heading of the page
2. author: This is the creator of the page. Also goes as artist or faculty in some page types
3. date: This is the date/time of the page creation
    - It is auto generated during page creation.
    - To change it, you would want to keep it in YYYY-MM-DDThh:mm:ssTZ format. In other words, for 29th Sep 2018 01:46 pm 23 seconds in India which is in Time Zone (+05:30 hours), the date field would be 2018-09-29T13:46:23+05:30
4. caption_image: This is the image used in any list layout showcasing that page
5. summary_content: This is the short description used in describing the page summary in any list layouts containing that page
6. layout: This is where you can choose between the single page layout used to render the page. As of now each type of page comes with a standard type of layout
    - *Note that if no layout is specified, in any page, we revert to the default layout*
7. featured: This is either true or false based on whether you want it to appear on the front page list sections
    - This is not a guarantee of the page featuring on the front page as the number_featured may be lower than number available to feature.
8. enable_comments: If this is true, disqus comments is turned on for that page. There is also a default for every type of page if this field is not available
9. tags: This is used to classify the page so that it may later be retrieved based on those tags.
    - For example, a page that is tagged as "['cute dog','cool stuff']" will appear in the list pages http://www.your_domain.com/tags/cute-dog/ and http://www.your_domain.com/tags/cool-stuff/
    - Please don't use special characters in tags to remove confusion
10. categories: We are using an additional way of classification based on categories. Typically a page may have many tags, but just one category
    - For example, a page that is categorized as ['Music'] would appear in the list page http://www.your_domain.com/categories/music/

Those are the common settings used across most pages. Additionally, each page may have its own settings. Let's look at these below in order of alphabetical page types

### Audio Page Parameters

Below are the additional settings to be specified for Audio pages

```toml
# 1. The main artist is mentioned under the field "artist". This plays the same role as artist on other pages
artist = "Madhav theBard"

# 2. Additional to tags and categories, we also have two additional categorizations for audio pages. These are albums and artists. In artists, we list all additional artists to the main one involved
albums = ["Kannada","Language"]
artists = ["yourName","Madhav theBard"]

# 3. We can add multiple audios to a single page (as in an album). We need to mention the name of the piece, the filename (placed in audios folder), the artist and a cover image

[[audios]]
name = "Kannadify Introduction"
filename = "KL1.wav" # Place the file below in the "audios" folder inside static folder
artist = "Madhav theBard"
cover = "k.jpg" # Place the file below in the "audios" folder inside img folder in static folder

[[audios]]
name = "Moving On"
filename = "KL2.wav" # Place the file below in the "audios" folder inside static folder
artist = "Madhav theBard"
cover = "k.jpg" # Place the file below in the "audios" folder inside img folder in static folder

```

### Books Page Parameters

Some additional settings need to be specified for books pages

```toml
# 1. tagline is some small snippet about the book that will come just below the title
tagline = "The last book you'll ever need"

# 2. the abstract should be a brief description of the book.
abstract = "A small snippet about the book is good enough"

# 3. Book Details: The template mentions optional details that you can mention that are converted to a tableformat to display

price = 100
size = "17.8 x 2.5 x 22.9 cm"
num_pages = 280
isbn = "978-0262035613"
reading_level = "18+ years"
recommended_audience = "MBAs,Management Professionals"
format = "Hardcover"
publisher = "MIT Press"
date_of_publication = "3 January 2017"
language = "English"

# 4. Every book needs a good cover. Similarly every book page needs good images. Please place these in the static/img folder and list the filenames below under "images" field
images = ["bubbles.jpg", "dog_popup_thanks3.jpg","dog_transparency1.jpg","orange-fractal.jpg","bubbles.jpg"]

```

### Code Snippets Page Parameters

Code snippets need a small number of additional settings

```toml

# 1. Do you use Math in the Code Page. If so, use math=true below. The math display is based on [mathjax](https://www.mathjax.org/)
math = false

# 2. Do you use code in this page? If so mention highlight=true below. The style "ocean" is a dark themed style. You can choose themes and languages based on this site https://highlightjs.org/static/demo/

highlight = false
highlight_languages = ["bash","html"]
highlight_style = "railscasts"

```

### Courses Page Parameters

Courses, similar to books, have a number of additional optional settings that may be input

```toml
# 1. The "faculty" for the course is a similar option to author name in the regular pages
faculty = "yourName and Goody Two Shoes"

# 2. A short intro may be provided which visitors may see for quickly understanding what the course is about. It should be similar to abstract for a book
short_intro = "An in-depth look at management with a specific view on Marketing"

# 3. There are several optional course-specific details that you can provide. These are mentioned in a table format in the webpage

topic = "Management"
who_should_attend = "Management Professionals and Final Year Students"
pre_requisites = "Knowledge in Marketing"
course_date = "Anytime"
duration = "4 weeks"
delivery = "In Person/Online"
location = "Bangalore Gymkhana/Online"
fees = "Rs. 1000"
certification = "Rs. 1000"


# 4. A mixture of poster images and youtube videos may be used in the featured images section. Here the first poster is used as the first image that appears and the visitor can choose to scroll, zoom, or click on thumbnails to view the rest.

# Media will be from below list
# Featured image The featured image will be the first from the following list

posters = ["orange-fractal.jpg","dog_popup_thanks3.jpg","dog_transparency1.jpg", ]

# Currently only youtube is supported. Please enter only the id. For example if the video url is "https://www.youtube.com/watch?v=lk60ObnbIOk", please enter "lk60ObnbIOk"

youtube_ids = ["lk60ObnbIOk","9hHq2lYof4U"]

# 5. Optionally, brochures and other pdf files may be placed in the files section below to enable users to open them within the page (or download)

# Place the pdfs below in the "files" folder inside static folder:
files = [
    { name = "Brochure for 5S Course", pdf_file = "Brochure_for_5S_books.pdf" },
    { name = "Business and Ethics", pdf_file = "B_E_Brochure.pdf" },
]


# 6. Similar to tags and categories, an additional taxonomy based on subjects is introduced here
subjects = ["management"]

```

### Events Page Parameters

The events pages contain the regular settings in a few different names and a few additional settings

```toml
# 1. A short description of the event that goes below the title
tagline = "The beats are coming to town"

# 2. who, where and when describe the event to have an artist, a location and a time. This is used in list pages as well as the top of the events single page layout
who = "Kailash Kher"
where = "Asilomar, Aranyaka, India"
when = "17th Dec 2018"

# 3. The banner_image is an image that is used as a banner for the event page itself. Choose this carefully as it occupies a good amount of space on the webpage
banner_image = "events/bw_crowd.jpg"

# 4. Upload posters and youtube videos related to the event below. The first will appear featured and the visitor can scroll, zoom or click to view the images
# Media will be from below list
# Featured image The featured image will be the first from the following list
posters = ["events/clean_bandit.jpg","orange-fractal.jpg","dog_popup_thanks3.jpg","dog_transparency1.jpg", ]
# Currently only youtube is supported. Please enter only the id. For example if the video url is "https://www.youtube.com/watch?v=lk60ObnbIOk", please enter "lk60ObnbIOk"
youtube_ids = ["lk60ObnbIOk","9hHq2lYof4U"]

# 5. Apart from categories and tags, we provide an additional taxonomy for events called genres
genres = ["Rock","Paper","Scissors"]

```

### Notes Page Parameters

Notes pages are fairly straightforward. There are no additional settings apart from the common settings listed above

### People Page Parameters

The people pages have a large number of additional settings over and above the common settings. This is similar to the about section on the front page. These settings are listed below

```toml
# 1. We use the setting "name" instead of title used in other pages to describe who the page is about
name = "Wise man"

# 2. You can input the role the person plays
role = "yourRole, yourCompanyName"

# 3. The portrait image mentioned below can be similar to the caption image and be a generic squarish (width = height) photo of the person.
# Place portrait in img folder
portrait = "people/obama.jpg"


# 4. We categorize people with divisions and teams instead of tags and categories which are the general taxonomies. If you want to add any taxonomy below, make sure to also mention it in the config.toml page

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
divisions = ["Technology"]
teams = ["Leadership"]

# 5. We can mention multiple affiliations of the person along with a link like below
# ---------------------------------
[[affiliations]]
    name = "Company1, Company2"
    url = ""
[[affiliations]]
    name = "Company3, Company4, Company5"
    url = ""

# 6. We can also mention social media links of the person. The icons are chosen from here: https://fontawesome.com/v4.7.0/icons/

# ---------------------------------
# Choose fa (font-awesome) icons below
# ---------------------------------
[[social]]
    icon = "fa-envelope"
    icon_pack = "fa"
    link = "mailto:yourName@gmail.com"
[[social]]
    icon = "fa-linkedin"
    icon_pack = "fa"
    link = "//linkedin.com/in/yourName/"

# 7. You can list any interests for the person along with a title for the interests section
[interests]
title = "Interests"


[[interests.list]]
    title = "Artificial Intelligence"
    subtitle = ""
    icon = "fa-rocket"
[[interests.list]]
    title = "Networks"
    subtitle = ""
    icon = "fa-rocket"


# 8. Lastly you can list education of the person as required below
# ---------------------------------
[education]
    title = "Education"
# ---------------------------------
[[education.list]]
    title = "Master of Business Administration, 2012"
    subtitle = "University1"
    icon = "fa-graduation-cap"

[[education.list]]
    title = "Bachelor of Technology, 2007"
    subtitle = "University2"
    icon = "fa-graduation-cap"

```

### Posts Page Parameters

Posts Pages use only the common settings listed above

### Presentations Page Parameters

The presentations pages are mainly about the presentation pdf itself. They may optionally contain some writeup below the presentation.

```toml

# 1. The tagline goes below the title and is a brief description of the presentation
tagline = "An in-depth look at management with a specific view on Marketing"

# 2. The filename of the presentation should be entered below. The pdf should be saved in the "files" folder inside static folder:
pdf_file = "Brochure_for_5S_books.pdf"

# 3. An additional taxonomy of "topics" has been provided for these pages
topics = ["management"]


# 4. The content in the presentation pages is assumed to be not too long. It may be notes regarding the presentation. We can also list a writeup title below.

writeup_title = "Presentation Notes"

```

### Publications Page Parameters

The publications pages use a bunch of new parameters including a few categorizations.

```toml
# 1. We list the authors in these pages with links to their personal pages (which could be outside of the site itself)
authors =  [
                { name = "yourName", url = "/people/person1" },
                { name = "Ankit Mathgenius", url = "/people/person2" },
                { name = "Sailesh Tripper", url = "/people/person3" }
            ]

# 2. Brief comments regarding the paper (arxiv style!)
Comments = "Published in the foremost literary publication"


# 3. In case you are using any math or code, set the below accordingly. These should load the mathjax or highlightjs libraries as described in the "Code Snippets Pages" section
math = true
highlight = false
highlight_languages = []
highlight_style = "railscasts"

#4. We provide a few taxonomies to classify the paper. These are fairly self explanatory. If you want to add any new taxonomies, do so below and also add these to the config.toml page
publication_types = ["Journal article"]
subjects = ["programming"]
projects = ["programming"]



# 5. Multiple pdf files along with links can be placed below for the paper. These can be viewed or downloaded from the page
# Place the pdfs below in the "files" folder inside static folder:
files = [
    { name = "Brochure for 5S Course", pdf_file = "Brochure_for_5S_books.pdf" },
    { name = "Business and Ethics", pdf_file = "B_E_Brochure.pdf" },
]


# 6. We can link any external sources or paper links here
[[links]]
    icon = "fa-tag"
    name = "Arxiv Abstract"
    url = "https://arxiv.org/abs/1704.05729"
[[links]]
    icon = "fa-star"
    name = "Arxiv Paper"
    url = "https://arxiv.org/pdf/1704.05729.pdf"


```

### Reviews Page Parameters

The reviews pages mostly contain new configurations regarding the product or item being reviewed

```toml

# 1. Firstly enter some basic details about the item being reviewed including the name, the maker, and the item link

reviewed_item = "Opel Astra Car"
reviewed_item_maker = "General Motors"
reviewed_item_link = "https://en.wikipedia.org/wiki/Opel_Astra"

# 2. The taxonomies for reviewed items also includes reviewed_item_categories. This can be used to mention the item being reviewed like movies, or books or some such.
reviewed_item_categories = ["Products"]

# 3. The rating (number of stars) you give the item should be mentioned below. 0.5 being lowest and 5 being the highest number of stars
stars = 4.5

# 4. The title of the review is known here as headline
headline = "Heartbeat on wheels"

# 5. A good review may contain images also. The first of the following list will be featured and the rest can be clicked, zoomed, scrolled and shared
images = ["reviews/opel1.png","reviews/opel2.png"]

```

### Thoughts Page Parameters

These are the only pages where the configurations include styling elements. The thought  layout would contain some content placed on a background image

```toml

# 1. Please change the image used for the background_image. Images here are taken from Pixabay.
# -----------------------------------------
# Formatting
# -----------------------------------------
# 2. The header image would be used to place an image used before the content. A good example of usage is in your_domain.com/thoughts/thought2/ in the demo content. Typically outline images are used here
header_image = ""

# 3. The background image is used to create a background effect for your thought. The rest of the options you can leave as is. The rgba colors can be chosen from here: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool
background_image = "backgrounds/purples.jpg"
background_color = "rgba(255,255,255,0.05)"
foreground_color = "rgba(255,255,255,0.7)"

#4. Of the below properties, the only one that you may want to change is text_color. You can choose the color here: https://htmlcolorcodes.com/color-picker/
text_padding = "10% 5%"
text_color = "#164"
text_size = "1.35rem"

```

### Workshops Page Parameters

Workshops pages contain a good number of new configurations apart from the common ones.We may have come across some of these in different Page Types already

```toml
# 1. Equivalent to author in various other pages, we have presenters for the workshop pages
presenters = "yourName and Goody Two Shoes"

# 2. A short intro of the workshop may be given
short_intro = "Sustainable practices for creating a new you"

# 3. Workshop details are listed in a tabular format. While optional, they provide a template to the page maker as to what details may be included.

who_should_attend = "Humanity"
pre_requisites = "Being human"
workshop_date = "24th December 2016"
duration = "4 weeks"
delivery = "In Person/Online"
location = "Bangalore Gymkhana/Online"
fees = "Rs. 1000"
certification = "Rs. 1000"



# 4. Posters and youtube videos describing the workshop may be included. The first poster is used as a featured image with the rest as thumbnails below that one. Visitors may scroll, zoom into, or share the images

posters = ["orange-fractal.jpg","dog_popup_thanks3.jpg","dog_transparency1.jpg", ]
youtube_ids = ["lk60ObnbIOk","9hHq2lYof4U"]

# 5. Files describing the workshop may be used by providing the name and location below.
# Place the pdfs below in the "files" folder inside static folder:
files = [
    { name = "Brochure for 5S Course", pdf_file = "Brochure_for_5S_books.pdf" },
    { name = "Business and Ethics", pdf_file = "B_E_Brochure.pdf" },
]

# 6. An additional taxonomy called subjects is provided apart from tags and categories
subjects = ["People Management"]

```

### Check and Preview

At this stage, we are ready to do another [check and preview](#step-5-check-and-preview-the-site-again)

## Step 8: Move from template to deployment

Once your template is ready, all that needs to be done is to deploy it. For this the output files have to be generated. This is easy enough.

The steps in this, while simple need to be carefully done.

1. Open your terminal/bash and cd into the directory containing the website files.
2. type `./deploy.sh`
3. You should now open a browser and see the update times on your github repository at  `https://github.com/yourusername/yourblogname`
4. After every change you can also type `./commit.sh` to commit template changes to your templates github repository at `https://github.com/yourusername/yourblogname-template-files`

### Go buy the domain

1. Go to godaddy.com
2. Search for preferred domain name
3. Add to cart and buy. Just choose one domain for now, you can always add more later. Let's call this domain as "yourdomain.com". Of course note that ".com" could be any other suffix like ".org" or some such.
4. Go to https://account.godaddy.com/products/
5. You should be able to see your domain.
6. Typically you may see three buttons here next to your domain: Privacy DNS and Manage.
7. Click on the DNS button. It should open up another window with the domain you are managing. We will call this Your DNS page from now. Bookmark it if necessary or leave open.

#### Create a forward from yourdomain.com into the www.yourdomain.com

1. On Your DNS page, if you scroll fown, you should see a Forwarding section.
2. You are presently going to create a DNS forwarding from the yourdomain.com into the www.yourdomain.com
3. Click on the button next to domain. The options to be input are as follows:
    1. In the Forward to option, in the blank space next to http:// type "www.yourdomain.com". This means that it is going to forward from http://yourdomain.com to http://www.yourdomain.com
    2. In options use forward type: Permanent (301)
    3. In options use settings: Forward only
4. click on save
5. Leave this browser window open as we will have to come back here.

### Make your github pages viewable

1. Do a deploy before you start
    1. Open your terminal/bash and cd into the directory containing the website files.
    2. type `./deploy.sh` into the terminal
        - Note that on windows machines this may be `.\deplay.sh` or even just `deploy.sh`
    3. Open a browser and check update times on your github repository at  `https://github.com/yourusername/yourblogname`
2. Allow github pages
    1. Go to `https://github.com/yourusername/yourblogname`
    2. Click on the settings button towards the right side on the menu on top of the page
    3. Scroll down till you see the Github Pages section. Here you should see a dropdown for 'Source' - which should have a default setting 'None'. **Click this and choose 'master branch'**. Click Save
    4. **Add a Custom Domain:** Just below the place where you selected the source, there is a text field where you can add a custom domain. Choose `www.yourdomain.com`, where your-domain is the domain you purchased from godaddy
    5. Save your changes: A success message such as 'Custom domain is saved' and 'Your site is ready to be published at http://www.yourdomain.com/' should appear
    6. You can optionally choose 'enforce https'. Sometimes this option works only after some time of the above options being chosen.
    
3. On the DNS page that we saw in the last section, add a CNAME record
    1. Go to your DNS page (which should be at https://dcc.godaddy.com/manage/yourdomain.com/dns)
    2. You should see the list of records right at the top.
    3. Click on 'Add' just below this list
    4. In the options that open up:
        1. Choose Type: `CNAME`
        2. Choose Host: `www` (if you want to serve website on www.yourdomain.com)
        3. Choose Points To: `yourusername.github.io`. Of course replacing yourusername with your own github id
        4. Choose TTL: 1/2 hour or some such. Doesn't make a difference
4. Use your web browser to go to the site http://www.yourdomain.com and you should see the webpage ready

### Making changes to website from multiple locations

If you are making changes to your website from multiple locations, it is important to have them all with the same working files

1. First time setup on a new computer
    1. Do all setup like downloading [git bash](https://git-scm.com/downloads) and a good text editor like [Atom](https://atom.io/) or [VS Code](https://code.visualstudio.com/)
    2. Create a directory where you want to host your files, say `c:\users\username\website\`
    3. Open your git bash and cd to this new directory
    4. type `git clone  --recurse-submodules -j8 https://github.com/your_username/yourWebsite.git .`
    5. This should download all your files from the remote directory *including the submodule*
    6. To ensure that everything is in order, you can further type `./pull.sh` and all your files should be synced
2. Continue to make changes are required in your favorite text editor
3. When you are done
    1. Save the files you have created or worked on
    2. Open the bash/terminal and cd into your website directory
    3. type `./commit.sh`
    4. If you further want to your changes to pass to the live website as well, type `./deploy.sh`
    5. You will find that your website is updated with latest changes
    6. Note on partial changes: If you have only made partial changes to some site page want to continue working on it without updating the live website then skip `./deploy.sh`
4. When you want to get changes made on any other computer (and if initial setup has already been done):
    1. Open the bash/terminal and cd into your website directory
    2. type `./pull.sh`

## Step 9: (Optional) Learn to create new templates

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

With these points in mind, and having watched the videos mentioned in the beginning of the file, you should be ready to start creating your own templates. Do keep in mind that this is not necessary. If you decide to do so - goodluck, keep em coming!

----------------

# Alternative to Github Pages: Google Cloud Storage

Github Pages is easy to use and free. The only problem could be that it is slow in some countries (especially for large sites) compared to Google Cloud, Microsoft Azure or AWS. For some reason, if github pages doesn't work for you, or is too slow, you can setup our online system on Google Cloud Storage. We outline the steps below

### Verify yourself on google and get your cloud storage setup

[Google Reference: Domain Name Verification](https://cloud.google.com/storage/docs/domain-name-verification)

1. You can verify your domain here: https://www.google.com/webmasters/tools/
2. If you are on the new console, you should see a list of websites you own on the top left. If you click on this button, then at the bottom you can see a link to add new property.
    1. If you are on the old console, you should see a bright red button to "Add a Property" on the top right of your screen.
3. Click on add property (new search console is worse than old!)
    1. Type the name like so : http://mywebsite.com
4. There are many methods of verification. The most convenient at this stage is to use domain name provider (the last option)
    1. This will lead you back to the old console.
    2. It should auto detect that you are on godaddy.
    3. Click on verify on the bright red button
    4. It should open a window where it asks you to login to godaddy. It does its own thing and takes 60 seconds.
5. If it works, great, you have been verified by google as owner of your website

if it does not, then you would have to add TXT record. Let's look at how to do that.

#### Alternative Method

1. If DNS verification did not go as planned. On the page with the big red verify button, you should find a link to "Add a TXT record"
2. When you click on this, it should take you to a page with lots of instructions.
3. The most important part of this page is where it specifies the TXT record Value (Point number 6 as of this writing). Copy this value. Keep this page open (let's call it google TXT verification page).
4. Go back to your Godaddy DNS Page.
5. At the top you should see a records section. At the bottom of this section is a button for add.
6. Select type TXT.
7. The options are as follows.
    1. Choose "Type" as TXT
    2. Choose "Host" as "@"
    3. Choose "Value" as the copied value from the google verification page
    4. Choose "TTL" as "1-Hour" (though it doesn't really matter)
8. Click on save
9. See that this TXT record is in the list of records on Your DNS page. Sometimes you see an error, even if you do, if you see the TXT record there, it's good enough.
10. Go back to the google TXT verification page and click on verify. You should be verified and get a success message.

## Get yourself on the google cloud console

1. Go to [Cloud Console Home Page](https://console.cloud.google.com) and login.
2. If this is the first time you are logging in, you should see some questions regarding your country, email preferences and agreement to their terms and conditions.
3. Just choose the usual stuff here and agree to the conditions and click ok
4. At the outset you should see the main console page, which has a number of products.  
    - Let's call this the [Cloud Console Home Page](https://console.cloud.google.com).
5. At the center of the screen a list of their main products should include "Cloud Storage".
6. At the top of the screen you should see a small message which basically says you get free cloud credits, but is actually asking you to setup billing. This is required for the setup

### Setting up billing

1. When you click on the button on the top of the Cloud Console Home Page passing you free credits you will be taken to a page to setup your billing. It would ask you again to agree to Terms and Conditions. Agree to all this.
2. You will be offered a free trial for $300 which lasts only for 12 months. Much more likely that you would use only $5 of this, but hey, whats free is free. Complete the payment.
3. This should setup your billing (not to worry you won't be charged for the next year through this method).
    1. Sometimes if you don't complete payment, you can complete it later. The billing is still setup but is marked incomplete. You may keep receiving emails to complete billing setup and your console in such cases would remain active for a couple of days or weeks before they close it. This method is not recommended.
4. After you complete billing setup you should go back to [Cloud Console Home Page](https://console.cloud.google.com).

#### Alternative Method for setting up billing

1. If you didn't see the button, go to [Cloud Console Billing](https://console.cloud.google.com/billing)
2. You will be able to see two sections: My Billing Accounts and My Projects.
3. Under My Billing Accounts, you will be able to see a button called "create account". Click on this
4. It will ask you for a name and currency
5. Here again you can fill your personal details and also add a payment method.
6. The end result of this should be the same as the last method, you will land up back at the [Cloud Console Home Page](https://console.cloud.google.com)

### Setup Cloud Storage
[Google Reference: Hosting Static Website](https://cloud.google.com/storage/docs/hosting-static-website)

1. On the home page at the center you would see Cloud Storage in their list of main products. If you dont see this here, If you click the menu on the top left, there is a list of products, which should include "Cloud Storage". Click on this.
2. In the Cloud storage page, you should see browser, transfer, transfer appliance and settings. Only browser is relevant to us.
    1. Lets call this the [Cloud Storage Browser Page](https://console.cloud.google.com/storage/browser)
3. If you landed on the browser page and do not have any storage buckets, you should see a large button asking you to create bucket. Other users would see an option to create bucket on the top of their screen above existing buckets.
4. Click on create bucket. If this is the first use, you may be asked for some project name and organization name. This is to enable good organization of your assets. You can choose any relevant names for project and organization. You can create organization later if necessary.
    1. Older users would straight away go to the next page
5. Choose name. Be careful here. You must choose exactly "www.yourdomain.com"
6. In Default Storage Class choose Regional
7. In location, choose the cheapest or the closest option to you depending on your priorities.
    1. If you open out the advanced settings, you should see Labels and encryption, neither of these need to be touched.
8. Click on create.
9. You would be back on the Cloud Storage Browser Page. You should be able to see your bucket by the name of "www.yourdomain.com"
10. You now have your very own bucket. Now it is empty, we will fill it with your website shortly. At this point we will go back to godaddy to create a record to live update the website when the bucket is changed.

## Create CNAME record on godaddy
1. Go back to Your DNS Page on godaddy.
2. You should see the records section on top.
3. If you see existing unnecessary CNAME records, they ought to be removed. This can be done by clicking the pencil next to the record on the right (edit) and then the trash button on the right.
4. Click on Add record in the records section.
5. Choose type CNAME
6. The options are as follows:
    1. "Host" is "www"
    2. "Points to" is "c.storage.googleapis.com." (note the dot at the end)
    3. "TTL" can be 1 Hour or 1/2 Hour.
7. Your google storage bucket should now be linked to godaddy and your website will update live.

## Create public permissions for your storage bucket
1. Go back to Cloud Storage Browser page
2. You should see the bucket name as "www.yourdomain.com" along with location, public access level, lifecycle, labels and requester pays. At this point we are interested in making the bucket public.
3. At the right end of the row with the bucket you should be able to see 3 dots. Click this for settings. You will see (a) Edit bucket permissions (b) Edit labels (c) Edit website configuration and (d) edit default storage class.
4. Of these the most important to us are (a) Edit bucket permissions and (c) edit website configuration
5. Click on edit bucket permissions. You will see an option to add members. Use the following options:
    1. Add the user "allUsers".
    2. It will ask you to select a role. In the dropdown, you should see a menu option called Storage. Under this choose Storage Object Viewer. This means that the all public can see your storage objects, ie your website. Now your google cloud storage is ready to host a website
    3. Click on save
    4. [Reference for roles and Account Management on Google Console](https://cloud.google.com/storage/docs/access-control/iam-roles)
6. It may show you a warning "This bucket is public and can be accessed by anyone on the Internet.". This is ok and is good because you want your website on the internet!
7. Click the three dots next to the row displaying yout bucket in the Cloud Storage Browser Page. Click on "Edit website configuration"
8. You will be asked to choose an index page and a 404 page.
    1. Choose index page as "index.html"
    2. Choose 404 page "404.html". The 404 page is where all hits to pages which don't exist in your site are redirected to.
9. The storage bucket is good to go.
10. Now all that is remaining is for you to fill the storage bucket.

--------------

The motivation behind having your own website is for you to have your own space on the internet. You shouldn't have to put your thoughts in facebook where they get lost or your articles in hosted blogs like wordpress.com. Wordpress self hosted sites come with the promise of ease of use, but in terms of usage, it is often static content which gets hosted dynamically which is inefficient, not to mention expensive.

One of the main reasons people choose to host their thoughts and ideas in places like facebook is that it is hard and perhaps costly to create websites. Neither of which should be the case. One should only use networks to spread ideas, not to host them.

This article is therefore aimed at people who don't have their own websites currently and not at existing developers (and so it aims to be free of technical jargon as much as possible). If you find improvements to code or to docs, do send in.
