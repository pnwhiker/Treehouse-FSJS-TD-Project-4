/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

let lifeHearts = Array.from(document.querySelectorAll('img[alt="Heart Icon"]'));
const overlayDiv = document.getElementById('overlay');
let gameOverMessage = document.getElementById('game-over-message');

 class Game {
   constructor () {
       this.missed = 0;
       this.phrases = [
           new Phrase("the bird chirps"),
           new Phrase("the mouse squeaks"),
           new Phrase("the cat meows"),
           new Phrase("the dog barks"),
           new Phrase("the hen clucks"),
           ];
       this.activePhrase = null;
       
   }


    getRandomPhrase () {
        let randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;
    };


    startGame () {

        overlayDiv.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        console.log(this.activePhrase);
        this.activePhrase.addPhraseToDisplay(this.activePhrase.phrase)
        
    }


    checkForWin () {
        let phraseList = document.querySelectorAll('li.letter')
        phraseList = Array.from(phraseList);
        function isVisible (li) {
            return li.classList.contains('show');
        }
        if (phraseList.every(isVisible)) {
            //console.log('all revealed')
            return true;
        } else {
            //console.log('NOT all revealed')
            return false
            
        }
    };
 

    removeLife () {

        this.missed = this.missed + 1;
        //console.log(this.missed);
       
        if (this.missed == 1) {
            lifeHearts[4].src = "images/lostHeart.png"

        } else if (this.missed == 2) {
            lifeHearts[4].src = "images/lostHeart.png"
            lifeHearts[3].src = "images/lostHeart.png"

        } else if (this.missed == 3) {
            lifeHearts[4].src = "images/lostHeart.png"
            lifeHearts[3].src = "images/lostHeart.png"
            lifeHearts[2].src = "images/lostHeart.png"

        } else if (this.missed == 4) {
            lifeHearts[4].src = "images/lostHeart.png";
            lifeHearts[3].src = "images/lostHeart.png";
            lifeHearts[2].src = "images/lostHeart.png";
            lifeHearts[1].src = "images/lostHeart.png";

        } else if (this.missed == 5) {
            lifeHearts[4].src = "images/lostHeart.png";
            lifeHearts[3].src = "images/lostHeart.png";
            lifeHearts[2].src = "images/lostHeart.png";
            lifeHearts[1].src = "images/lostHeart.png";
            lifeHearts[0].src = "images/lostHeart.png";
            this.gameOver('lose');
        }

    };


    gameOver (endGameState) {

        let phraseList = document.querySelectorAll('li.letter');
        phraseList = Array.from(phraseList);
        phraseList.forEach(listItem => listItem.remove());

        let keyboardButtons = document.querySelectorAll('button.key');
        keyboardButtons = Array.from(keyboardButtons);
        keyboardButtons.forEach(button => button.classList = "key");

        keyboardButtons.forEach(button => button.disabled = false);
        this.activePhrase = null;

        this.missed = 0;
        lifeHearts[4].src = "images/liveHeart.png";
        lifeHearts[3].src = "images/liveHeart.png";
        lifeHearts[2].src = "images/liveHeart.png";
        lifeHearts[1].src = "images/liveHeart.png";
        lifeHearts[0].src = "images/liveHeart.png";

        if (endGameState == 'lose') {
            overlayDiv.className= 'lose';
            overlayDiv.style.display = 'block';
            gameOverMessage.innerHTML = "Better Luck Next Time! Please Play Again :)"

        } else if (endGameState == 'win') {
            overlayDiv.className= 'win';
            overlayDiv.style.display = 'block';
            gameOverMessage.innerHTML = "You Are Victorious! Please Play Again :)"
        }

    };


    showMatchedLetter(matchedLetter) {
        let phraseList = document.querySelectorAll('li.letter');
        phraseList = Array.from(phraseList);
        phraseList.forEach(listItem => {
            if (listItem.innerHTML == matchedLetter ) {
                listItem.classList.remove('hide')
                listItem.classList.add('show');
            }
        });

    }

    handleInteraction (e) {

        if (e.target.tagName == 'BUTTON') {
            
            let letterInput = e.target.innerText;
            let selectedLetterButton = e.target;
            selectedLetterButton.disabled = true;

            if (this.activePhrase.checkLetter(this.activePhrase.phrase, letterInput)) {

                e.target.classList.add('chosen');
                this.showMatchedLetter(letterInput);

                if (this.checkForWin()) {
                    this.gameOver('win');
                }  
            } else {
                e.target.classList.add('wrong');
                this.removeLife(); 
            };
        };
    };

};

