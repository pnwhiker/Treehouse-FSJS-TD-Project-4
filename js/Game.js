/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

let qwertyDiv = document.getElementById('qwerty');
let phraseListItems = null;


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
        console.log(this.activePhrase);
        phrase.addPhraseToDisplay(this.activePhrase);

        phraseListItems = document.getElementsByClassName('hide')
        console.log(phraseListItems);
        
    }


    checkForWin () {
        //checks to see if player has revealed all of the letters in the active phrase
    }

    removeLife () {
        
    }

    gameOver () {
        //display original start screen overlay, display win / loss message using the associated CSS class
        
    }

    handleInteraction () {
        qwertyDiv.addEventListener('click', (event) => {
            let letterButton = event.target;
            
            // clicked letter must be captured - DONE
            let userGuess = event.target.textContent; 
            // check letter guessed for true vs. false inside randPhrase
            let checkLetter = phrase.checkLetter(this.activePhrase, userGuess);

            if (checkLetter) {
                 phrase.showMatchedLetter(phraseListItems, userGuess)
                 letterButton.disabled = true;
                 // game.checkForWin()
            } else {
                letterButton.classList.add('wrong')
                letterButton.disabled = "true";
            }
            // if lives = 0 or if checkwin is true, reveal all letters

            // if game is won / lost a message should display on screen

        })
    }


}