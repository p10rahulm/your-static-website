+++
title = "The Thinking Tree Homepage"
date = 2018-05-15T16:24:40+05:30
draft =  false

# ----------------------------------
# Top section
[top_image]
        active=true
        image_heading = "<br>Onward and upward, like a dendritic tree<br><br><br><br>"
        content = "Reducing entropy, one post at a time<br>"
        overlay_img = "headers/bubbles-wide.jpg"  # Image path relative to your `static/img/` folder.
        overlay_filter = 0.5  # Darken the image. Value in range 0-1.


        # Call to action button (optional).
        # Activate the button by specifying a URL and button label below.
        # Deactivate by commenting out parameters, prefixing lines with `#`.
        [top_image.cta]
                url = "./post"
                label = '<i class="ai ai-figshare"></i> &nbsp&nbsp View Posts'

# ----------------------------------
# Contact us section
[contact]
        active = true
        title = "Contact"
        subtitle = ""
        content = ""

        # Automatically link email and phone?
        autolink = true

# ----------------------------------
# About us section
[about_us]
        active=true
        title = "Contact"
        subtitle = ""
        content = ""

        # ---------------------------------
        [about_us.left_part]
                left_logo_image = "portrait.jpg"
                left_name_title = "Rahul Madhavan"

                # ---------------------------------
                [[about_us.left_part.affiliations]]
                        name = "Atidiv"
                        url = "http://www.atidiv.com"
                [[about_us.left_part.affiliations]]
                        name = "Atidiv"
                        url = "http://www.atidiv.com"

                # ---------------------------------
                [[about_us.left_part.social]]
                        icon = "fa-envelope"
                        icon_pack = "fa"
                        link = "mailto:rahul.maddy@gmail"
                [[about_us.left_part.social]]
                        icon = "linkedin"
                        icon_pack = "fa"
                        link = "//linkedin.com/in/rahul-madhavan/"

                [[about_us.left_part.social]]
                        icon = "facebook"
                        icon_pack = "fa"
                        link = "//facebook.com/rahul.maddy"

                [[about_us.left_part.social]]
                        icon = "github"
                        icon_pack = "fa"
                        link = "//github.com/p10rahulm"


        # ---------------------------------
        [about_us.right_part]
                title = "Biography"
                content = "some content here"

                # ---------------------------------
                [about_us.right_part.bottom_left]
                        title = "Education"
                [[about_us.right_part.bottom_left.list]]
                        title = "Artificial Intelligence"
                        subtitle = ""
                        icon = "fa-dot-circle"
                [[about_us.right_part.bottom_left.list]]
                        title = "Networks"
                        subtitle = ""
                        icon = "fa-dot-circle"
                [[about_us.right_part.bottom_left.list]]
                        title = "Topology"
                        subtitle = ""
                        icon = "fa-dot-circle"
                [[about_us.right_part.bottom_left.list]]
                        title = "Language"
                        subtitle = ""
                        icon = "fa-dot-circle"
                [[about_us.right_part.bottom_left.list]]
                        title = "Modelling"
                        subtitle = ""
                        icon = "fa-dot-circle"

                # ---------------------------------
                [about_us.right_part.bottom_right]
                        title = "Education"
                # ---------------------------------
                [[about_us.right_part.bottom_right.list]]
                        title = "Master of Business Administration, 2012"
                        subtitle = "IIM Ahmedabad"
                        icon = "fa-graduation-cap"

                [[about_us.right_part.bottom_right.list]]
                        title = "Bachelor of Technology, 2007"
                        subtitle = "Indian Institute of Technology, Madras"
                        icon = "fa-graduation-cap"



+++

# This is a base directory
