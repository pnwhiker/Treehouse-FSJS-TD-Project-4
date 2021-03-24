/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

let lifeCount = 5;
let lifeHearts = Array.from(document.querySelectorAll('img[alt="Heart Icon"]'));


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

        const overlayDiv = document.getElementById('overlay');
        overlayDiv.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay(this.activePhrase.phrase)
        
    }


    checkForWin () {
        let phraseList = document.querySelectorAll('li.letter')
        phraseList = Array.from(phraseList);
        function isVisible (li) {
            return li.classList.contains('show');
        }
        if (phraseList.every(isVisible)) {
            console.log('all revealed')
            return true;
        } else {
            console.log('NOT all revealed')
            return false
            
        }
    };
 

    removeLife (livesRemaining) {
        // LEFT OFF HERE :)
        if (livesRemaining == 4) {
            lifeHearts[4].src = "images/lostHeart.png"
        } else if (livesRemaining == 3) {
            lifeHearts[4].src = "images/lostHeart.png"
            lifeHearts[3].src = "images/lostHeart.png"
        } else if (livesRemaining == 2) {
            lifeHearts[4].src = "images/lostHeart.png"
            lifeHearts[3].src = "images/lostHeart.png"
            lifeHearts[2].src = "images/lostHeart.png"
        } else if (livesRemaining == 1) {
            lifeHearts[4].src = "images/lostHeart.png";
            lifeHearts[3].src = "images/lostHeart.png";
            lifeHearts[2].src = "images/lostHeart.png";
            lifeHearts[1].src = "images/lostHeart.png";
        } else if (livesRemaining == 0) {
            lifeHearts[4].src = "images/lostHeart.png";
            lifeHearts[3].src = "images/lostHeart.png";
            lifeHearts[2].src = "images/lostHeart.png";
            lifeHearts[1].src = "images/lostHeart.png";
            lifeHearts[0].src = "images/lostHeart.png";
        }
    };


    gameOver () {

    };


    showMatchedLetter(matchedLetter) {
        let phraseList = document.querySelectorAll('li.letter');
        phraseList = Array.from(phraseList);
        //console.log(phraseList);
        phraseList.forEach(listItem => {
            if (listItem.innerHTML == matchedLetter ) {
                listItem.classList.remove('hide')
                listItem.classList.add('show');
            }
        });

    }

    handleInteraction () {

        let qwertyDiv = document.getElementById('qwerty')
        qwertyDiv.addEventListener("click", (e) => {
            
            if (e.target.tagName == 'BUTTON') {

                let letterInput = e.target.innerText;
                let selectedLetterButton = e.target;
                selectedLetterButton.disabled = true;

                if (this.activePhrase.checkLetter(this.activePhrase.phrase, letterInput)) {
                    console.log(letterInput + " is included");
                    this.showMatchedLetter(letterInput);
                    this.checkForWin();
                } else {
                    lifeCount -= 1;
                    this.removeLife(lifeCount);
                    console.log(letterInput + " is not included");
                };
            };

        });
        

    };

}