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
[top_banner]
    active=true
    layout = "top_banner" # choose from single or carousel

    # content from below. Layout from above
    title = "The Thinking Tree"
    link1_name = "Posts"
    link1 = "#featured_posts"
    link2_name = "Events"
    link2 = "#featured_events"
    link3_name = "Thoughts"
    link3 = "#featured_thoughts"
    slide1_link "/posts"
    slide1_subject = "Posts"
    slide1_title = "Onward and Upward, Like a Dendritic Tree"
    slide1_description = "Reducing entropy, one post at a time"
    slide2_link "/publications"
    slide2_subject = "Publications"
    slide2_title = "Every new day, better than the last"
    slide2_description = "Nurturing creativity, like saplings amidst giants"






    #-----------------This is container for the top banner we will be using---------------------------
    # each slide is going to have below fields
    [[top_banner.slide_elements]]
        name = "banner"
        class = "" # use in case belongs to some class of elements
        content = ""
        has_children = true
        has_parent = false
            parent = ""
        type = "div" # https://www.w3schools.com/html/html_blocks.asp
    
    #-----------------The fixed fields start here ---------------------------
    # Some fixed fields
    [[top_banner.slide_elements]]
        name = "title"
        class = "" # use in case belongs to some class of elements
        content = "The Thinking Tree"
        has_children = false
        has_parent = false
            parent = ""
        type = "div"
        # use css styles below
        [[top_banner.slide_elements.styles]]
            container = "#top-banner"
            target = "#title"
            media_type = ""
            [[top_banner.slide_elements.styles.style_value]]
                field = "font-weight"
                value = "900"
            [[top_banner.slide_elements.styles.style_value]]
                field = "color"
                value = "#fff"
            [[top_banner.slide_elements.styles.style_value]]
                field = "text-align"
                value = "center"
            [[top_banner.slide_elements.styles.style_value]]
                field = "top"
                value = "5%"
            [[top_banner.slide_elements.styles.style_value]]
                field = "left"
                value = "0%"
            [[top_banner.slide_elements.styles.style_value]]
                field = "width"
                value = "100%"
            [[top_banner.slide_elements.styles.style_value]]
                field = "font-style"
                value = "normal"
            [[top_banner.slide_elements.styles.style_value]]
                field = "font-size"
                value = "3.5rem"
            [[top_banner.slide_elements.styles.style_value]]
                field = "font=family"
                value = "inherit"
            [[top_banner.slide_elements.styles.style_value]]
                field = "margin"
                value = "3rem 0rem 2rem 0rem"
            [[top_banner.slide_elements.styles.style_value]]
                field = "position"
                value = "absolute"
    
    [[top_banner.slide_elements.styles]]
            media_type = "@media screen and (max-width: 1024px)"
            container = "#top-banner"
            target = "#title"
            [[top_banner.slide_elements.styles.style_value]]
                field = "font-size"
                value = "2.5rem"
    [[top_banner.slide_elements.styles]]
            media_type = "@media all and (max-width: 400px)"
            container = "#top-banner"
            target = "#title"
            [[top_banner.slide_elements.styles.style_value]]
                field = "font-size"
                value = "2rem"
    
    [[top_banner.slide_elements]]
        name = "mini_menu"
        class = "banner_mini_menu" # use in case belongs to some class of elements
        content = ""
        has_children = true
        has_parent = false
            parent = ""
        type = "div"
        # use css styles below
        [[top_banner.slide_elements.styles]]
            media_type = ""
            container = "#top-banner"
            target = ".banner_mini_menu"
    
            [[top_banner.slide_elements.styles.style_value]]
                field = "top"
                value = "30%"
            [[top_banner.slide_elements.styles.style_value]]
                field = "margin"
                value = "auto"
            [[top_banner.slide_elements.styles.style_value]]
                field = "left"
                value = "0"
            [[top_banner.slide_elements.styles.style_value]]
                field = "right"
                value = "0"
            [[top_banner.slide_elements.styles.style_value]]
                field = "min-width"
                value = "50%"
            [[top_banner.slide_elements.styles.style_value]]
                field = "max-width"
                value = "400px"
            [[top_banner.slide_elements.styles.style_value]]
                field = "position"
                value = "absolute"
            [[top_banner.slide_elements.styles.style_value]]
                field = "display"
                value = "flex"
            [[top_banner.slide_elements.styles.style_value]]
                field = "flex-direction"
                value = "row"
            [[top_banner.slide_elements.styles.style_value]]
                field = "flex-wrap"
                value = "nowrap"
            [[top_banner.slide_elements.styles.style_value]]
                field = "justify-content"
                value = "space-between"
    
    
        [[top_banner.slide_elements.styles]]
            media_type = "@media"
            container = "#top-banner"
            target = "#mini_menu a"
            [[top_banner.slide_elements.styles.style_value]]
                field = "color"
                value = "#fff"
    
    [[top_banner.slide_elements]]
        name = "menu-item1-link"
        class = "ff-menu-item-link" # use in case belongs to some class of elements
        content = ""
        has_children = true
        has_parent = true
            parent = "mini_menu"
        type = "a"
        [[top_banner.slide_elements.tags]]
            field = "href"
            value = "#featured_books"
        [[top_banner.slide_elements.custom_js_partials]]
            partial_location = "js_scripts/smooth_scroll.js"
            speed = 800
            target ="#menu-item1-link"
        [[top_banner.slide_elements.styles]]
            media_type = ""
            container = "#top-banner"
            target = ".ff-menu-item-link"
            [[top_banner.slide_elements.styles.style_value]]
                field = "width"
                value = "33.33%"
            [[top_banner.slide_elements.styles.style_value]]
                field = "padding"
                value = "0"

    [[top_banner.slide_elements]]
        name = "menu-item1"
        class = "ff-menu-item" # use in case belongs to some class of elements
        content = "Books"
        has_children = false
        has_parent = true
            parent = "menu-item1-link"
        type = "div"
    
        # use css styles below
        [[top_banner.slide_elements.styles]]
            media_type = ""
            container = "#top-banner"
            target = ".ff-menu-item"
            [[top_banner.slide_elements.styles.style_value]]
                field = "width"
                value = "100%"
            [[top_banner.slide_elements.styles.style_value]]
                field = "color"
                value = "#fff"
            [[top_banner.slide_elements.styles.style_value]]
                field = "border-top"
                value = "1px solid #fff"
            [[top_banner.slide_elements.styles.style_value]]
                field = "float"
                value = "left"
            [[top_banner.slide_elements.styles.style_value]]
                field = "text-align"
                value = "center"
            [[top_banner.slide_elements.styles.style_value]]
                field = "margin-top"
                value = "25px"
            [[top_banner.slide_elements.styles.style_value]]
                field = "font-size"
                value = "1.2rem"
            [[top_banner.slide_elements.styles.style_value]]
                field = "padding-top"
                value = "1.5rem"
        [[top_banner.slide_elements.styles]]
            media_type = ""
            container = "#top-banner"
            target = ".ff-menu-item:hover"
            [[top_banner.slide_elements.styles.style_value]]
                field = "border-top"
                value = "6px solid #fff"



    [[top_banner.slide_elements]]
        name = "menu-item2-link"
        class = "ff-menu-item-link" # use in case belongs to some class of elements
        content = ""
        has_children = true
        has_parent = true
            parent = "mini_menu"
        type = "a"
        [[top_banner.slide_elements.tags]]
            field = "href"
            value = "#featured_posts"
        [[top_banner.slide_elements.custom_js_partials]]
            partial_location = "js_scripts/smooth_scroll.js"
            speed = 800
            target ="#menu-item2-link"

    [[top_banner.slide_elements]]
        name = "menu-item2"
        class = "ff-menu-item" # use in case belongs to some class of elements
        content = "Posts"
        has_children = false
        has_parent = true
            parent = "menu-item2-link"
        type = "div"

    

    [[top_banner.slide_elements]]
        name = "menu-item3-link"
        class = "ff-menu-item-link" # use in case belongs to some class of elements
        content = ""
        has_children = true
        has_parent = true
            parent = "mini_menu"
        type = "a"
        [[top_banner.slide_elements.tags]]
            field = "href"
            value = "#featured_thoughts"
        [[top_banner.slide_elements.custom_js_partials]]
            partial_location = "js_scripts/smooth_scroll.js"
            speed = 800
            target ="#menu-item3-link"

    [[top_banner.slide_elements]]
            name = "menu-item3"
            class = "ff-menu-item" # use in case belongs to some class of elements
            content = "Thoughts"
            has_children = false
            has_parent = true
                parent = "menu-item3-link"
            type = "div"




    [[top_banner.slide_elements]]
        name = "arrow-left" #Get colors and images from here: https://www.materialui.co/icon/keyboard-arrow-left
        class = "banner_slide_arrows prev" # use in case belongs to some class of elements
        content = ""
        has_children = false
        has_parent = false
            parent = ""
        type = "img"
        [[top_banner.slide_elements.tags]]
            field = "src"
            value = "/img/arrow-left.png"
        # use css styles below
        [[top_banner.slide_elements.styles]]
            media_type = ""
            container = "#top-banner"
            target = ""
            [[top_banner.slide_elements.styles.style_value]]
                field = "position"
                value = "absolute"
            [[top_banner.slide_elements.styles.style_value]]
                field = "top"
                value = "45%"
            [[top_banner.slide_elements.styles.style_value]]
                field = "left"
                value = "5%"
            [[top_banner.slide_elements.styles.style_value]]
                field = "height"
                value = "50px"
        [[top_banner.slide_elements.styles]]
            media_type = ""
            container = "#top-banner"
            target = "#arrow-left:hover"
            [[top_banner.slide_elements.styles.style_value]]
                field = "transform"
                value = "scale(1.5)"
            [[top_banner.slide_elements.styles.style_value]]
                field = "transition"
                value = "transform 0.5s ease-in-out 0.1s"
    
    [[top_banner.slide_elements]]
            name = "arrow-right" #Get colors and images from here: https://www.materialui.co/icon/keyboard-arrow-right
            class = "banner_slide_arrows next" # use in case belongs to some class of elements
            content = ""
            has_children = false
            has_parent = false
                parent = ""
            type = "img"
            [[top_banner.slide_elements.tags]]
                field = "src"
                value = "/img/arrow-right.png"
            # use css styles below
            [[top_banner.slide_elements.styles]]
                media_type = ""
                container = "#top-banner"
                target = ""
                [[top_banner.slide_elements.styles.style_value]]
                    field = "position"
                    value = "absolute"
                [[top_banner.slide_elements.styles.style_value]]
                    field = "top"
                    value = "45%"
                [[top_banner.slide_elements.styles.style_value]]
                    field = "right"
                    value = "5%"
                [[top_banner.slide_elements.styles.style_value]]
                    field = "height"
                    value = "50px"
            [[top_banner.slide_elements.styles]]
                media_type = ""
                container = "#top-banner"
                target = "#arrow-right:hover"
                [[top_banner.slide_elements.styles.style_value]]
                    field = "transform"
                    value = "scale(1.5)"
                [[top_banner.slide_elements.styles.style_value]]
                    field = "transition"
                    value = "transform 0.5s ease-in-out 0.1s"

    #-----------------The fixed fields end here ---------------------------
    
    
    #-----------------The slides will be contained in the following container---------------------------
    [[top_banner.slide_elements]]
        name = "slides_container"
        class = "" # use in case belongs to some class of elements
        content = ""
        has_children = true
        has_parent = true
            parent = "banner"
        type = "div"
        # Include the js here
        [[top_banner.slide_elements.css_sources]]
            url = "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.min.css"
        [[top_banner.slide_elements.css_sources]]
            url = "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.css"
        [[top_banner.slide_elements.js_sources]]
            url = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
            async = false
            defer = false
        [[top_banner.slide_elements.custom_js_partials]]
            partial_location = "js_scripts/banner_carousel.js"
            # You can add any custom fields here
    #-----------------End of container---------------------------




    #-----------------Start of First Slide---------------------------
    [[top_banner.slide_elements]]
        name = "primary_slide"
        class = "banner_slide" # use in case belongs to some class of elements
        content = ""
        has_children = true
        has_parent = true
            parent = "slides_container"
        type = "div" 
        # use css styles below
        [[top_banner.slide_elements.styles]]
            media_type = ""
            container = "#top-banner"
            target = ".banner_slide"
            [[top_banner.slide_elements.styles.style_value]]
                field = "position"
                value = "relative"
            [[top_banner.slide_elements.styles.style_value]]
                field = "height"
                value = "750px"
            [[top_banner.slide_elements.styles.style_value]]
                field = "max-height"
                value = "100vh"
            [[top_banner.slide_elements.styles.style_value]]
                field = "background-size"
                value = "cover"
            [[top_banner.slide_elements.styles.style_value]]
                field = "background-repeat"
                value = "no-repeat"
            [[top_banner.slide_elements.styles.style_value]]
                field = "background-position"
                value = "center"
            [[top_banner.slide_elements.styles.style_value]]
                field = "animation"
                value = "intro 0.3s both"
            [[top_banner.slide_elements.styles.style_value]]
                field = "animation-delay"
                value = "0.25s"


        [[top_banner.slide_elements.styles]]
            media_type = ""
            container = "#top-banner"
            target = "#primary_slide"
            [[top_banner.slide_elements.styles.style_value]]
                field = "background-image"
                value = "linear-gradient(to bottom right,rgba(0,0,200,0.2), rgba(200,0,120,0.2)),url(/img/headers/bubbles-wide.jpg)"

        #Below we include particles from particles.js a library that creates randomly moving particles on screen
        [[top_banner.slide_elements]]
            name = "primary_slide_particles"
            class = "particles-stage"
            content = ""
            has_children = false
            has_parent = true
                parent = "primary_slide"
            type = "div"
            # Include the js here
            [[top_banner.slide_elements.js_sources]]
                url = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
                defer = true
            [[top_banner.slide_elements.custom_js_partials]]
                partial_location = "js_scripts/particle_fields.js"
                caller_id = "primary_slide_particles"
                num_particles = 50
                colors = ["#B8D500", "#21AEC0", "#795CED", "#FF5B00", "#FE9300", "#AB004A"]
                # You can add any custom fields here
            [[top_banner.slide_elements.styles]]
                media_type = ""
                container = "#top-banner"
                target = ".particles-stage"
                [[top_banner.slide_elements.styles.style_value]]
                    field = "position"
                    value = "absolute"
                [[top_banner.slide_elements.styles.style_value]]
                    field = "height"
                    value = "100%"
                [[top_banner.slide_elements.styles.style_value]]
                    field = "opacity"
                    value = "1"
                [[top_banner.slide_elements.styles.style_value]]
                    field = "top"
                    value = "0"
                [[top_banner.slide_elements.styles.style_value]]
                    field = "width"
                    value = "100%"

    [[top_banner.slide_elements]]
        name = "primary_slide_descriptors_link"
        class = "slide_descriptors_link" # use in case belongs to some class of elements
        content = ""
        has_children = true
        has_parent = true
            parent = "primary_slide"
        type = "a"
        [[top_banner.slide_elements.tags]]
            field = "href"
            value = "/posts"
        [[top_banner.slide_elements.styles]]
            media_type = ""
            container = "#top-banner"
            target = ".slide_descriptors_link"
            [[top_banner.slide_elements.styles.style_value]]
                field = "position"
                value = "relative"
            [[top_banner.slide_elements.styles.style_value]]
                field = "top"
                value = "65%"
            [[top_banner.slide_elements.styles.style_value]]
                field = "min-width"
                value = "50%"
            [[top_banner.slide_elements.styles.style_value]]
                field = "max-width"
                value = "400px"
            [[top_banner.slide_elements.styles.style_value]]
                field = "display"
                value = "block"
            [[top_banner.slide_elements.styles.style_value]]
                field = "margin-left"
                value = "auto"
            [[top_banner.slide_elements.styles.style_value]]
                field = "margin-right"
                value = "auto"
            [[top_banner.slide_elements.styles.style_value]]
                field = "color"
                value = "#eef"
        [[top_banner.slide_elements.styles]]
            media_type = "@media screen and (max-height: 800px)"
            container = "#top-banner"
            target = ".slide_descriptors_link"
            [[top_banner.slide_elements.styles.style_value]]
                    field = "top"
                    value = "55%"
        [[top_banner.slide_elements.styles]]
            media_type = ""
            container = "#top-banner"
            target = ".slide_descriptors_link:hover"
            [[top_banner.slide_elements.styles.style_value]]
                field = "text-decoration"
                value = "none"

    [[top_banner.slide_elements]]
            name = "primary_slide_descriptor_wrapper"
            class = "slide_descriptor_wrapper" # use in case belongs to some class of elements
            content = ""
            has_children = true
            has_parent = true
                parent = "primary_slide_descriptors_link"
            type = "div"

    [[top_banner.slide_elements]]
        name = "primary_slide_subject"
        class = "slide_subject" # use in case belongs to some class of elements
        content = "Posts"
        has_children = false
        has_parent = true
            parent = "primary_slide_descriptor_wrapper"
        type = "div"

        [[top_banner.slide_elements.styles]]
            media_type = ""
            container = "#top-banner"
            target = ".slide_subject"
            [[top_banner.slide_elements.styles.style_value]]
                field = "position"
                value = "relative"
            [[top_banner.slide_elements.styles.style_value]]
                field = "width"
                value = "100%"
            [[top_banner.slide_elements.styles.style_value]]
                field = "text-align"
                value = "center"
            [[top_banner.slide_elements.styles.style_value]]
                field = "color"
                value = "#eef"
            [[top_banner.slide_elements.styles.style_value]]
                field = "text-transform"
                value = "uppercase"
            [[top_banner.slide_elements.styles.style_value]]
                field = "font-weight"
                value = "700"
            [[top_banner.slide_elements.styles.style_value]]
                field = "letter-spacing"
                value = "3px"
            [[top_banner.slide_elements.styles.style_value]]
                field = "font-size"
                value = "1.25rem"
            [[top_banner.slide_elements.styles.style_value]]
                field = "padding-top"
                value = "1.0rem"


    [[top_banner.slide_elements]]
        name = "primary_slide_title"
        class = "slide_title" # use in case belongs to some class of elements
        content = "Onward and Upward, Like a Dendritic Tree"
        has_children = false
        has_parent = true
            parent = "primary_slide_descriptor_wrapper"
        type = "div"
        [[top_banner.slide_elements.styles]]
            media_type = ""
            container = "#top-banner"
            target = ".slide_title"
            [[top_banner.slide_elements.styles.style_value]]
                field = "position"
                value = "relative"
            [[top_banner.slide_elements.styles.style_value]]
                field = "width"
                value = "100%"
            [[top_banner.slide_elements.styles.style_value]]
                field = "text-align"
                value = "center"
            [[top_banner.slide_elements.styles.style_value]]
                field = "color"
                value = "#fff"
            [[top_banner.slide_elements.styles.style_value]]
                field = "text-transform"
                value = "capitalize "
            [[top_banner.slide_elements.styles.style_value]]
                field = "font-weight"
                value = "700"
            [[top_banner.slide_elements.styles.style_value]]
                field = "font-size"
                value = "1.6rem"
            [[top_banner.slide_elements.styles.style_value]]
                field = "padding-top"
                value = "1.0rem"

    [[top_banner.slide_elements]]
        name = "primary_slide_description"
        class = "slide_description" # use in case belongs to some class of elements
        content = "Reducing entropy, one post at a time"
        has_children = false
        has_parent = true
            parent = "primary_slide_descriptor_wrapper"
        type = "div"
        [[top_banner.slide_elements.styles]]
            media_type = ""
            container = "#top-banner"
            target = ".slide_description"
            [[top_banner.slide_elements.styles.style_value]]
                field = "position"
                value = "relative"
            [[top_banner.slide_elements.styles.style_value]]
                field = "width"
                value = "100%"
            [[top_banner.slide_elements.styles.style_value]]
                field = "text-align"
                value = "center"
            [[top_banner.slide_elements.styles.style_value]]
                field = "color"
                value = "#eef"
            [[top_banner.slide_elements.styles.style_value]]
                field = "font-weight"
                value = "200"
            [[top_banner.slide_elements.styles.style_value]]
                field = "font-size"
                value = "1.2rem"
            [[top_banner.slide_elements.styles.style_value]]
                field = "padding-top"
                value = "1.0rem"
    #-----------------End of First Slide---------------------------
    #-----------------Start of Second Slide---------------------------
    # Second slide
    [[top_banner.slide_elements]]
        name = "second_slide"
        class = "banner_slide" # use in case belongs to some class of elements
        content = ""
        has_children = true
        has_parent = true
            parent = "slides_container"
        type = "div"
        # use css styles below
        [[top_banner.slide_elements.styles]]
            media_type = ""
            container = "#top-banner"
            target = "#second_slide"
            [[top_banner.slide_elements.styles.style_value]]
                field = "background-image"
                value = "linear-gradient(to bottom right,rgba(0,0,200,0.2), rgba(200,0,120,0.2)),url(/img/orange-fractal.jpg)"

    [[top_banner.slide_elements]]
        name = "second_slide_particles"
        class = "particles-stage"
        content = ""
        has_children = false
        has_parent = true
            parent = "second_slide"
        type = "div"
        # Include the js here
        [[top_banner.slide_elements.js_sources]]
            url = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
        [[top_banner.slide_elements.custom_js_partials]]
            partial_location = "js_scripts/particle_fields.js"
            caller_id = "second_slide_particles"
            num_particles = 50
            colors = ["#B8D500", "#21AEC0", "#795CED", "#FF5B00", "#FE9300", "#AB004A"]
            # You can add any custom fields here

    [[top_banner.slide_elements]]
        name = "second_slide_descriptors_link"
        class = "slide_descriptors_link" # use in case belongs to some class of elements
        content = ""
        has_children = true
        has_parent = true
            parent = "second_slide"
        type = "a"
        [[top_banner.slide_elements.tags]]
            field = "href"
            value = "/publications"

    [[top_banner.slide_elements]]
            name = "second_slide_descriptor_wrapper"
            class = "slide_descriptor_wrapper" # use in case belongs to some class of elements
            content = ""
            has_children = true
            has_parent = true
                parent = "second_slide_descriptors_link"
            type = "div"

    [[top_banner.slide_elements]]
        name = "second_slide_subject"
        class = "slide_subject" # use in case belongs to some class of elements
        content = "Publications"
        has_children = false
        has_parent = true
            parent = "second_slide_descriptor_wrapper"
        type = "div"




    [[top_banner.slide_elements]]
        name = "second_slide_title"
        class = "slide_title" # use in case belongs to some class of elements
        content = "Every new day, better than the last"
        has_children = false
        has_parent = true
            parent = "second_slide_descriptor_wrapper"
        type = "div"


    [[top_banner.slide_elements]]
        name = "second_slide_description"
        class = "slide_description" # use in case belongs to some class of elements
        content = "Nurturing creativity, like saplings amidst giants"
        has_children = false
        has_parent = true
            parent = "second_slide_descriptor_wrapper"
        type = "div"
    #-----------------End of Second Slide---------------------------




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
    


    [[showcase.headline_elements]]
        name = "showcase-title-row"
        class = "row" # use in case belongs to some class of elements
        content = ""
        has_children = true
        has_parent = false
            parent = ""
        type = "div"

    [[showcase.headline_elements]]
        name = "showcase-heading"
        class = "section-heading" # use in case belongs to some class of elements
        content = "Greatest Works Ever"
        has_children = false
        has_parent = true
            parent = "showcase-title-row"
        type = "div"


    [[showcase.headline_elements]]
        name = "showcase-subheading"
        class = "section-subheading" # use in case belongs to some class of elements
        content = "Rest assured, i'm all ears"
        has_children = false
        has_parent = true
            parent = "showcase-title-row"
        type = "div"



# ----------------------------------
# About us section
[about_us]
    active=true
    
    [[about_us.headline_elements]]
        name = "about_us-title-row"
        class = "row" # use in case belongs to some class of elements
        content = ""
        has_children = true
        has_parent = false
            parent = ""
        type = "div"

    [[about_us.headline_elements]]
        name = "about_us-heading"
        class = "section-heading" # use in case belongs to some class of elements
        content = "About Us"
        has_children = false
        has_parent = true
            parent = "about_us-title-row"
        type = "div"


    [[about_us.headline_elements]]
        name = "about_us-subheading"
        class = "section-subheading" # use in case belongs to some class of elements
        content = ""
        has_children = false
        has_parent = true
            parent = "about_us-title-row"
        type = "div"

    # ---------------------------------
    [about_us.descriptor]
        logo_image = "portrait.jpg"
        name_title = "Rahul Madhavan"
        name_subtitle = "Founder, CodeFRA"

        # ---------------------------------
        [[about_us.descriptor.affiliations]]
            name = "Atidiv, Cuemath"
            url = ""
        [[about_us.descriptor.affiliations]]
            name = "Barclays, Nomura, Lehman Brothers"
            url = ""

        [[about_us.descriptor.affiliations]]
            name = "IIM Ahmedabad, IIT Madras"
            url = ""
        # ---------------------------------
        [[about_us.descriptor.social]]
            icon = "fa-envelope"
            icon_pack = "fa"
            link = "mailto:rahul.maddy@gmail"
        [[about_us.descriptor.social]]
            icon = "fa-linkedin"
            icon_pack = "fa"
            link = "//linkedin.com/in/rahul-madhavan/"

        [[about_us.descriptor.social]]
            icon = "fa-facebook"
            icon_pack = "fa"
            link = "//facebook.com/rahul.maddy"

        [[about_us.descriptor.social]]
            icon = "fa-github"
            icon_pack = "fa"
            link = "//github.com/p10rahulm"


    # ---------------------------------
    [about_us.detail]
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

                Prior to that he was a trader on Wall Street trading currency options. During his time at Barclays he helped setup an automated option price trading/monitoring system. On the research side, he worked on single currency fx pricing and eurchf floor failure models. At Nomura he worked on Equity Exotic Options with a specific focus on RFP pricing and generating client ideas. At Lehman Brothers, he risk managed an exotics trading book. He distinctly remembers being non-plussed at the fuss over the Lehman Brothers collapse, having predicted it a year before (Ref: IIT Madras placement talk - 2007). :rocket:'''

        # ---------------------------------
        [about_us.detail.bottom_left]
                title = "Interests"

            # Choose fa (font-awesome) icons below
            [[about_us.detail.bottom_left.list]]
                title = "Artificial Intelligence"
                subtitle = ""
                icon = "fa-rocket"
            [[about_us.detail.bottom_left.list]]
                title = "Networks"
                subtitle = ""
                icon = "fa-rocket"
            [[about_us.detail.bottom_left.list]]
                title = "Topology"
                subtitle = ""
                icon = "fa-rocket"
            [[about_us.detail.bottom_left.list]]
                title = "Language"
                subtitle = ""
                icon = "fa-rocket"
            [[about_us.detail.bottom_left.list]]
                title = "Modelling"
                subtitle = ""
                icon = "fa-rocket"

        # ---------------------------------
        [about_us.detail.bottom_right]
            title = "Education"
        # ---------------------------------
            [[about_us.detail.bottom_right.list]]
                title = "Master of Business Administration, 2012"
                subtitle = "IIM Ahmedabad"
                icon = "fa-graduation-cap"

            [[about_us.detail.bottom_right.list]]
                title = "Bachelor of Technology, 2007"
                subtitle = "Indian Institute of Technology, Madras"
                icon = "fa-graduation-cap"


# ----------------------------------
# Logo Wall section
[logo_wall]
    active = true

    # Count the number of logos you want on a row. Choose from 1,2,3,4,6, 12
    min_width_logo = "200px"

    [[logo_wall.headline_elements]]
        name = "logo_wall-title-row"
        class = "row" # use in case belongs to some class of elements
        content = ""
        has_children = true
        has_parent = false
            parent = ""
        type = "div"

    [[logo_wall.headline_elements]]
        name = "logo_wall-heading"
        class = "section-heading" # use in case belongs to some class of elements
        content = "Our Clients"
        has_children = false
        has_parent = true
            parent = "logo_wall-title-row"
        type = "div"


    [[logo_wall.headline_elements]]
        name = "logo_wall-subheading"
        class = "section-subheading" # use in case belongs to some class of elements
        content = "Serving You Always"
        has_children = false
        has_parent = true
            parent = "logo_wall-title-row"
        type = "div"

    # List all the logos in the logo wall below.
    # Ensure height to width ratios of the images are all the same.
    [[logo_wall.logos]]
        source = "https://upload.wikimedia.org/wikipedia/commons/3/37/Palantir_company_logo.png"
        link = "/"
        name = "Palantir"

    [[logo_wall.logos]]
        source = "https://media.licdn.com/dms/image/C510BAQHxVXskfQIR-w/company-logo_200_200/0?e=2131920000&v=beta&t=I-Eibuu3JRlpqc2wCpmw--1hp-OAw64YnK8lhO-g-iA"
        link = "/"
        name = "Sigmoid"

    [[logo_wall.logos]]
        source = "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Flipkart_logo.svg/250px-Flipkart_logo.svg.png"
        link = "/"
        name = "Flipkart"

    [[logo_wall.logos]]
        source = "http://www.nanobi.in/wp-content/uploads/2017/09/nb-logo.png"
        link = "/"
        name = "Hotstar"

# ----------------------------------
# featured posts section
# Below we set attributes for the featured pages on the website front page
[featured_pages]
    active = true
    sections = ["people","books","publications","courses","workshops","reviews","events","posts","notes","thoughts"]



# ----------------------------------
# Call to Action section
[cta]
    active = true
    # Check the toml file in data/layouts/ to see what is rendered.
    # The render function is in layouts/functions/render_fields.html and is claled from cta.html in layouts/homepage-sections
    layout = "call_to_action1"



# ----------------------------------
# Contact us section
[contact]
    active = true

    [[contact.headline_elements]]
        name = "contact-title-row"
        class = "row" # use in case belongs to some class of elements
        content = ""
        has_children = true
        has_parent = false
            parent = ""
        type = "div"

    [[contact.headline_elements]]
        name = "contact-heading"
        class = "section-heading" # use in case belongs to some class of elements
        content = "Contact Us"
        has_children = false
        has_parent = true
            parent = "contact-title-row"
        type = "div"


    [[contact.headline_elements]]
        name = "contact-subheading"
        class = "section-subheading" # use in case belongs to some class of elements
        content = "Always here to help"
        has_children = false
        has_parent = true
            parent = "contact-title-row"
        type = "div"
        
    [[contact.fields]]
        name = "contact_email"
        description = "email"
        font_awesome_icon = "fa-envelope"
        link = "mailto:{{ . }}"
        text = "rahul.maddy@gmail.com"
        style = "color:#333; margin-bottom: 30px; display:block;"


+++

# This is a base directory
