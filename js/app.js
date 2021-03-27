/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let startButton = document.getElementById('btn__reset');
let game;

startButton.addEventListener('click', () => {
    
    game = new Game();
    game.startGame();
    

});


let qwertyDiv = document.getElementById('qwerty');
qwertyDiv.addEventListener('click', (clickedButton) => {
    game.handleInteraction(clickedButton);
});







