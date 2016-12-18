WDI-ldn-24 PROJECT1
My first project
Technologies used:
As first project I have created a simple card memory game with a 3d flipping effect and name it Flippit. To begin with I have created a 6x6 grid and uploaded 18 pictures into my images folder which I have concatenated into an array to create two pairs of each card. I have then shuffled the cards using the Durstenfeld shuffle algorithm (see screenshot below) and store them into a deck array (see screenshot below).

<img width="706" alt="screen shot 2016-12-14 at 09 53 15" src="https://cloud.githubusercontent.com/assets/23073318/21177813/b2653eb6-c1e4-11e6-8eea-6020df8bf9dc.png">
<img width="512" alt="screen shot 2016-12-14 at 10 15 53" src="https://cloud.githubusercontent.com/assets/23073318/21178215/653dbeea-c1e6-11e6-9353-5ef3dc9bda71.png">

Within the game object I have then created a div container and two nested divs for the front and back of each card and use the append method to add it to the main div (board).

Once created the card element I have used a function which selects the card from the chosen cards
