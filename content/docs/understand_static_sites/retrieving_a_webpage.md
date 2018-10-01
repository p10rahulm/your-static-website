+++
title = "Retrieving a Webpage from the internet"
date = 2018-06-08T19:44:35+05:30

pageNumber = 3
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
highlight = true
highlight_languages = ["bash","html"]
highlight_style = "ocean"

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["Static Sites","documentation","Hugo","websites"]
categories = ["Website"]

[[previous_page]]
text = "Parts of a Webpage"
url = "/docs/understand_static_sites/parts_of_webpage/"

[[next_page]]
text = "What is a Static Website"
url = "/docs/understand_static_sites/static_website/"

[[quick_links]]
text = "*DNS*"
url = "#dns"
[[quick_links]]
text = "*Requests*"
url = "#requests"
[[quick_links]]
text = "*Responding to Requests*"
url = "#responding-to-requests"
[[quick_links]]
text = "*The MVC Design Pattern*"
url = "#the-mvc-design-pattern"
[[quick_links]]
text = "*Web Frameworks*"
url = "#web-frameworks"
[[quick_links]]
text = "*Handling Multiple Concurrent Requests*"
url = "#handling-multiple-concurrent-requests"
[[quick_links]]
text = "*Content Delivery Networks*"
url = "#content-delivery-networks"

[[quick_links]]
text = "Introduction to Static Sites"
url = "/docs/understand_static_sites/introduction/"
[[quick_links]]
text = "Parts of a Webpage"
url = "/docs/understand_static_sites/parts_of_webpage/"
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
[[quick_links]]
text = "Static Website Generator Example: Hugo"
url = "/docs/understand_static_sites/static_generator_example_hugo/"

# Writeup goes below
+++

what happens between you typing an address into your browser and the browser displaying the website? This forms the crux of what is the internet, or how something that exists remotely is displayed on your browser. This section is going to be a fast whirlwind tour, so lets get on with it!

## DNS

1. When a [user types an url](https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a) on the browser, the user expects to see a webpage represented by the url.
2. Each webpage is hosted by a server (or more than one server).
3. Each of these servers have a certain address associated with it.
4. So if the browser has to send a request (to send back a webpage) to the server it has to find its address.
5. This process is called the DNS lookup. Given the number of users requesting so many sites on the internet every second, this lookup (something like a telephone directory lookup) has to be super fast and is implemented using datastructures called [hash maps](https://www.geeksforgeeks.org/implement-forward-dns-look-cache/).
6. The browser typically checks it's own cache, then the Internet service providers cache and then goes to internet wide DNS providers.
7. Once the browser knows an address, how does it send a request to that address? This is handled at the equipment level itself through something called [routing tables](https://en.wikipedia.org/wiki/Routing_table)
8. The articles [DNS Guide](https://webhostinggeeks.com/guides/dns/) and [How Does the Internet Work](https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm) are excellent resources to understand the DNS

## Requests

1. Once the server is found by the browser, it needs to send a request to send back a webpage.
2. This request happens over a [http protocol](https://www.tutorialspoint.com/http/http_requests.htm). In fact http and https are the standard method of communication over the internet. [Other protocols](https://www.concise-courses.com/11-protocols/) that are common include ssh, pop3 and smtp.
3. These are actually the topmost layer on the internet, called application protocols. These sit above the internet layer and communication layer in the [TCP/IP model](https://www.geeksforgeeks.org/computer-network-tcpip-model/). 
4. Data transmission over the internet happens over units of data called [packets](https://en.wikipedia.org/wiki/Network_packet). These packets contain headers which contains necessary meta data for transmission and the payload which is the actual data to be transmitted.
5. TCP is a [reliable form of communication](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Reliable_transmission) that ensures that through this extensive network of middlemen between you and the server, there is no data loss. It ensures this by checking for errors (through checksums) and for lost packets and resending these packets.
6. Once an http request (or https) request is sent over tcp/ip, the server has to send back a response.
7. [This](https://www.garykessler.net/library/tcpip.html) is a good resource to look at an overview of tcp/ip. [This article from Cisco](https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13769-5.html) is a fairly detailed look at TCP and [this excerpt from the tcp/ip network administration book](https://www.oreilly.com/library/view/tcpip-network-administration/0596002971/ch01.html) gives a good overview.

## Responding to requests

1. Behing the IP address in the [web server](https://en.wikipedia.org/wiki/Web_server) computer sits a program like [Apache](https://httpd.apache.org/), [IIS](https://www.pcwdld.com/what-is-iis) or [Nginx](https://www.nginx.com/) for handling requests.
2. This server program then passes the request to a request handler that reads the http request and generates a response. 
3. This request handling is done for each user request. ie each time the site is viewed, there is a request handled by the server
4. There are different ways of handling user requests. These could range in complexity from just sending back static content (pre-created html, css and javascript), to sending back modified content, to having a full fledged framework to deal with the requests. Let us look at these in more detail

### Static Response

The response to a user request may simply be existing files, or in other words the html, css and javascript and images sent back to the user. With regards to the server these are `static` text objects.

### Dynamic Response

Sometimes this request may need to pass through some logic or may need [server side programming](https://developer.mozilla.org/en-US/docs/Learn/Server-side) to generate a response. This is called a `dynamic` response. Note that this is distinguished from the programming that goes into the javascript executed by the user's browser also called as [client side programming]((https://www.geeksforgeeks.org/server-side-client-side-programming/))

### Simple (inline) Web Frameworks

In some cases, like in [simple PHP](https://eev.ee/blog/2012/04/09/php-a-fractal-of-bad-design/) [design patterns](https://sourcemaking.com/design_patterns), that are closely linked to static design, you can modify the content (html,css and javascript) through [inline php](https://www.w3schools.com/php/php_syntax.asp)

## The MVC Design Pattern

Other language frameworks use a design pattern like [MVC](http://heim.ifi.uio.no/~trygver/2007/MVC_Originals.pdf), which stands for Model View Controller. There are several variants of this like [MVVM](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel), [MVP](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93presenter)

### View

[The view](https://www.martinfowler.com/eaaDev/uiArchs.html) sits straight on top of the document that the user sees. It's responsibility is to update the document in case anything in the controller changes. It is generally passive in the sense it doesn't do any processing work.

1. [For example](https://www.tutorialspoint.com/ruby-on-rails/rails-views.htm), let's say in a framework like Django Templates, we are creating a list view for books in a library. This might be as simple as:
    ```html
    <% if @books.blank? %>
        <p>There are no books in the system.</p>
    <% else %>
        <p>These are the current books in the system</p>

        <ul id = "books">
            <% @books.each do |book| %>
                <li><%= link_to book.title -%></li>
            <% end %>
        </ul>
    <% end %>
    ```
2. In the above example, it's upto the model to populate the what books field with their titles.

### Controller

[The controller](https://stackoverflow.com/questions/1931335/what-is-mvc-in-ruby-on-rails) handles the logic of the webpage. The request goes to the controller which queries the model and provides the data to the View to display.

### Model

[The model](https://www.tomdalling.com/blog/software-design/model-view-controller-explained/) is where the relevant data is accessed and retrieved for that particular use case. This is understood best as retrieval of information from a database. The database itself may be made up of several tables that are relevant.

1. Examples of tables may include customer table where the name, customer id and purchases of a customer might be stored(in case of an ecommerce site).
2. In some architectures like wordpress, the content of an entire document might just be a single cell in a table containing documents.
3. As another example of a model, one may want to retrieve the name and emails of a customer in the home page of an email App. In the same email App, when a particular email is clicked, the contents of that particular email may need to be retrieved. The retrieval of the email is done by the *model*

## Web Frameworks

Several full-fledged web-frameworks exist that help one build these `request handler programs` otherwise known as web applications

1. They automate several tasks needed to handle requests like communicating with the server application
2. They give the programmer a method for organizing the code into the MVC framework or some such.
3. They include several helper functions (that are not included in the language itself) which make coding much faster.
4. There are examples in each framework for the most common use cases (like ecommerce sites)
5. Some popular web frameworks are:
    - [Django](https://djangobook.com/model-view-controller-design-pattern/) which is built on  Python
    - [Ruby on Rails](http://www.tutorialspoint.com/ruby-on-rails/rails-framework.htm) built on Ruby
    - [ASP.net](https://www.asp.net/) built on C#
    - [Several javascript frameworks](https://blog.scottlogic.com/2013/12/06/JavaScript-MVC-frameworks.html) built on javascript

## Handling Multiple Concurrent Requests

We discussed above how a single server handles requests from a user. But every website has multiple users. What happens in such cases? In all such cases we have something called a queue. The server queues up requests and processes them as computation time permits. But if there are a large number of concurrent users to a website, there is going to be a large load on the server and this would lead to delays in response. Therefore, sometimes instead of a single computer, there is something called a [load balancer](https://www.f5.com/services/resources/glossary/load-balancer) that sits at the IP.

1. Say there is a website with 100s of concurrent users, a single server may not be able to handle it
2. Then one needs multiple servers handling requests to the IP address of the website.
3. This task is done by a [load balancer](https://en.wikipedia.org/wiki/Load_balancing_(computing)) which takes a requests, and sends it onwards to one of the servers that sits behind it.
4. There are [several methods](https://www.citrix.com/glossary/load-balancing.html) of choosing which server to send the user request to. For example:
    - round robin
    - least response time
    - least bandwidth
    - fewest active connections
5. Once the server and client establish a connection, the load balancer steps out of the way and there is [persistence](https://www.citrix.com/blogs/2010/09/09/load-balancing-persistence/) between that server and the user.

## Content Delivery Networks

Also common is a [CDN (content delivery network)](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/)

1. A [CDN](https://www.incapsula.com/cdn-guide/what-is-cdn-how-it-works.html) typically takes content at a particular timestamp, caches it and then distributes it across its servers.
2. When a visitor requests a particular url, it is served from one of the distributed server locations closest to the requestor.
3. CDNs typically serve static content, ie content that is the same irrespective of who requests it. This could be the entire webpage or only certain assets from the webpage that are cacheable/static like images.
4. The main use of CDNs is speed. The speed mainly happens because they have many servers across the globe, and the serve the website from the closest point to the visitor of the site
5. CDN helps with speed in another very important way. Many sites have common bits of javascript code otherwise known as libraries. If these are served from CDNs, which are common to many sites, the browser recognizes from the url that it has already retrieved the library (in case it has already retrieved that url in the past) and does not retrieve it. Instead it pulls from its own memory (cache) the file to be used. This speeds up the site
