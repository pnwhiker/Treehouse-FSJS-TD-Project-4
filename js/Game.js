/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */



 class Game {
   constructor () {
       this.missed = 0;
       this.phrases = [
           new Phrase("the bird chirps"),
           new Phrase("the mouse squeaks"),
           new Phrase("the cat meows"),
           new Phrase("the bog barks"),
           new Phrase("the hen clucks"),
           ];
       this.activePhrase = null;
       
   }


    getRandomPhrase () {
        let randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;
    };



    startGame () {

        const overlayDiv = document.getElementById('overlay');
        overlayDiv.style.display = 'none';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay(this.activePhrase.phrase)
        
             
    }

    

    checkForWin () {
  
    };
 

    removeLife (livesRemaining) {
     
    };

    gameOver () {

    };

    handleInteraction () {
        let qwertyDiv = document.getElementById('qwerty')
        
        
        qwertyDiv.addEventListener("click", (e) => {
            let letterInput = e.target.innerText;
            console.log(letterInput)
            if (this.activePhrase.checkLetter(this.activePhrase.phrase, letterInput)) {

            } else {

            };

        });
        


    };

}