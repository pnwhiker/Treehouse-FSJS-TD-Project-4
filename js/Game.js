/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

let lifeCount = 5;
console.log(lifeHearts);

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
        let lifeHearts = Array.from(document.querySelectorAll('img[alt="Heart Icon"]'));
        // LEFT OFF HERE :)
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
            
            let letterInput = e.target.innerText;
            //console.log(letterInput)
            if (this.activePhrase.checkLetter(this.activePhrase.phrase, letterInput)) {
                console.log(letterInput + " is included");
                this.showMatchedLetter(letterInput);
                this.checkForWin();
            } else {
                lifeCount -= lifeCount;
                this.removeLife(lifeCount)
                console.log(letterInput + " is not included");
            };

        });
        

    };

}