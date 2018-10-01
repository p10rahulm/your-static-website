+++
title = "Static Websites: Implications and Constraints"
date = 2018-06-08T19:44:35+05:30

pageNumber = 4
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
text = "Retrieving a webpage from the internet"
url = "/docs/understand_static_sites/retrieving_a_webpage/"

[[next_page]]
text = "Website Templates"
url = "/docs/understand_static_sites/website_templates/"

[[quick_links]]
text = "*Implications of having static websites*"
url = "#implications-of-having-static-websites"
[[quick_links]]
text = "*What can one not do with static websites*"
url = "#what-can-one-not-do-with-static-websites"

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
text = "Website Templates"
url = "/docs/understand_static_sites/website_templates/"
[[quick_links]]
text = "Static Website Generator"
url = "/docs/understand_static_sites/static_website_generators/"
[[quick_links]]
text = "Assembling a Website"
url = "/docs/understand_static_sites/assembling_webpage/"
[[quick_links]]
text = "Static Website Generator Example: Hugo"
url = "/docs/understand_static_sites/static_generator_example_hugo/"

# Writeup goes below
+++

In the section [Parts of a webpage](/docs/understand_static_sites/parts_of_webpage/) we mentioned how a site can be made dynamic by adding javascript on the client side. From the [last section](/docs/understand_static_sites/retrieving_a_webpage/) we understood a site can be statically served or dynamically served on the server side. Yet what must be noted that there there are many dynamically written sites that are serving static content (for example many content based websites written in [wordpress](https://digital.com/blog/wordpress-stats/), which serves about 25% of internet content). So what constitutes a static site cannot simply be based on how it is programmed on the server side.

***Definition:***  A `static site` consists of webpages where the output (html, css, javascript and any other assets) of the *site server* only depends on the url of the webpages.  

## Implications of having static websites

- The first implication of this is that every visitor is served the same web page
- This webpage might appear differently for each visitor due to differently configured client side logic, or even simply due to different CSS for different devices.
- Static sites may use visitor information passed through [forms](https://www.w3schools.com/html/html_form_elements.asp) or [cookies](https://www.w3schools.com/js/js_cookies.asp) and send this to third party servers, or even email. This can be used to setup [contact forms](https://www.w3schools.com/howto/howto_css_contact_form.asp)
- The static site may contain components which are served from different servers that are dynamic. Further, while they may not store information about the client on their own servers, they can defer this function to a third party server. Good examples of third party applications that are often integrated into static sites are:
    1. Many static sites use comments that are powered by third party providers (like [Disqus](https://disqus.com/))
    2. Static sites can be used to serve ads from third parties [like Google Adsense](https://support.google.com/adsense/answer/181950?hl=en) (even personalized ads) from static sites
    3. Static sites may use similar third party applications to enable analytics, [ex: google analytics](https://developers.google.com/analytics/devguides/collection/analyticsjs/), about the customer. These analytics can include things like what are the parts and pages of the website your visitor spent time on, how they arrived at your site, what geography they are from and sometimes even the demographics of the customer. 
    4. Static sites may even be used to receive payments. Typically this is again through third party payment gateways [like paypal](https://developer.paypal.com/demo/checkout/#/pattern/client)
- Static sites are cheaper to host as all one needs is storage space on one of the cloud providers (typically free for one website per username on [github pages](https://pages.github.com/) or 2 cents a month for a gigabyte of storage on [Google Cloud](https://cloud.google.com/storage/)

## What can one not do with static websites

1. A lot of your customer data exists with third party providers. Note that even a majority of dynamic sites use the third party providers anyway.
2. Your logic is computed at the customer side, and you don't have control over the amount of computation power at their end. It may for example be a slow mobile from which the customer is accessing your site.
3. Static sites are an ideal use case for websites where the core objective is to display content. For websites where there is some other objective, like bank websites or search websites this is not ideal.
4. For even simple use cases like allowing customer logins (where they bookmark their favorite pages from your website for instance), or for sites wanting to implement carts static sites are not the solution
5. For any dynamic content based on who the customer is, or based on their history and preferences, static sites are not the solution. Most of what we know as `user applications` come under this category For example: mail, banking sites. 
6. Sites that have to output something computed live, or computed per user request also would not be suitable for static sites. For example search sites.
7. Many internet sites operate on user data or other data under a logic of CRUD or in other words Create Read Update and Delete. These refer to what is done to a [record](https://www.cengage.com/school/corpview/RegularFeatures/DatabaseTutorial/db_elements/db_elements2.htm) in a [table](https://en.wikipedia.org/wiki/Table_(database)). Most things that act on data, when that data is not input by the webpage creator, is not suitable for static sites.

Yet, as mentioned previously, a majority of content on the internet is static, including that which is displayed by so called dynamic sites like wordpress.
