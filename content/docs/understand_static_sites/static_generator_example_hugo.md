+++
title = "The parts of a regular webpage - HTML, CSS and Javascript"
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
text = "Introduction to Static Sites"
url = "/docs/understand_static_sites/introduction/"
[[quick_links]]
text = "Parts of a Webpage"
url = "/docs/understand_static_sites/parts_of_webpage/"
[[quick_links]]
text = "Retrieving a Webpage from the internet"
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

There are three basic parts to every website as you see it on your browser. The content, the styling and the logic. These are described by three parts, *html*, *css* and *javascript*.

## HTML

1. This forms the main content of the website.
2. The actual content of the website is surrounded by a start tag and an end tag that describe the content.
3. While there are many types of [element tags](https://www.w3schools.com/html/html_elements.asp), the main ones that we will see over and over are [div](https://www.w3schools.com/tags/tag_div.asp), [span](https://www.w3schools.com/tags/tag_span.asp), [a](https://www.w3schools.com/tags/tag_a.asp), [img](https://www.w3schools.com/tags/tag_img.asp), [p](https://www.w3schools.com/tags/tag_p.asp) and the [heading](https://www.w3schools.com/tags/tag_hn.asp) tags
4. Each of these element tags optionally has an `id` and can belong to a `class`. These identifiers can be used in the css and javascript to identify the element to style it or perform some other login on it.
5. All the content along with the html elements for these go into the [html body](https://www.w3schools.com/tags/tag_body.asp).
6. There could also be meta data about the webpage itself. These typically go at the top of the webpage into the [head](https://www.w3schools.com/tags/tag_head.asp) of the document
7. There are also file types that browsers know how to interpret. These could be music which could be placed in the [audio tag](https://www.w3schools.com/Tags/tag_audio.asp), or videos in the [video tag](https://www.w3schools.com/html/html5_video.asp) and pdfs in the [object tag](https://www.w3schools.com/TAGS/tag_object.asp). Apart from these file types, [images](https://www.w3schools.com/html/html_images.asp) are a basic part of html standards.
8. Apart from all the above elements which are output type tags, there are tags where user input can be taken. These are called [form tags](https://www.tutorialspoint.com/html/html_form_tag.htm) and [input tags](https://www.w3schools.com/tags/tag_input.asp) within forms.
9. One must mention that while websites can live without the other parts - CSS and Javascript, a site cannot live without html. Further, we can include CSS and javascript within the HTML page itself. Therefore one can say HTML is the core format of a webpage.
10. If you want to learn HTML from scratch [tutorials-point](https://www.tutorialspoint.com/html/index.htm), [code-academy](https://www.codecademy.com/learn/learn-html) and [W3Schools](https://www.w3schools.com/html/) are good places to start.

## CSS

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

## Javascript

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

### Notes on HTML Parts

1. From this section you might come to understand that the visible content you write typically forms a small part of the webpage only. The rest is all the supporting html css and javascript scaffolding. It would be hugely wasteful to write all of this scaffolding each time you want to note down a small thought.
2. This section might also seem like a lot of input to digest. The happy part is that the whole reason to use Hugo is that you don't *have to* write any of HTML, CSS or javascript.
