# WDI-PROJECT-1

## Fade

![Fade image] (/Users/Josceline/development/WDI_PROJECT_1/images/Fade-ReadMe-Image-01.jpg)

### Introduction

This was my first project on the General Assembly Web Development Immersive Course. The assignment for this project was to create a game. For a long time I have been interested in how people's emotions can be influenced by the things they interact with. With this in mind I wanted to create a game which was absorbing whilst also being visually calming. 

### The Game
Fade was a game which tested peoples ability to temporarily store information and adapt it dependent on new information given to them. A colour faded onto the full screen and faded out leaving spots in that colour and others. The spots then begun to fade out also. The aim was for the user to click as many of the spots of the the colour they had just been shown before they faded away. The user got a point for every spot they clicked on of the correct colour and had a point reducted for every spot they clicked on of the wrong colour. Once the spots had fully faded out the users score faded onto the page. At this point the user could choose to exit the game. If they did not the game would repeat with an increasing number of spot in each round. 

### The Build 
HTML - CSS - JavaScript / JQuery

To begin I wrote some pesudo code breaking down how I would get the game to work. The next step was to work out how create spots which would be both random in size, colour and their position on the page. The spots were divs with a 50% radius to make them circular. The size and postion was assigned using a math random function to give each div an individual width height and x and y value. Finally the colour was assigned from an array of 5 different HEX codes. 

Once I had the spots appearing I used an animate and timeout function to fade in a background with a colour which had also been selected from the array of HEX codes. Then created a function which would increment the players score if the HEX value for the div which was clicked by the user was equal to the HEX value for the background and reduce the score if not. 

Finally I added an instruction page to for the game to open on which would fade out on clicking a start button and a score page which would display the users score and give them the option to exit the game.  

### Successes
* I was particularly please with the success of the visual design. 

* Working out how to randomise the position of the spots and their position on the page. 

### Challenges
* Working with the time out functions to get everything to appear at the correct time was quite challenging especailly once I added extra levels

### Next Steps
At the minute users are only able to see the score for the last game they played. In the future I would like to allow users to login and see their score history and a leaderboard for high scores. 