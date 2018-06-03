+++
title = "The Thinking Tree Homepage"
date = 2018-05-15T16:24:40+05:30
draft =  false
show_popup = true

# ----------------------------------
# Top section
[top_image]
        active=true
        image_heading = "<br>Onward and upward, like a dendritic tree<br><br><br><br>"
        content = "Reducing entropy, one post at a time<br>"
        overlay_img = "headers/bubbles-wide.jpg"  # Image path relative to your `static/img/` folder.

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
