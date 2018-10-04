+++
title = "Create an Actors Template"
date = 2018-06-08T19:44:35+05:30

pageNumber = 132
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
highlight_languages = ["bash","html","toml"]

highlight_style = "railscasts"

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["Static Sites","documentation","Hugo","websites","setup"]
categories = ["Website"]

[[previous_page]]
text = "Add your content to the website"
url = "/docs/create_your_website/add_content/"

[[next_page]]
text = ""
url = ""

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
Let's say you want to create a new page type called actor. You would want each page to have

1. Name of the actor
2. Date of birth
3. List of movies the actor has acted in
4. A list of best dialogues of actor along with link to view them
5. Profile write up about the actor

### Representing above variables in page configuration

First thing you want to do is to create configuration to hold the variables that we listed above. We will be creating variables for name, date of birth, movies list and dialogues(with pagelinks). The profile write up will be the actual content of the page.

Let us look at how one creates a page for actor. Remember

1. The page configuration starts and ends with three plus signs - '+++'. After the closing '+++' comes the page content
2. Our configuration is written in the [toml style](https://github.com/toml-lang/toml). You may want to quickly peruse this [explanatory page](/docs/understand_static_sites/static_website_generators) also.
3. There are many different variable types in toml. we can use text fields, date fields, arrays (list of variables) and simple objects. We will be using all of these in this example
4. The content of the page is written in [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
5. There are several common page parameters that you will want to include:
    - enable_comments
    - featured
    - layout
    - tags
    - categories
6. Note that because of the way toml is structured, you will want to keep the objects at the bottom of the page

Let's look at the sample file

```toml
+++
name = "Robert De Niro"
date_of_birth = 19430817
list_of_movies = ["Goodfellas","The Godfather","Raging Bull"]

layout = "docs"
featured = true
enable_comments = true

tags = ["Robert Deniro","movies"]
categories = ["dialogues"]

[[dialogues]]
text = "A good plan today is better than a perfect plan tomorrow"
url = "https://www.youtube.com/watch?v=z49xZ7VcfqE"
[[dialogues]]
text = "Every man has to go through hell to reach paradise"
url = "https://www.youtube.com/watch?v=WM8YbcX27uE"
[[dialogues]]
text = "Better to be a king for a night than a schmuck for a lifetime"
url = "https://www.youtube.com/watch?v=1zNr8Pf1QkY"
[[dialogues]]
text = "Never got me down Ray, you never got me down"
url = "https://www.youtube.com/watch?v=5wwItkoapuA"

+++
The actor is very good. His acting is outstanding. Read more about him [here](https://en.wikipedia.org/wiki/Robert_De_Niro)


```
Now that you have this sample file:

1. Create a folder called actors within content
2. Create a file called 'robert-de-niro.md'and place above content within that.
3. Create a archetype called 'actors.md' in the archetypes folder and place above content within that

### A simple web page

First let's look at the scaffolding for a webpage

```html
<!DOCTYPE html>
<html>
<head>
    meta data like title
    <script>
        All the header scripts like jquery
    </script>
</head>
<body>
    <nav>
        The menu on top
    </nav>
        **Content goes here**
    <footer>
        The information and links at the bottom of the page
    </footer>
</body>
</html>
```

The only part of this we are interested is the part **Content goes here**. The rest is taken care of by the scaffolding. Let us look at this content in more detail for the example we are interesed in.

#### The content part

Let's look at a very simple html output for the Actors page now. Note that we include only the content part, which was indicated in the last section by the **Content goes here**. We also look at *pure* html output we want to see - we will look in the next section as to how to make this flexible for any content with Hugo.

```html
<section id="actors" class="single_page_layout container">
    <div class = "page_top">
        <div class="field_identifier">Name: </div>
        <div id="name">Robert De Niro</div>

        <div class="field_identifier">Birth date: </div>
        <div id = "birth_date">Aug 17th 1943</div>

        <div class="field_identifier">Movies acted in: </div>
        <ul id = "movies_list">
            <li class = "movie_name">Goodfellas</li>
            <li class = "movie_name">The Godfather</li>
            <li class = "movie_name">Raging Bull</li>
        </ul>

        <div class="field_identifier">Best Dialogues</div>
        <ul id = "dialogues_list">
            <li class = "dialogue">
                <a href ="https://www.youtube.com/watch?v=z49xZ7VcfqE">
                A good plan today is better than a perfect plan tomorrow
                </a>
            </li>
            <li class = "dialogue">
                <a href ="https://www.youtube.com/watch?v=WM8YbcX27uE">
                Every man has to go through hell to reach paradise
                </a>
            </li>
            <li class = "dialogue">
                <a href ="https://www.youtube.com/watch?v=1zNr8Pf1QkY">
                Better to be a king for a night than a schmuck for a lifetime
                </a>
            </li>
            <li class = "dialogue">
                <a href ="https://www.youtube.com/watch?v=5wwItkoapuA">
                Never got me down Ray, you never got me down
                </a>
            </li>
        </ul>
    </div>
    <div class="page_main_content">
        <h1>Profile</h1>
        <p>The actor is very good. His acting is outstanding. Read more about him <a href ="https://en.wikipedia.org/wiki/Robert_De_Niro">here</a></p>
    </div>
</section>
```

Now let's take the next step and make this a layout where all the contents can be subsituted from the content files.

1. Create an actors.html file in the >layout/partials/singlePageLayouts folder
2. Create an actors.css file in the >layout/partials/css_scripts/singlePageLayouts folder
3. Create an actors.js file in the >layout/partials/js_scripts/singlePageLayouts folder
4. For now we aren't gonig to make any css or js changes, but this is just so you know what needs to be done

```html
<header>
    <style type="text/css">
        {{ partial "css_scripts/singlePageLayouts/actors.css" . | safeCSS }}
    </style>

    <script type="text/javascript">
        {{partial "js_scripts/singlePageLayouts/actors.js" . | safeJS }}
    </script>
</header>

<section id="actors" class="single_page_layout container">
    <div class = "page_top">
        <div class="field_identifier">Name: </div>
        <div id="name">{{.Params.name}}</div>

        <div class="field_identifier">Birth date: </div>
        <div id = "birth_date">{{ (.Params.date_of_birth).Format "Jan 2nd 2006"}}</div>

        <div class="field_identifier">Movies acted in: </div>
        <ul id = "movies_list">
            {{range .Params.list_of_movies}}
            <li class = "movie_name">{{ . }}</li>
            {{end}}
        </ul>

        <div class="field_identifier">Best Dialogues</div>
        <ul id = "dialogues_list">
            {{range .Params.dialogues}}
            <li class = "dialogue">
                <a href ="{{.url}}">
                {{.txt}}
                </a>
            </li>
            {{ end }}
        </ul>
    </div>
    <div class="page_main_content">
        <h1>Profile</h1>
        {{ .Content | markdownify}}
    </div>



    <!-- Below is where we place the tags and categories. Since these are optional, they are placed with regular content -->
    <div id="page_footer">
        {{if .Params.categories}}
        <div class="page_meta"><span class = "page_meta_descriptor">Categories:</span>
            {{range .Params.Categories}}
            <a class="page_meta_links" href = "/categories/{{. | urlize}}"><span class = "page_meta_links_text">{{.}}</span></a>
            {{end}}
        </div>
        {{end}}
        {{if .Params.tags}}
        <div class="page_meta"><span class = "page_meta_descriptor">Tags:</span>
            {{range .Params.tags}}
            <a class="page_meta_links" href = "/tags/{{. | urlize}}"><span class = "page_meta_links_text">{{.}}</span></a>
            {{end}}
        </div>
        {{end}}

    </div>
</section>
```

So thats it. You created a new page type. Next time someone wants to create an actor page, they would have to type hugo new actors/my-favorite-actor.md