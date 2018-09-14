# Creating your own static website from scratch at 2 cents a month (plus cost of domain)

# References:
- https://cloud.google.com/storage/docs/hosting-static-website
- https://cloud.google.com/storage/docs/domain-name-verification

## Go buy the domain
1. Go to godaddy.com
2. Search for preferred domain name
3. Add to cart and buy. Just choose one domain for now, you can always add more later. Let's call this domain as "your-domain.com". Of course note that ".com" could be any other suffix like ".org" or some such.
4. Go to https://account.godaddy.com/products/
5. You should be able to see your domain. 
6. Typically you may see three buttons here next to your domain: Privacy DNS and Manage.
7. Click on the DNS button. It should open up another window with the domain you are managing. We will call this Your DNS page from now. Bookmark it if necessary or leave open.


### Creating a forward from yourdomain.com into the www.yourdomain.com

1. On Your DNS page, if you scroll fown, you should see a Forwarding section.
2. You are presently going to create a DNS forwarding from the yourdomain.com into the www.yourdomain.com
3. Click on the button next to domain. The options to be input are as follows:
-- In the Forward to option, in the blank space next to http:// type "www.your-domain.com". This means that it is going to forward from http://your-domain.com to http://www.your-domain.com
-- In options use forward type: Permanent (301)
-- In options use settings: Forward only
-- click on save	
Leave this browser window open as we will have to come back here.





## Verify yourself on google and get your cloud storage setup

1. You can verify your domain here: https://www.google.com/webmasters/tools/
2. If you are on the new console, you should see a list of websites you own on the top left. If you click on this button, then at the bottom you can see a link to add new property.
2a. If you are on the old console, you should see a bright red button to "Add a Property" on the top right of your screen. 
-- Click on add property (new search console is worse than old!)
-- type the name like so : http://mywebsite.com

3. There are many methods of verification. The most convenient at this stage is to use domain name provider (the last option)
-- This will lead you back to the old console.
-- It should auto detect that you are on godaddy.
-- Click on verify on the bright red button
-- It should open a window where it asks you to login to godaddy. It does its own thing and takes 60 seconds.
5.  If it works, great, you have been verified by google as owner of your website

if it does not, then you would have to add TXT record. Let's look at how to do that.

Alternative Method.
-----------
1. If DNS verification did not go as planned. On the page with the big red verify button, you should find a link to "Add a TXT record"
2. When you click on this, it should take you to a page with lots of instructions.
3. The most important part of this page is where it specifies the TXT record Value (Point number 6 as of this writing). Copy this value. Keep this page open (let's call it google TXT verification page).
4. Go back to your Godaddy DNS Page.
5. At the top you should see a records section. At the bottom of this section is a button for add.
6. Select type TXT.
7. The options are as follows.
-- Choose "Type" as TXT
-- Choose "Host" as "@"
-- Choose "Value" as the copied value from the google verification page
-- Choose "TTL" as "1-Hour" (though it doesn't really matter)
8 Click on save
9 See that this TXT record is in the list of records on Your DNS page. Sometimes you see an error, even if you do, if you see the TXT record there, it's good enough.
10. Go back to the google TXT verification page and click on verify. You should be verified and get a success message.




## Get yourself on the google cloud console.
1. Go to console.cloud.google.com and login.
2. If this is the first time you are logging in, you should see some questions regarding your country, email preferences and agreement to their terms and conditions. 
3. Just choose the usual stuff here and agree to the conditions and click ok
4. At the outset you should see the main console page, which has a number of products. Let's call this the Cloud Console Home Page. 
5 At the center of the screen a list of their main products should include "Cloud Storage". 
-- At the top of the screen you should see a small message which basically says you get free cloud credits, but is actually asking you to setup billing. You can do this at this stage or come back here in a few steps. But this is required

### Setting up billing.

1. When you click on the button on the top of the Cloud Console Home Page passing you free credits you will be taken to a page to setup your billing. It would ask you again to agree to Terms and Conditions. Agree to all this.
2. You will be offered a free trial for $300 which lasts only for 12 months. Much more likely that you would use only $5 of this, but hey, whats free is free! Complete the payment. 
3. This should setup your billing (not to worry you won't be charged for the next year through this method).
-- Sometimes if you don't complete payment, you can complete it later. The billing is still setup but is marked incomplete. You may keep receiving emails to complete billing setup and your console in such cases would remain active for a couple of days or weeks before they close it. This method is not recommended.
4. After you complete billing setup you should go back to Cloud Console Home Page.

### Setup Cloud Storage
1. On the home page at the center you would see Cloud Storage in their list of main products. If you dont see this here, If you click the menu on the top left, there is a list of products, which should include "Cloud Storage". Click on this.
2. In the Cloud storage page, you should see browser, transfer, transfer appliance and settings. Only browser is relevant to us. 
-- Lets call this the Cloud Storage Browser Page
3. If you landed on the browser page and do not have any storage buckets, you should see a large button asking you to create bucket. Other users would see an option to create bucket on the top of their screen above existing buckets.
4. Click on create bucket. If this is the first use, you may be asked for some project name and organization name. This is to enable good organization of your assets. You can choose any relevant names for project and organization. You can create organization later if necessary.
-- Older users would straight away go to the next page
5. Choose name. Be careful here. You must choose exactly "www.your-domain.com"
6. In Default Storage Class choose Regional
7 In location, choose the cheapest or the closest option to you depending on your priorities. 
-- If you open out the advanced settings, you should see Labels and encryption, neither of these need to be touched.
8. Click on create.
9. You would be back on the Cloud Storage Browser Page. You should be able to see your bucket by the name of "www.your-domain.com"
10. You now have your very own bucket. Now it is empty, we will fill it with your website shortly. At this point we will go back to godaddy to create a record to live update the website when the bucket is changed. 

## Create CNAME record on godaddy
1. Go back to Your DNS Page on godaddy.
2. You should see the records section on top. 
3. If you see existing unnecessary CNAME records, they ought to be removed. This can be done by clicking the pencil next to the record on the right (edit) and then the trash button on the right.
4. Click on Add record in the records section.
5. Choose type CNAME
6. The options are as follows:
-- "Host" is "www"
-- "Points to" is "c.storage.googleapis.com." (note the dot at the end)
-- "TTL" can be 1 Hour or 1/2 Hour.
7. Your google storage bucket should now be linked to godaddy and your website will update live.

## Create public permissions for your storage bucket
1. Go back to Cloud Storage Browser page
2. You should see the bucket name as "www.your-domain.com" along with location, public access level, lifecycle, labels and requester pays. At this point we are interested in making the bucket public. 
3. At the right end of the row with the bucket you should be able to see 3 dots. Click this for settings. You will see (a) Edit bucket permissions (b) Edit labels (c) Edit website configuration and (d) edit default storage class.
4. Of these the most important to us are (a) Edit bucket permissions and (c) edit website configuration
5. Click on edit bucket permissions. You will see an option to add members. Use the following options:
-- Add the user "allUsers".
-- It will ask you to select a role. In the dropdown, you should see a menu option called Storage. Under this choose Storage Object Viewer. This means that the all public can see your storage objects, ie your website. Now your google cloud storage is ready to host a website
-- Click on save
6. It may show you a warning "This bucket is public and can be accessed by anyone on the Internet.". This is ok and is good because you want your website on the internet!
7. Click the three dots next to the row displaying yoru bucket in the Cloud Storage Browser Page. Click on "Edit website configuration"
8 You will be asked to choose an index page and a 404 page. 
-- Choose index page as "index.html" 
-- and choose 404 page "404.html". The 404 page is where all hits to pages which don't exist in your site are redirected to.
9. The storage bucket is good to go.
10. Now all that is remaining is for you to fill the storage bucket.
