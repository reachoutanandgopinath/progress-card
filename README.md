# progress-card

 This web component (highly experimental) helps you to create a custom UI component like below.

  It has 3 types - Compact, Medium and Relaxed. The UI will be displayed by passing repsective parameters.

# How UI looks

<img width="303" alt="Screenshot 2023-05-14 at 5 17 50 PM" src="https://github.com/reachoutanandgopinath/ember-progress-card/assets/122727376/a8fc85e0-60a3-4866-8934-d1c4efbad365">

# Usage

Include the below script and invoke the respective card type.


    <script type="module" src="https://unpkg.com/progress-card@1.0.0/progress-card.js?module"></script>

    <progress-card @title="Growth Value" @percentage="5" @userName="John Dec" @color="#c823ee" @subTitle="3 key results"></progress-card>


Ex:

   For type - Compact 

     <progress-card @title="Growth Value" @percentage="5" @userName="John Dec" @color="#c823ee" @subTitle="3 key results"></progress-card>

   For type - Medium
   
     <progress-card @title="Sass Industry - 2040"  @percentage="100" @type="medium" @color="#c823ee" @userName="John Dec" ></progress-card>

   For type - Relaxed
   
    <progress-card  @title="IT sector" @subTitle="3 key results" @color="#c823ee" @percentage="33" @type="relaxed" @userName="Alex volta" @userUrl="https://cdn.iconscout.com/icon/free/png-256/free-laptop-user-1-1179329.png"></progress-card>


Parameters allowed:

    @title, @subTitle, @color, @percentage (Designed to show percentage only), @type, @userName, @userUrl (User's thumbnail)

# Demo

 https://jsfiddle.net/anandi2i/mrjx94v2/7/


# Development

 Check out this repository, then run:
 
    cd progress-card
    npm install


Then to start a local development server (using Vite):

    npm run dev
    
    Then visit http://localhost:3000/