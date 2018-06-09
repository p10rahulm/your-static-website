+++
title = "The Thinking Tree Homepage"
date = 2018-05-15T16:24:40+05:30
draft =  false

show_popup = true
show_sharer = true
rollup_sharer_active = true
fixed_sharer_active = true

# ----------------------------------
# Top section
[top_image]
        active=true
        image_heading = "<br>Onward and upward, like a dendritic tree<br><br><br><br>"
        content = "Reducing entropy, one post at a time<br>"
        overlay_img = "headers/bubbles-wide.jpg"  # Image path relative to your `static/img/` folder.
        show_particles = true

        # Call to action button (optional).
        # Activate the button by specifying a URL and button label below.
        # Deactivate by commenting out parameters, prefixing lines with `#`.
        [top_image.cta]
                url = "./post"
                label = '<i class="ai ai-figshare"></i> &nbsp&nbsp View Posts'

# ----------------------------------
# Showcase section
[showcase]
        active=true
        title = "Greatest ever works"
        subtitle = "Major Projects and Work Interests"

        # These are the cards we will display. Ideally fill three.
        # choose from 2,3,4,6
        numcards = 3

        [[showcase.card]]
                        icon = "fa-laptop"
                        title = "Responsive Design"
                        link = "#"
                        card_content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."

        [[showcase.card]]
                        icon = "fa-lock"
                        title = "Web"
                        link = "#"
                        card_content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."

        [[showcase.card]]
                        icon = "fa-shopping-cart"
                        title = "E-Commerce"
                        link = "#"
                        card_content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."

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
                left_name_subtitle = "Founder, CodeFRA"

                # ---------------------------------
                [[about_us.left_part.affiliations]]
                        name = "Atidiv, Cuemath"
                        url = ""
                [[about_us.left_part.affiliations]]
                        name = "Barclays, Nomura, Lehman Brothers"
                        url = ""

                [[about_us.left_part.affiliations]]
                                        name = "IIM Ahmedabad, IIT Madras"
                                        url = ""
                # ---------------------------------
                [[about_us.left_part.social]]
                        icon = "fa-envelope"
                        icon_pack = "fa"
                        link = "mailto:rahul.maddy@gmail"
                [[about_us.left_part.social]]
                        icon = "fa-linkedin"
                        icon_pack = "fa"
                        link = "//linkedin.com/in/rahul-madhavan/"

                [[about_us.left_part.social]]
                        icon = "fa-facebook"
                        icon_pack = "fa"
                        link = "//facebook.com/rahul.maddy"

                [[about_us.left_part.social]]
                        icon = "fa-github"
                        icon_pack = "fa"
                        link = "//github.com/p10rahulm"


        # ---------------------------------
        [about_us.right_part]
                title = "Biography"

                # ---------------------------------
                # Put the content below between the triple quotes. You may use markdown.
                # Make sure alignment is ok. I've used replace of '                '
                # to remove the leading white space
                content = '''
                Rahul Madhavan founded CodeFRA as a means to work on problems that take time and are more difficult to address than traditional start-ups would allow. Traditionally the distinction between research and production had been fairly well demarcated with research institutions working on technologies that were forward looking and companies working on production oriented technology (technologies which made money today). That distinction has become blurred, especially in computer science with much of the cutting edge improvements happening within companies.

                CodeFRA is an attempt to work on futuristic technologies covering multidisciplinary domains. We follow problems till their origins, dive into rabbit holes and go deep into the root of problems. Many times this leads us to mathematics, which seems to be the foundation of all else. Sometimes it leads to sociology and behavioural science. Few times it leads to the complexity of Biology. Other times it leads to thought experiments. Most of this rests on a backbone of coding as it is ubiquitous as a tool.

                The research areas we work on here are network topologies, computational structures, self-organization and automata, idea space theory. Apart from this core, there is also ongoing work on pattern finding in market microstructure (high frequency trading), and a few applications of complexity and modelling. If you would like to join us to contribute on any of these problems, you are most welcome. We're sure you would find the journey at least slightly enlightening. If you have a problem that you would like us to work on, please contact us below.

                Rahul Madhavan has been the head of Data Science at Atidiv and Cuemath. At Atidiv, he built a data science division from scratch which worked on Data Science as a Service - the Atidiv data science team acted as the remote data science team for our clients. This meant building tools to solve common problems between companies and building a team to deal with bespoke problems and on demand requests for client companies. At Cuemath he was the head of data science and helped in their Series-B fund-raise round.

                Prior to that he was a trader on Wall Street trading currency options. During his time at Barclays he helped setup an automated option price trading/monitoring system. On the research side, he worked on single currency fx pricing and eurchf floor failure models. At Nomura he worked on Equity Exotic Options with a specific focus on RFP pricing and generating client ideas. At Lehman Brothers, he risk managed an exotics trading book. He distinctly remembers being non-plussed at the fuss over the Lehman Brothers collapse, having predicted it a year before (Ref: IIT Madras placement talk - 2007). :rocket:
               '''

                # ---------------------------------
                [about_us.right_part.bottom_left]
                        title = "Education"
                # Choose fa (font-awesome) icons below
                [[about_us.right_part.bottom_left.list]]
                        title = "Artificial Intelligence"
                        subtitle = ""
                        icon = "fa-rocket"
                [[about_us.right_part.bottom_left.list]]
                        title = "Networks"
                        subtitle = ""
                        icon = "fa-rocket"
                [[about_us.right_part.bottom_left.list]]
                        title = "Topology"
                        subtitle = ""
                        icon = "fa-rocket"
                [[about_us.right_part.bottom_left.list]]
                        title = "Language"
                        subtitle = ""
                        icon = "fa-rocket"
                [[about_us.right_part.bottom_left.list]]
                        title = "Modelling"
                        subtitle = ""
                        icon = "fa-rocket"

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


# ----------------------------------
# Logo Wall section
[logo_wall]
        active = true
        heading = "Our Clients"
        heading_color = "#666"
        subheading = "we serve people from everywhere"
        subheading_color = "#aaa"


        # Count the number of logos you want on a row. Choose from 1,2,3,4,6, 12
        logos_in_row_medium_screen = 4
        logos_in_row_small_screen = 2

        # List all the logos in the logo wall below.
        # Ensure height to width ratios of the images are all the same.
        [[logo_wall.logos]]
                source = "https://themes.gohugo.io/theme/agency/img/logos/themeforest.jpg"
                link = "/"
                name = "Bubbles"

        [[logo_wall.logos]]
                source = "https://themes.gohugo.io/theme/agency/img/logos/creative-market.jpg"
                link = "/"
                name = "Creative"

        [[logo_wall.logos]]
                source = "https://themes.gohugo.io/theme/agency/img/logos/envato.jpg"
                link = "/"
                name = "Envato"

        [[logo_wall.logos]]
                        source = "https://themes.gohugo.io/theme/agency/img/logos/designmodo.jpg"
                        link = "/"
                        name = "Design_Modo"

# ----------------------------------
# featured posts section
# Below we set attributes for the featured pages on the website front page
[featured_pages]
    active = true

    # Below include the sections like books, courses or people (page types) for which you want the featured sections on the front page
    # Choose the number of pages per section you want featured on the front page as num_featured
    # Choose how you want sorted: You can choose any parameter found in the content front matter. Prefix "." before the required field name
    # Choose sort order from "asc" or "desc"
    # There are three layouts you can choose from
    # 1) "cards" 2) "carousel" 3) "list"

    [[featured_pages.sections]]
        name = "books"
        title = "Books"
        title_color = "#333"
        title_alignment = "center" #use "center", "left" or "right"
        subtitle = "The latest and greatest books"
        subtitle_color = "#999"
        subtitle_alignment = "center" #use "center", "left" or "right"
        num_featured = 6
        sort_field = ".Params.title" #add the .Params at the start before sort field
        sort_order = "asc"
        card_alignment = "center"
        card_padding = "1rem" # use this to set the padding between cards
        card_include_image = true #should image be shown or not?
        card_image_height = "200px" # this will be used to set height of all the cards
        card_image_width = "200px"  # this will be used only in case of card_layout ="list" else it will be 100% of container
        card_title_font_color = "#a22"
        card_title_font_size = "1rem"
        card_title_font_weight = "700" #choose whole numbers between 100 and 900
        card_title_padding = "3px"
        card_title_text_alignment = "left" # choose between left, center or right
        card_title_top_margin = "1rem"
        card_title_bottom_margin = "0.5rem"

        box_toggle = false #should the boxes have shadows?
            box_padding = "0px"
            box_border_size = "1px"
            box_border_color = "#333"
            box_shadow_color = "#aaa" # if so what color
            box_shadow_horizontal_offset = "10px" # if so what color
            box_shadow_vertical_offset = "10px" # if so what color
            box_shadow_blur = "2px" # if so what color
        clickable_card_overlay_on_hover = false
            overlay_color = "#246"
            overlay_opacity = 0.5  #choose from 0 to 1 (ideally less than 0.8)
        card_layout = "list" # chooose between 1) "cards" 2) "carousel" 3) "list"
        # If layout is cards
            number_in_row_large_screen = 3
            number_in_row_normal_screen = 3
            number_in_row_small_screen = 2

        # if layout is carousel
            left_right_arrow_colors = "#a22"
            arrow_size = "20px"
            # You may use any left and right arrows: These should help: http://xahlee.info/comp/unicode_arrows.html
            left_right_arrow_font_family = "Helvetica"
            left_arrow_content = "⟵"
            right_arrow_content = "⟶"
        # if layout is list
            show_image_on_left = true
            padding_image_right = "1rem"

        #if field name is summary below, we will summarize the full content of page in number of words given by summaryLength above
        [[featured_pages.sections.fields]]
            field_name = "authors" #choose a field from the ones in the front matter for the section, or choose "summary" to summarize content
            prefix = "Authors: "
            font_weight = "900"
            field_font_color = "#a00"
            text_align = "left"
            margin_bottom = "0px"
            margin_top = "3px"
            font_style = "italic"
            font_size = "0.6rem"
            additional_css_styles = "color:#a00;text-align:left"
        [[featured_pages.sections.fields]]
            field_name = "tagline" #choose a field from the ones in the front matter for the section, or choose "summary" to summarize content
            prefix = ""
            font_weight = "900"
            field_font_color = "#aaa"
            text_align = "left"
            margin_bottom = "0px"
            margin_top = "3px"
            font_style = "italic"
            font_size = "0.6rem"
            additional_css_styles = ""
        [[featured_pages.sections.fields]]
            field_name = "abstract" #choose a field from the ones in the front matter for the section, or choose "summary" to summarize content
            prefix = "Abstract: "
            font_weight = "900"
            field_font_color = "#333"
            text_align = "left"
            margin_bottom = "0px"
            margin_top = "3px"
            font_style = "normal"
            font_size = "0.6rem"
            additional_css_styles = ""
        [[featured_pages.sections.fields]]
            field_name = "summary" #choose a field from the ones in the front matter for the section, or choose "summary" to summarize content
            prefix = ""
            font_weight = "200"
            field_font_color = "#468"
            text_align = "left"
            margin_bottom = "3px"
            margin_top = "3px"
            font_style = "normal"
            font_size = "0.75rem"
            additional_css_styles = ""


    [[featured_pages.sections]]
        name = "publications"
        title = "Publications"
        title_color = "#333"
        subtitle = "The latest and greatest publications"
        subtitle_color = "#999"
        num_featured = 2
        sort_field = ".Params.title"
        sort_order = "asc"
        card_layout = "carousel"
        # if layout is carousel
            left_right_arrow_colors = "#a22"
            arrow_size = "20px"
            # You may use any left and right arrows: These should help: http://xahlee.info/comp/unicode_arrows.html
            left_right_arrow_font_family = "Helvetica"
            left_arrow_content = "⟵"
            right_arrow_content = "⟶"


    [[featured_pages.sections]]
        name = "posts"
        title = "Posts"
        title_color = "#333"
        title_alignment = "center" #use "center", "left" or "right"
        subtitle = "The posts are precocious. Use as you feel good!"
        subtitle_color = "#999"
        subtitle_alignment = "center" #use "center", "left" or "right"
        num_featured = 6
        sort_field = ".Params.title"
        sort_order = "asc"
        card_alignment = "center"
        card_padding = "1rem" # use this to set the padding between cards
        card_include_image = true #should image be shown or not?
        card_image_height = "250px" # this will be used to set height of all the cards
        card_image_width = "auto"  # this will be used only in case of card_layout ="list" else it will be 100% of container
        card_title_font_color = "#a22"
        card_title_font_size = "1rem"
        card_title_font_weight = "700" #choose whole numbers between 100 and 900
        card_title_padding = "3px"
        card_title_text_alignment = "center" # choose between left, center or right
        card_title_top_margin = "1rem"
        card_title_bottom_margin = "0.5rem"

        box_toggle = false #should the boxes have shadows?
            box_padding = "0px"
            box_border_size = "1px"
            box_border_color = "#333"
            box_shadow_color = "#aaa" # if so what color
            box_shadow_horizontal_offset = "10px" # if so what color
            box_shadow_vertical_offset = "10px" # if so what color
            box_shadow_blur = "2px" # if so what color
        clickable_card_overlay_on_hover = false
            overlay_color = "#246"
            overlay_opacity = 0.5  #choose from 0 to 1 (ideally less than 0.8)
        card_layout = "cards" # chooose between 1) "cards" 2) "carousel" 3) "list"
        # If layout is cards
            number_in_row_large_screen = 3
            number_in_row_normal_screen = 3
            number_in_row_small_screen = 2

        # if layout is carousel
            left_right_arrow_colors = "#a22"
            arrow_size = "20px"
            # You may use any left and right arrows: These should help: http://xahlee.info/comp/unicode_arrows.html
            left_right_arrow_font_family = "Helvetica"
            left_arrow_content = "⟵"
            right_arrow_content = "⟶"
        # if layout is list
            show_image_on_left = true
            padding_image_right = "1rem"

        #if field name is summary below, we will summarize the full content of page in number of words given by summaryLength above
        [[featured_pages.sections.fields]]
            field_name = "summary" #choose a field from the ones in the front matter for the section, or choose "summary" to summarize content
            prefix = ""
            font_weight = "200"
            field_font_color = "#468"
            text_align = "center"
            margin_bottom = "3px"
            margin_top = "3px"
            font_style = "normal"
            font_size = "0.75rem"
            additional_css_styles = ""


    [[featured_pages.sections]]
        name = "thoughts"
        title = "Thoughts"
        title_color = "#333"
        title_alignment = "center" #use "center", "left" or "right"
        subtitle = "The thoughts are precious. Handle with care!"
        subtitle_color = "#999"
        subtitle_alignment = "center" #use "center", "left" or "right"
        num_featured = 6
        sort_field = ".Params.title"
        sort_order = "asc"
        card_alignment = "center"
        card_padding = "1rem" # use this to set the padding between cards
        card_include_image = false #should image be shown or not?
        card_image_height = "200px" # this will be used to set height of all the cards
        card_image_width = "200px"  # this will be used only in case of card_layout ="list" else it will be 100% of container
        card_title_font_color = "#a22"
        card_title_font_size = "1rem"
        card_title_font_weight = "700" #choose whole numbers between 100 and 900
        card_title_padding = "3px"
        card_title_text_alignment = "left" # choose between left, center or right
        card_title_top_margin = "1rem"
        card_title_bottom_margin = "0.5rem"

        box_toggle = false #should the boxes have shadows?
            box_padding = "0px"
            box_border_size = "1px"
            box_border_color = "#333"
            box_shadow_color = "#aaa" # if so what color
            box_shadow_horizontal_offset = "10px" # if so what color
            box_shadow_vertical_offset = "10px" # if so what color
            box_shadow_blur = "2px" # if so what color
        clickable_card_overlay_on_hover = false
            overlay_color = "#246"
            overlay_opacity = 0.5  #choose from 0 to 1 (ideally less than 0.8)
        card_layout = "carousel" # chooose between 1) "cards" 2) "carousel" 3) "list"
        # If layout is cards
            number_in_row_large_screen = 3
            number_in_row_normal_screen = 3
            number_in_row_small_screen = 2

        # if layout is carousel
            left_right_arrow_colors = "#a22"
            arrow_size = "20px"
            # You may use any left and right arrows: These should help: http://xahlee.info/comp/unicode_arrows.html
            left_right_arrow_font_family = "Helvetica"
            left_arrow_content = "⟵"
            right_arrow_content = "⟶"
        # if layout is list
            show_image_on_left = true
            padding_image_right = "1rem"

        #if field name is summary below, we will summarize the full content of page in number of words given by summaryLength above
        [[featured_pages.sections.fields]]
            field_name = "summary" #choose a field from the ones in the front matter for the section, or choose "summary" to summarize content
            prefix = ""
            font_weight = "200"
            field_font_color = "#468"
            text_align = "left"
            margin_bottom = "3px"
            margin_top = "3px"
            font_style = "normal"
            font_size = "0.75rem"
            additional_css_styles = ""

# ----------------------------------
# Contact us section
[contact]
        active = true
        title = "Contact"
        subtitle = ""
        content = ""

        # Automatically link email and phone?
        autolink = true


+++

# This is a base directory
