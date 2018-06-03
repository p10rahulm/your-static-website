+++
# Since this template is static, the contact form uses www.formspree.io as a
# proxy. The form makes a POST request to their servers to send the actual
# email. Visitors can send up to a 1000 emails each month for free.
#
# What you need to do for the setup?
#
# - set your email address under 'email' below
# - upload the generated site to your server
# - send a dummy email yourself to confirm your account
# - click the confirm link in the email from www.formspree.io
# - you're done. Happy mailing!

layout = "contact"
title = "CONTACT US"
subtitle = "_Please leave your message below and we'll get back as soon as we can_"
title_color = "azure"
subtitle_color = "#aaa"
email = "rahul.maddy@gmail.com"
contact_secondary_email = ["ksm@ksmadhavan.in","abc@example.org"]

buttontext = "Send message"
onSubmit_link = "/contact_success"



# Success and error message overwrite for async contact form
thanks = "Thank you for awesomely contacting us."
error = "Message could not be sent. Please contact us at mail@example.com instead."

[captcha]
sitekey = "6LehhVwUAAAAANDmW_A-7i2mpnA85A1fTKnjU0yR"
buttontext = "Send Message"

# 'warning' defines error messages for invalid inputs
[form.name]
text = "Your Name *"
warning = "Please enter your name."

[form.email]
text = "Your Email *"
warning = "Please enter your email address."

[form.phone]
text = "Your Phone *"
warning = "Please enter your phone number."

[form.message]
text = "Your Message *"
warning = "Please enter a message."

+++
