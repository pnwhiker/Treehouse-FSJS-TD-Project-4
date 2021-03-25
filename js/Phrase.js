/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase {
     
    constructor (phrase) {
         this.phrase = phrase.toLowerCase();
    }
   
    addPhraseToDisplay(phrase) {

          let phraseUl = document.createElement('ul');
          phraseUl.innerHTML = "";
          let phraseDiv = document.getElementById('phrase')
          phraseDiv.innerHTML = "";
          
          phrase = phrase.split("")
          
          phrase.forEach(letter => {
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
          phraseDiv.appendChild(phraseUl);
     };
     
     checkLetter(inputPhrase, inputLetter) {
          if (inputPhrase.includes(inputLetter)) {
               return true;
          } else {
               return false; 
          }; 
     };

};




//      showMatchedLetter(inputArr, inputLetter) {
//           [...inputArr].forEach((li) => {
//                if (li.textContent == inputLetter) {
//                     li.classList.remove('hide');
//                     li.classList.add('show');
//                };
//           })
//      };
    

