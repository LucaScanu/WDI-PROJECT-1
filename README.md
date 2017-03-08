WDI-ldn-24 PROJECT1 <hr>

##FLIPPIT <br>

###Overview <br>

My first project is a simple card memory game with a 3d flipping effect. To begin with I have created an object oriented Game board which consist of a 6x6 grid. The board is initially hidden as the page loads and the player has the choice to click on the instructions button to find out the rules of the game or the play button to start playing.

<img src="/images/readme/homepage.png" width="816" alt="screen shot 2016-12-19 at 08 51 21">

###How to play

The aim of the game is to click on each square of the board to pair the pictures underneath until the board is emptied. If the pictures aren't paired they will turn back for the next turn.

###jQuery
I have uploaded 18 pictures into my images folder which I have concatenated into an array to create two pairs of each card. I have then shuffled the cards using the Durstenfeld shuffle algorithm and store them into a deck array.

Within the Game Object I have then created a div container and two nested divs for the front and back of each card and use the append method to add it to the main div (board).

I have created a series of functions that will pair the index of the the card element with the index of the image and append the image to the element.
Another function will check if the images correspond every time two squares have clicked on. A corresponding sound will play whether the images have been matched or not.

###Styling
I gave the app a retro look reminiscent of early web pages with bold colours and simple commands.

###Credits

Many thanks to my course instructors Alex and Rane for their help and advice on this project.

###Disclaimer

This site was built as part of an educational purposes and uses content taken from different sources. The images feature well know animated series. If - for any reason - the owner of any of the pieces of content so wishes, I am very happy to edit the game accordingly.
