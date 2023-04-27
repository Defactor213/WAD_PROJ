[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=454305&assignment_repo_type=GroupAssignmentRepo)
# <img src="supreme-weebs-anime-app/src/assets/logo.jpg?raw=true" style="width:100px"> is216-project #

## <img src="supreme-weebs-anime-app/src/assets/logo.jpg?raw=true" style="width:20px"> IS216 - Group 14 - WAD Kings ##
<!-- * Please update the above header. For example, it should look like this: **IS216 - Group 123 - Supreme Children**
* Who are your group members? List everyone's full name, SMU email address, and other info you wish to put here.  -->

Stephanie Winata (stephaniew.2020@scis.smu.edu.sg), <br />
Euan Chng Zhixiang (euanchng.2020@scis.smu.edu.sg), <br />
Shubhasheesh Prakash (shubhashees.2020@scis.edu.smu.sg), <br />
Eric Li (ericli.2020@scis.smu.edu.sg) 


## <img src="supreme-weebs-anime-app/src/assets/logo.jpg?raw=true" style="width:20px"> Project Overview ##
<!-- * Describe your project. What is it called? What does it do? Why did you make this web application? Who will benefit from using your web application? Describe your users - who are they? (anyone? or specific target age group or gender? region? country?) -->


In this project, we aim to build a web-based one-stop portal for all anime lovers to get their dose of the best and trending anime. Users are offered a personalized list of anime based on their favourite genre. Adding an aspect of sociability, users are able to add friends and get a feed of their latest status. Much like twitter, users can post a short status update that will show up on their friend’s feed. 
<br />
<br />

## Login Page ##
<img src="/supreme-weebs-anime-app/src/assets/readme/login.png?raw=true">

## Homepage ##
<img src="/supreme-weebs-anime-app/src/assets/readme/homepage.png?raw=true">

<!-- * Feel free to use diagrams and images to describe. For example, if you have a system architecture diagram, please place it here and describe it. If you have a business process diagram, you can also place it here and describe it. -->
## System architecture diagram ##
<img src="/supreme-weebs-anime-app/src/assets/readme/SAD.jpg?raw=true">

<img src="/supreme-weebs-anime-app/src/assets/readme/sitemap.jpg?raw=true">


## Figma ##
https://www.figma.com/file/sPpn3gklow7pJmC0jxApFQ/Anime-Nation?node-id=0%3A1
    
## <img src="supreme-weebs-anime-app/src/assets/logo.jpg?raw=true" style="width:20px">How to Install and Run Our Web Application (for Developers) ##
<!-- * If a new developer were to have access to your IS216 project GitHub repo (and subsequently your source code files) and replicate your development environment on his development laptop computer, what are the steps he should take?
* What does he needs to install on his development laptop computer? How can he download your project files and run it on his own computer?
* Provide a step-by-step description of how to get the development environment running. You can choose to do so for at least 1 Operating System (Windows 10 or Mac OS).
* Feel free to use diagrams and images to describe. -->

Instructions for Windows:
1. Ensure that nodejs version 14.18.1 and npm version 6.14.15 is installed on the device. <br />
    a. to check, run node -v and npm -v in the command terminal
    b. if node is not found, search windows for advanced systems settings --> environment variabless --> new , with name being nodejs and directory being where the nodejs folder       is
2. Navigate to the supreme-weebs-anime-app directory using the terminal, and from within that directory,  run **npm install** inside the terminal
3. Create a file in the supreme-weebs-anime-app directory called "**.eslintrc.js**" and paste the data from the following link https://pastebin.com/8iCxsmVw
4. Run **npm run serve** to startup the app
5. click on the localhost link to view the app


## <img src="supreme-weebs-anime-app/src/assets/logo.jpg?raw=true" style="width:20px"> [OPTIONAL] How to Deploy Our Web Application (for Developers) ##
<!-- * As an optional X-factor, did your group deploy your web application to cloud? (e.g. AWS, GCP, Azure, Heroku, Digital Ocean, or similar) If so, provide a step-by-step description of how a developer can deploy your web application
* Feel free to use diagrams and images to describe. -->
Instructions for windows:
1. Ensure that nodejs version 14.18.1 and npm version 6.14.15 is installed on the device.
2. run **npm install** inside the terminal 
3. Create a file in the supreme-weebs-anime-app directory called "**.eslintrc.js**" and paste the data from the following link https://pastebin.com/8iCxsmVw
4. Create an account at firebase at https://firebase.google.com/ and remember your login credentials
5. Select add new project and set a unique name
6. run **npm run build** to build the app, which will create the dist folder
7. run **npm install -g firebase-tools**
8. run **firebase login** to log in to firebase. Select **Y** for usage and yes for other prompts 
9. initialize the firebase with **firebase init** and choose yes after that
10. Select the **Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys** option
11. after choosing hosting, select the existing project of <uniue name you have given>
12. The next step is to choose the **dist** folder that was generated from the npm build
13. Follow these options for the next steps
    * What do you want to use as your public directory? **dist**
    * Configure as a single-page app (rewrite all urls to /index.html)? **Yes**
    * Set up automatic builds and deploys with GitHub? **No**
    * File dist/index.html already exists. Overwrite? **No**    
13. lastly, run **firebase deploy**, and the app will be deployed at the Hosting URL!

## <img src="supreme-weebs-anime-app/src/assets/logo.jpg?raw=true" style="width:20px"> Deployed Site On Firebase ##
* Want to visit our currently deployed website instead then click on https://supreme-weebs-tester-db.web.app
    * Login:nicholas@gmail.com
    * Password: nicholas123

## <img src="supreme-weebs-anime-app/src/assets/logo.jpg?raw=true" style="width:20px"> How to Use Our Web Application (for Visitors to our Website) ##
<!-- * Yay! Your website is READY for visitors!
* Provide a step-by-step description of what the user/visitor can/should do upon visiting your website for the first time.
* It would be wonderful if you could include **screenshot images** of web pages to demonsrate what the user/visitor can/should do. -->

User registration and authentication (session management) <br />
User profile (password, email, wishlist,favourites,genres)<br />
The main homepage with a few main categories like trending, global top 50, all time favourites which users can also filter by genre. All the information and graphics needed is given by Jikan API.<br />
Users can have a wishlist for shows they are going to watch (users will have 1 wishlist, but the wishlist will be sorted) <br />
Users can see their friend’s top genre and get recommendations generated based on their preferred genres(this is generated from their wishlist,favourites,information gathered from registration)



## <img src="supreme-weebs-anime-app/src/assets/logo.jpg?raw=true" style="width:20px"> Other Cool Things we did ##
X-Factors
1. Jikan API 
    a. API provides information about shows, and does not have daily lmits for number of calls that we can make. Can obtain various information about shows such as:
        i.Name of show
        ii. Review score on MAL
        iii. Genre of show 
        iv. Rating for viewers 
        v. Thumbnail image 
    b. Users will be able to search by:
        i.Search by name
        ii. Search by genre
        iii. Search current top 50 shows
        iv. Search top 50 shows all time
3. Using Vue-CLI for prototyping, and building of the app
4. User authentication in firebase
5. User information storage in firebase
6. Deployment of app in firebase

<!-- ## 🤓 Useful Resources ##
* [**Markdown** Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
* [**GOOD** README Example 1](https://github.com/testing-library/cypress-testing-library)
* [**GOOD** README Example 2](https://github.com/typeorm/typeorm)
* [**GOOD** README Example 3](https://github.com/amark/gun)
* [**GOOD** README Example 4](https://github.com/google/leveldb) -->
