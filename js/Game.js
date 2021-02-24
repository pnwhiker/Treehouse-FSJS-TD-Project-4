/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */



 class Game {
   constructor () {
       this.missed = 0;
       this.phrases = [
           "AA",
           "AB",
           "AC",
           "AD",
           "AE",
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

       

    }
}