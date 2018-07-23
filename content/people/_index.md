+++

name = "people"
title = "Our Strength"
subtitle = "Our people are our strength"
num_featured = 8
sort_field = "title" #add the .Params at the start before sort field
sort_order = "asc"
card_layout = "people_cards_list_style1"

[[fields]]
    field_name = "name"
    prefix = ""
    class = "card_title center_align"
    postfix = ""
[[fields]]
    field_name = "role"
    prefix = ""
    class = "card_summary center_align"
    postfix = ""
    [[fields.styles]]
    style = "padding"
    value = "10px 3px 0px 3px"
[[fields]]
    field_name = "social"
    type = "icon_links"
    prefix = ""
    class = "card_links center_align"
    postfix = ""
    [[fields.styles]]
    style = "padding"
    value = "0 3px 10px 3px"
    [[fields.styles]]
    style = "letter-spacing"
    value = "3px"
[[fields]]
    field_name = "summary"
    prefix = ""
    class = "card_summary center_align"
    postfix = ""
    truncate_size = 115

+++
