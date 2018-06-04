+++
title = "{{ replace .TranslationBaseName "-" " " | title }}"
date = {{ .Date }}
draft = false
author = "Rahul Madhavan"

show_popup = true
show_sharer = true
rollup_sharer_active= true
fixed_sharer_active = true
content_sharer_active= true

# Should this be listed in front page
featured = true

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []
categories = []
subjects = []
# Project taxonomy (optional).
#   Associate this publication with one or more of your projects.
projects = []
# Publication type taxonomy (optional).
# Associate this publication with one or more types like
# Uncategorized, Conference paper, Journal article, Manuscript, Report, Book, Book section
publication_types = ["Journal article"]

# Does this page contain LaTeX math? (true/false)
math = true

# Does this page require source code highlighting? (true/false)
highlight = true
highlight_languages = ["html","bash"]
highlight_style = "ocean"


# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
[publication]
        authors = ["Rahul Madhavan","Ankit Baraskar"]

        # Publication name and optional abbreviated version.
        name = "IEEE"

        # Abstract and optional shortened version.
        abstract = "We have created a framework for analyzing subscription based businesses in terms of a unified metric which we call SCV (single customer value). The major advance in this paper is to model customer churn as an exponential decay variable, which directly follows from experimental data relating to subscription based businesses. This Bayesian probabilistic model was used to compute an expected value for the revenue contribution of a single user. We obtain an exact closed-form solution for the constant churn model, and an approximate closed-form solution for the exponential decay model. In addition, we define a general methodology for decision making processes using sensitivity analysis of the model equation, which we illustrate with a real-life case study for a food based subscription business."

        # Featured image thumbnail (optional)
        image_preview = ""


        # Links (optional).
        url_pdf = "https://arxiv.org/pdf/1704.05729.pdf"
        url_preprint = "https://arxiv.org/abs/1704.05729"
        url_code = ""
        url_dataset = ""
        url_project = ""
        url_slides = ""
        url_video = ""
        url_poster = ""
        url_source = ""

        # Custom links (optional).
        #   Uncomment line below to enable. For multiple links, use the form `[{...}, {...}, {...}]`.
        # url_custom = [{name = "Custom Link", url = "http://example.org"}]


# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
        image = ""
        caption = ""

+++
{{< figure src="/media/spf13.jpg" title="Steve Francia" >}}
