WDI-ldn-24 PROJECT1 <hr>
My first project
Technologies used:
As first project I have created a simple card memory game with a 3d flipping effect and name it Flippit. To begin with I have created an object oriented Game board which consist of a 6x6 grid. The board will be hidden once the page is loaded and the player will have to click on one of the three levels available to start the game and make the board appear

<img width="816" alt="screen shot 2016-12-19 at 08 51 21" src="https://cloud.githubusercontent.com/assets/23073318/21306367/7aba8894-c5c8-11e6-98fd-d26d422a10ad.png">

I have then uploaded 18 pictures into my images folder which I have concatenated into an array to create two pairs of each card. I have then shuffled the cards using the Durstenfeld shuffle algorithm (see screenshot below) and store them into a deck array (see screenshot below).

Within the game object I have then created a div container and two nested divs for the front and back of each card and use the append method to add it to the main div (board).

Once created the card element I have used a function which selects the card from the chosen cards


