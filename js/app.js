/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = "";
const phrase = new Phrase();

let startButton = document.getElementById('btn__reset')
startButton.addEventListener('click', () => {
    // console.log(phraseListItems);
    game = new Game();
    game.startGame();
    game.handleInteraction();

    
})






