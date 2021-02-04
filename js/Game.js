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

    getRandomPhrase (phrases) {
        let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    }
}