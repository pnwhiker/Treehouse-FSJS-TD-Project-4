/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */



 class Game {
   constructor () {
       this.missed = 0;
       this.phrases = [
           "the dog runs",
           "the cat meows",
           "the bird chirps",
           "the lion roars",
           "the cow moos",
       ];
       this.activePhrase = null;
   }

    getRandomPhrase () {
        let randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;
    }

    startGame () {
        const overlayDiv =  document.getElementById('overlay');
        overlayDiv.style.display = 'none';
        this.activePhrase = this.getRandomPhrase(this.phrases)
        phrase.addPhraseToDisplay(this.activePhrase);
        return this.activePhrase;
    }

    handleInteraction () {
        const qwertyDiv = document.getElementById('qwerty');
        qwertyDiv.addEventListener('click', (event) => {
            let userGuess = event.target.innerHTML;
            // clicked letter must be captured
            phrase.checkLetter(this.activePhrase, userGuess)
            
            
            
            //clicked letter checked against phrase

            //if userGuess is in phrase, display in phrase

            // else remove 1 life from scoreboard

            // if lives = 0 or if checkwin is true, reveal all letters

            // if game is won / lost a message should display on screen

        })
    }

    // checkForWin () {
    //     //checks to see if player has revealed all of the letters in the active phrase
    // }

    // removeLife () {
    //     // removes a life from the scoreboard and replaces the pic w/ alt pic of heart
    // }

    // gameOver () {
    //     //display original start screen overlay, display win / loss message using the associated CSS class
        
    // }

}