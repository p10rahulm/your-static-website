+++
title = "{{ replace .TranslationBaseName "-" " " | title }}"
date = {{ .Date }}
draft = false
author = "Rahul Madhavan"

# Should this be listed in front page
featured = true

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []
categories = []
subjects = []

# Specific Template Meta
[course.title]= "A review on Management topics"
[course.topic]= ["Management"]
[course.faculty]= ["K S Madhavan","Seethapati"]
[course.who_should_attend]= ["Management Professionals","Final Year Students"]
[course.pre-requisites]= ["Knowledge in Marketing"]

[course.date] = "Anytime"
[course.duration] = "4 weeks"
[course.delivery] = "In Person/Online"
[course.location] = "Bangalore Gymkhana/Online"
[course.fees] = "Rs. 1000"
[course.certification] = "Rs. 1000"

# Short version
[course.abstract] = ""

# Optional video
[course.video_url] = ""

# Optional contact details
[course.contact.name] = ""
[course.contact.email] = ""
[course.contact.phone] = ""


# Optional course files.
# Place your files in the `static/files/` folder and reference its filename below, e.g. `image = "filename.pdf"`. Leave below empty if no files requried
[course.brochure_name_url] = [{ name = "K S Madhavan", filepath = "" }, { name = "ABC", filepath = "" }, { name = "XYZ", filepath = "" }]


# Featured image

# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = ""
caption = ""
+++

# About the course

This is an awesome course. Get there or be square.