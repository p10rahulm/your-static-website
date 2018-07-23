+++

name = "books"
title = "Books"
subtitle = "The latest and greatest books"
num_featured = 5 # also used for pagination in list views
sort_field = ".Params.title" #add the .Params at the start before sort field
sort_order = "asc"
card_layout = "long_list_with_image"

#if field name is summary below, we will summarize the full content of page in number of words given by summaryLength above

[[fields]]
    field_name = "title" #choose a field from the ones in the front matter for the section, or choose "summary" to summarize content
    prefix = ""
    class = "card_title"
    postfix = ""
    [[fields.styles]]
        style = "margin-top"
        value = "0"
[[fields]]
    field_name = "authors" #choose a field from the ones in the front matter for the section, or choose "summary" to summarize content
    prefix = "Authors: "
    class = "card_authors left_align"
    postfix = ""
    [[fields.styles]]
        style = "margin"
        value = "0 3px"

[[fields]]
    field_name = "tagline" #choose a field from the ones in the front matter for the section, or choose "summary" to summarize content
    prefix = ""
    postfix = ""
    class = "card_tagline left_align"
    [[fields.styles]]
        style = "margin"
        value = "0 3px"

[[fields]]
    field_name = "abstract" #choose a field from the ones in the front matter for the section, or choose "summary" to summarize content
    prefix = "About: "
    postfix = ""
    truncate_size = 100
    class = "card_tagline left_align"
    [[fields.styles]]
        style = "color"
        value = "#333"
    [[fields.styles]]
        style = "margin"
        value = "0 3px"

[[fields]]
    field_name = "summary" #choose a field from the ones in the front matter for the section, or choose "summary" to summarize content
    prefix = ""
    postfix = ""
    truncate_size = 200
    class = "card_summary left_align"
    [[fields.styles]]
        style = "margin"
        value = "1rem 3px"
    [[fields.styles]]
        style = "font-style"
        value = "italic"
    [[fields.styles]]
        style = "line-height"
        value = "1.25"
+++