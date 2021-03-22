/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */








let startButton = document.getElementById('btn__reset')

startButton.addEventListener('click', () => {
    
    const game = new Game();
    game.startGame();
    game.handleInteraction();

})






