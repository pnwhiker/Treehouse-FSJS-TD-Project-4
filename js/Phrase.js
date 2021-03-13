/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase {
    constructor (phrase) {
         this.phrase = phrase;
    }
   
    addPhraseToDisplay(inputPhrase) {
          let phraseUl = document.createElement('ul');
          phraseUl.innerHTML = "";
          let phraseDiv = document.getElementById('phrase')
          phraseDiv.innerHTML = "";
          
          let stringToArray = inputPhrase.split("");
          
          
          stringToArray.forEach(letter => {
               if (letter === " ") {
                    let li = document.createElement('li');
                    li.className = `space`;
                    phraseUl.appendChild(li);
               } else {
                    let li = document.createElement('li');
                    li.innerHTML=`${letter}`;
                    li.className = `hide letter ${letter}`;
                    phraseUl.appendChild(li);
               }
               

          });
          //console.log(phraseUl);
          phraseDiv.appendChild(phraseUl)
          return phraseDiv;
          
     }
     checkLetter(inputPhrase, inputLetter) {
          if (inputPhrase.includes(inputLetter)) {
               return true;
          } else {
               return false; 
          }; 
     }

     showMatchedLetter(inputArr, inputLetter) {
          [...inputArr].forEach((li) => {
               if (li.textContent == inputLetter) {
                    li.classList.remove('hide');
                    li.classList.add('show');
               };
          })
     }

     checkForWin() {
          
     }
    
 };
