# How to create an updateable static website from scratch at 2 cents a month (plus cost of domain) using godaddy, Google Cloud and Hugo
We are today going to look at how to setup a website from scratch. The expectation is that while the initial setup is going to take something like 3-4 hours, any changes to the website should be a matter of seconds or minutes.

----------------
Section 1: Getting Started
----------------

## Get the right software
The following are going to be needed for the setup
1. Git Bash
2. Google Cloud SDK
3. Hugo
4. Github Account
5. Text Editor

### Step 1: Getting git bash
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

### Step 2: Getting Google Cloud SDK
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


### Step 3: Getting Hugo
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


### Step 4: Getting a version control system OR login to github
As described [here](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control), a version control system (or VCS) is a system that records changes to a file or set of files over time so that you can recall specific versions later. This basically ensures that you don't lose files or even content of files. It is a good to have when creating a website, especially one that you expect to update frequently. It is a must have if you intend to update your static site from multiple computers.
1. Go to [github.com](https://github.com/). Unless you are already signed in, it will ask you to sign up. github is super user friendly so easy enough.
    1. Pick a username, email and password. Needless to say, note these down
    2. It will ask you in the next step to verify your account. Click ok
    3. In the next step, choose the free plan.
    4. In the section 'tailor your experience' choose appropriate answers
2. Github is based on repositories. Think of these as version controlled directories you have on the cloud. To start off, we will be creating a repository.
    1. If you haven't yet verified your email id, now would be a good time to do so. Once you get click verify on the email, head back to [your main github page](https://github.com/dashboard)
3. After the previous step, you will be taken to [your main github page](https://github.com/dashboard). If you are new to github, you will see a big green button on the left saying 'new repository'. If you don't see this, you can click the '+' button on the top right menu and click on 'new repository'
    1. Choose a repository name. This doesn't have to be unique across github, just unique to your username. Therefore choose something descriptive. Simple ones like `yourblogname` should be good enough.
    2. Choose public, it should be ok as your site is static and everyone can view all files anyway.
    3. Uncheck the box for "Initialize repository with a README"
    4. Add .gitignore should be None for now
    5. Add a license should be None for now. You can add these later if you feel like
4. You will be taken to a page that looks like `https://github.com/yourusername/yourblogname`. Bookmark this page
5. Note down the link to the git repository which should look like: `https://github.com/yourusername/yourblogname.git`

### Step 5: Get a good text editor
- I recommend Atom as
    1. it's good for '.md' files that we'll be using,
    2. It has a good color scheme and highlighting in case you like a dark themed editor
    3. It is made by github, is open source and is well maintained.
    4. It is extendable through plugins.
- I also like VS Code and notepad++.
    - NP++ is lightest and comes in light theme without code highlighting.
    - VS Code is super good and it would be on top of the list if it weren't for Microsoft bad rap of the 2000s.
    - If you want to have a full featured IDE, you can download Webstorm from intellij. This is good if you have large projects.
- You can any of these of your choice from here: [Atom](https://atom.io/), [VSCode](https://code.visualstudio.com/), [Notepad++](https://notepad-plus-plus.org/download) and [Webstorm](https://www.jetbrains.com/webstorm/)


----------------
Section 2: Creating your Website Content
----------------
This is probably the most involved part of creating your website. What do you write, what images to use become creative questions that take time for all of us. While the site building itself takes time, you can start with something prebuilt, check that it works and when you do get time, modify it into something you want or need.

Broadly the following steps are involved in creating the website

1. Understand Hugo
2. Download the template files.
3. Preview the site
4. Modify basic template files.
5. Modify the content and preview
6. Learn to create new templates if required
7. Move from template to deployment

### Step 1: Understanding Hugo

This document is aimed at someone who has not built a website before, so if this is too simple, then bear with me, or skim through this section. This section will not require you to do anything, but just read.

These [set of videos](https://www.youtube.com/watch?v=qtIqKaDlqXo&list=PLLAZ4kZ9dFpOnyRlyS-liKL5ReHDcj4G3) on Hugo are an excellent resource to start your understanding of Hugo. I found it took me a few hours to go through, but it saved me many more hours later. Do this when you get the time. After this attempt to go through the [Hugo docs](https://gohugo.io/getting-started/). This is a good reference, but i didn't find it to be a good read through. Both of these are required for templating, but hopefully we can make it through to creating a website without modifying the templates without use of these.

We will attempt an understanding of what is Hugo through a few sub-sections. 
- What goes into building a website
- How does a website work
- What is a static website and when it is ok to build your website statically
- What is a static website generator
- What are the parts of a typical website
- What is Hugo

#### What goes into building a website
There are three basic parts to every website as you see it on your browser. The content, the styling and the logic. These are described by three parts, *html*, *css* and *javascript*.

1. HTML: 
    - This forms the main content of the website. 
    - The actual content of the website is surrounded by a start tag and an end tag that describe the content. 
    - While there are many types of [element tags](https://www.w3schools.com/html/html_elements.asp), the main ones that we will see over and over are [div](https://www.w3schools.com/tags/tag_div.asp), [span](https://www.w3schools.com/tags/tag_span.asp), [a](https://www.w3schools.com/tags/tag_a.asp), [img](https://www.w3schools.com/tags/tag_img.asp), [p](https://www.w3schools.com/tags/tag_p.asp) and the [heading](https://www.w3schools.com/tags/tag_hn.asp) tags
    - Each of these element tags optionally has an `id` and can belong to a `class`. These identifiers can be used in the css and javascript to identify the element to style it or perform some other login on it.
    - All the content along with the html elements for these go into the [html body](https://www.w3schools.com/tags/tag_body.asp). 
    - There could also be meta data about the webpage itself. These typically go at the top of the webpage into the [head](https://www.w3schools.com/tags/tag_head.asp) of the document
    - There are also file types that browsers know how to interpret. These could be music which could be placed in the [audio tag](https://www.w3schools.com/Tags/tag_audio.asp), or videos in the [video tag](https://www.w3schools.com/html/html5_video.asp) and pdfs in the [object tag](https://www.w3schools.com/TAGS/tag_object.asp). Apart from these file types, [images](https://www.w3schools.com/html/html_images.asp) are a basic part of html standards.
    - Apart from all the above elements which are output type tags, there are tags where user input can be taken. These are called [form tags](https://www.tutorialspoint.com/html/html_form_tag.htm) and [input tags](https://www.w3schools.com/tags/tag_input.asp) within forms.
    - If you want to learn HTML from scratch [tutorials-point](https://www.tutorialspoint.com/html/index.htm), [code-academy](https://www.codecademy.com/learn/learn-html) and [W3Schools](https://www.w3schools.com/html/) are good places to start.

2. CSS: 
    - Cascading Style Sheets are the main method to styling a website.
    - CSS specifications decide the syntax by which you can specify the style. 
    - CSS targetting a particular div can be [placed at the div](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_css_inline) in the html, within [style tag in the html](https://www.w3schools.com/tags/tag_style.asp) or in a [separate css file](https://www.w3schools.com/css/css_howto.asp).
    - Typical things decided by css are font styles, position and spacing of elements, color or image of background and color of foreground. Importantly CSS can also be used to hide elements in a webpage.
    - Typically CSS is considered static but that statement comes with a few caveats
        - CSS can be separately set for different browser window sizes through [media queries](https://www.w3schools.com/css/css3_mediaqueries_ex.asp)
        - CSS can have extremely simple logic (like addition, subtraction) using [calc](https://developers.google.com/web/updates/2012/03/CSS-layout-gets-smarter-with-calc)
        - CSS has inbuilt layouts called [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and [CSS Grid](https://gridbyexample.com/examples/) which make dynamic decisions in where to position objects
    - CSS can be used to create simple animated objects in a webpage, through [transitions](https://www.w3schools.com/cssref/css3_pr_transition.asp).
    - Good resources for learning CSS are [mozilla docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS), [tutorials-point](https://www.tutorialspoint.com/css/) and [w3schools references](https://www.w3schools.com/css/)
    - CSS has been abstracted by languages like [LESS](http://lesscss.org/) and [SASS](https://sass-lang.com/) that compile into ordinary css. These include variables within CSS

3. Javascript:
    - Javascript is a full fledged programming language unlike CSS and HTML. It is the default language understood by the browsers. 
    - The html with all its elements constitutes what is known as a [document object model (DOM)](https://www.w3schools.com/js/js_htmldom.asp). This is accessible to the Javascript running on the page. The access can be used to change the DOM as well. For all practical purposes one may think of the DOM as the internal representation of the HTML page.
    - Javascript can therefore be used to compute all kinds of logic and then to change the DOM based on that logic. This can involve
        - Read DOM elements and their properties
        - Change content within DOM elements
        - Create new dom elements
        - Change styles of elements
    - So what triggers a particular Javascript function (to change a web page element or some such)? These triggers are called [events](https://www.tutorialspoint.com/javascript/javascript_events.htm). Events are the main way that Javascript functions are called. 
    - Events can be attached to entire web pages or to particular elements of webpages. 
    - For example, you can check if someone is typing in a form, or is hovering the mouse over some part of the page, or has just clicked a button. For mobile devices, equivalent triggers for touch exist.
    - [This](https://developer.mozilla.org/en-US/docs/Web/Events) is a fairly extensive  list. Suffice to say that you may find events for most things that might occur on a webpage. From these events you may construct other events as well. Commonly used event types are
        - [Page Load](https://www.w3schools.com/jsref/event_onload.asp) to check that all dom elements have finished downloading
        - [Mouse Events](https://javascript.info/mouse-events-basics) and [touch events](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events) for various elements in the page
        - [Keyboard events](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent) also exist that can indicate whether the keyboard has been used to type anything.
    - Javascript can also [speak](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview) to servers outside of the present server based on some user input and retrieve components that can be used to update the webpage.
    - In other words javascript can be used to change a webpage 'dynamically'. We will come back to this statement in the next section.

Notes:
1. From this section you might come to understand that the visible content you write typically forms a small part of the webpage only. The rest is all the supporting html css and javascript scaffolding. It would be hugely wasteful to write all of this scaffolding each time you want to note down a small thought.
2. This section might also seem like a lot of input to digest. The happy part is that the whole reason to use Hugo is that you don't *have to* write any of HTML, CSS or javascript.

#### How does a website work

**DNS**
1. When a [user types an url](https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a) on the browser, the user expects to see a webpage represented by the url. 
2. Each webpage is hosted by a server (or more than one server). 
3. Each of these servers have a certain address associated with it. 
4. So if the browser has to send a request (to send back a webpage) to the server it has to find its address.
5. This process is called the DNS lookup. Given the number of users requesting so many sites on the internet every second, this lookup (something like a telephone directory lookup) has to be super fast and is implemented using datastructures called [hash maps](https://www.geeksforgeeks.org/implement-forward-dns-look-cache/).
6. The browser typically checks it's own cache, then the Internet service providers cache and then goes to internet wide DNS providers.
7. Once the browser knows an address, how does it send a request to that address? This is handled at the equipment level itself through something called [routing tables]()
8. These two articles (a) [DNS Guide](https://webhostinggeeks.com/guides/dns/) and (b)[
How Does the Internet Work](https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm) are excellent resources to understand the DNS

**Requests**
1. Once the server is found by the browser, it needs to send a request to send back a webpage.
2. This request happens over a [http protocol](https://www.tutorialspoint.com/http/http_requests.htm). In fact http and https are the standard method of communication over the internet. [Other protocols](https://www.concise-courses.com/11-protocols/) that are common include ssh, pop3 and smtp.
3. These are actually the topmost layer on the internet, called application protocols. These sit above the internet layer and communication layer in the [TCP/IP model](https://www.geeksforgeeks.org/computer-network-tcpip-model/). 
4. Data transmission over the internet happens over units of data called [packets](https://en.wikipedia.org/wiki/Network_packet). These packets contain headers which contains necessary meta data for transmission and the payload which is the actual data to be transmitted.
5. TCP is a [reliable form of communication](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Reliable_transmission) that ensures that through this extensive network of middlemen between you and the server, there is no data loss. It ensures this by checking for errors (through checksums) and for lost packets and resending these packets.
6. Once an http request (or https) request is sent over tcp/ip, the server has to send back a response.
7. [This](https://www.garykessler.net/library/tcpip.html) is a good resource to look at an overview of tcp/ip. [This article from Cisco](https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13769-5.html) is a fairly detailed look at TCP and [this excerpt from the tcp/ip network administration book](https://www.oreilly.com/library/view/tcpip-network-administration/0596002971/ch01.html) gives a good overview.

**Responding to requests**
1. Behing the IP address in the [web server](https://en.wikipedia.org/wiki/Web_server) computer sits a program like Apache or Nginx for handling requests.
2. Hi
5. Sometimes instead of a single computer, there is something called a [load balancer](https://www.f5.com/services/resources/glossary/load-balancer) that sits at the IP.
    - Say there is a website with 100s of concurrent users, a single server may not be able to handle it
    - Then one needs multiple servers handling requests to the IP address of the website.
    - This task is done by a [load balancer](https://en.wikipedia.org/wiki/Load_balancing_(computing)) which takes a requests, and sends it onwards to one of the servers that sits behind it.
    - There are [several methods](https://www.citrix.com/glossary/load-balancing.html) of choosing which server to send the user request to. For example:
        - round robin
        - least response time
        - least bandwidth
        - fewest active connections
    - Once the server and client establish a connection, the load balancer steps out of the way and there is [persistence](https://www.citrix.com/blogs/2010/09/09/load-balancing-persistence/) between that server and the user.
6. Also common is a [CDN (content delivery network)](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/). 
    - A [CDN](https://www.incapsula.com/cdn-guide/what-is-cdn-how-it-works.html) typically takes content at a particular timestamp, caches it and then distributes it across its servers. 
    - When a visitor requests a particular url, it is served from one of the distributed server locations closest to the requestor. 
    - CDNs typically serve static content, ie content that is the same irrespective of who requests it. 
    - This could be the entire webpage or only certain assets from the webpage that are cacheable/static like images.



the server registers a request. Once the request is registered, the server has to decide what is shown to the visitor. This is the logic that goes into the website. Let us call this area which controls the logic as the controller. The logic on what to show may be based on what the typical



#### What is a static website and when it is ok to build your website statically
We mentioned in the last section that a site can be made dynamic by adding javascript. But most sites (including static sites) contain javascript. So whats going on? This is a confusion thats caused due to terminology. So let's define whats a static website nicely.

***Definition:***  A `static site` is a website that stores no information about the visitor on the server that is serving the website.

**Implications:**
1. The first implication of this is that every visitor is served the same web page. 
2. This webpage might appear differently for each visitor due to differently configured client side logic, or even simply due to different CSS for different devices.
3. Static sites may use visitor information passed through [forms](https://www.w3schools.com/html/html_form_elements.asp) or [cookies](https://www.w3schools.com/js/js_cookies.asp) and send this to third party servers, or even email. This can be used to setup [contact forms](https://www.w3schools.com/howto/howto_css_contact_form.asp)
4. The static site may contain components which are served from different servers that are dynamic. Further, while they may not store information about the client on their own servers, they can defer this function to a third party server. Good examples of third party applications that are often integrated into static sites are:
    1. Many static sites use comments that are powered by third party providers (like [Disqus](https://disqus.com/))
    2. Static sites can be used to serve ads from third parties [like Google Adsense](https://support.google.com/adsense/answer/181950?hl=en) (even personalized ads) from static sites
    3. Static sites may use similar third party applications to enable analytics, [ex: google analytics](https://developers.google.com/analytics/devguides/collection/analyticsjs/), about the customer. These analytics can include things like what are the parts and pages of the website your visitor spent time on, how they arrived at your site, what geography they are from and sometimes even the demographics of the customer. 
    4. Static sites may even be used to receive payments. Typically this is again through third party payment gateways [like paypal](https://developer.paypal.com/demo/checkout/#/pattern/client)
5. Static sites are cheaper to host as all one needs is storage space on one of the cloud providers (typically free for one website per username on [github pages](https://pages.github.com/) or 2 cents a month for a gigabyte of storage on [Google Cloud](https://cloud.google.com/storage/)

**So where's the catch?**
1. A lot of your customer data exists with third party providers. Note that even a majority of dynamic sites use the third party providers anyway.
2. Your logic is computed at the customer side, and you don't have control over the amount of computation power at their end. It may for example be a slow mobile from which the customer is accessing your site.
3. Static sites are an ideal use case for websites where the core objective is to display content. For websites where there is some other objective, like bank websites or search websites this is not ideal.
4. For even simple use cases like allowing customer logins (where they bookmark their favorite pages from your website for instance), or for sites wanting to implement carts static sites are not the solution
5. For any dynamic content based on who the customer is, or based on their history and preferences, static sites are not the solution. Most of what we know as `user applications` come under this category For example: mail, banking sites. 
6. Sites that have to output something computed live, or computed per user request also would not be suitable for static sites. For example search sites.
7. Many internet sites operate on user data or other data under a logic of CRUD or in other words Create Read Update and Delete. These refer to what is done to a [record](https://www.cengage.com/school/corpview/RegularFeatures/DatabaseTutorial/db_elements/db_elements2.htm) in a [table](https://en.wikipedia.org/wiki/Table_(database)). Most things that act on data, when that data is not input by the webpage creator, is not suitable for static sites.

Having said all of this, a majority of content on the internet is static, including that which is displayed by so called dynamic sites like wordpress.

#### What is a static website generator

**The need for a webpage Generator**
1. We noted during the discussion of websites above that *while the actual text content of a webpage may be small, there is a large amount of html, css and javascript* that goes into making a webpage out of this content. 
2. Most times, this html, css and javascript is repeated across different webpages within a website. Therefore the website creator shouldn't have to repeat this code
3. Even when the entire html, css or javascript is not repeated, there are certainly large chunks of these which are repeated across the pages of a website

***Definition:*** Let us call the text and images and any other parameters that a user inputs in creating a website the `content matter`. A `static site generator` is a program that generates a full web page from the content matter that a user inputs.  

Let us first understand the stages of static site generation:
1. User chooses styles and logic (template)
2. User inputs content and parameters if any
3. Website (or webpage) is generated by the static site generator
4. Website is checked for correctness
5. Website is uploaded to storage host

During generation of the webpage there is any amount of logic that can go into generating the webpage from the `content matter`. Since the content matter can include parameters for generating the website



#### What are the parts of a typical website

#### What is Hugo




----------------
Section 3: Setting up the online scaffolding
----------------

## Go buy the domain
1. Go to godaddy.com
2. Search for preferred domain name
3. Add to cart and buy. Just choose one domain for now, you can always add more later. Let's call this domain as "your-domain.com". Of course note that ".com" could be any other suffix like ".org" or some such.
4. Go to https://account.godaddy.com/products/
5. You should be able to see your domain.
6. Typically you may see three buttons here next to your domain: Privacy DNS and Manage.
7. Click on the DNS button. It should open up another window with the domain you are managing. We will call this Your DNS page from now. Bookmark it if necessary or leave open.


### Creating a forward from yourdomain.com into the www.yourdomain.com

1. On Your DNS page, if you scroll fown, you should see a Forwarding section.
2. You are presently going to create a DNS forwarding from the yourdomain.com into the www.yourdomain.com
3. Click on the button next to domain. The options to be input are as follows:
    1.  In the Forward to option, in the blank space next to http:// type "www.your-domain.com". This means that it is going to forward from http://your-domain.com to http://www.your-domain.com
    2. In options use forward type: Permanent (301)
    3.  In options use settings: Forward only
1. click on save
1. Leave this browser window open as we will have to come back here.



--------------------

## Verify yourself on google and get your cloud storage setup
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
5.  If it works, great, you have been verified by google as owner of your website

if it does not, then you would have to add TXT record. Let's look at how to do that.

#### Alternative Method.

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
8 Click on save
9 See that this TXT record is in the list of records on Your DNS page. Sometimes you see an error, even if you do, if you see the TXT record there, it's good enough.
10. Go back to the google TXT verification page and click on verify. You should be verified and get a success message.


--------------------

## Get yourself on the google cloud console.
1. Go to [Cloud Console Home Page](https://console.cloud.google.com) and login.
2. If this is the first time you are logging in, you should see some questions regarding your country, email preferences and agreement to their terms and conditions.
3. Just choose the usual stuff here and agree to the conditions and click ok
4. At the outset you should see the main console page, which has a number of products.  
    - Let's call this the [Cloud Console Home Page](https://console.cloud.google.com).
5. At the center of the screen a list of their main products should include "Cloud Storage".
6. At the top of the screen you should see a small message which basically says you get free cloud credits, but is actually asking you to setup billing. This is required for the setup

### Setting up billing.

1. When you click on the button on the top of the Cloud Console Home Page passing you free credits you will be taken to a page to setup your billing. It would ask you again to agree to Terms and Conditions. Agree to all this.
2. You will be offered a free trial for $300 which lasts only for 12 months. Much more likely that you would use only $5 of this, but hey, whats free is free. Complete the payment.
3. This should setup your billing (not to worry you won't be charged for the next year through this method).
    1. Sometimes if you don't complete payment, you can complete it later. The billing is still setup but is marked incomplete. You may keep receiving emails to complete billing setup and your console in such cases would remain active for a couple of days or weeks before they close it. This method is not recommended.
4. After you complete billing setup you should go back to [Cloud Console Home Page](https://console.cloud.google.com).

#### Alternative Method
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
5. Choose name. Be careful here. You must choose exactly "www.your-domain.com"
6. In Default Storage Class choose Regional
7. In location, choose the cheapest or the closest option to you depending on your priorities.
    1. If you open out the advanced settings, you should see Labels and encryption, neither of these need to be touched.
8. Click on create.
9. You would be back on the Cloud Storage Browser Page. You should be able to see your bucket by the name of "www.your-domain.com"
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
2. You should see the bucket name as "www.your-domain.com" along with location, public access level, lifecycle, labels and requester pays. At this point we are interested in making the bucket public.
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
The motivation behind having your own website is for you to have your own space on the internet. You shouldn't have to put your thoughts in facebook where they get lost or your articles in hosted blogs like wordpress.com. Wordpress self hosted sites come with the promise of ease of use, but use case wise, it is often static content which gets hosted dynamically which is inefficient, not to mention expensive.

One of the main reasons people choose to host their thoughts and ideas in places like facebook is that it is hard and perhaps costly to create websites. Neither of which should be the case. One should only use networks to spread ideas, not to host them.

This article is therefore aimed at people who don't have their own websites currently and not at existing developers (and so it aims to be free of technical jargon as much as possible). If you find improvements to code or to docs, do send in.
