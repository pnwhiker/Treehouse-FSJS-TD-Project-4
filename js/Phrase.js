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
          let li = document.createElement('li');
          let stringToArray = inputPhrase.split("");
          
          stringToArray.forEach(letter => {

               li.innerHTML=`${letter}`;
               phraseUl.appendChild(li);
               console.log(phraseUl);

          });
          phraseDiv.appendChild(phraseUl)
          return phraseDiv;
          
     }

    
 };
 

//  <div id="phrase" class="section">
//     <ul>
//         <li class="hide letter h">h</li>
//         <li class="hide letter o">o</li>
//         <li class="hide letter w">w</li>
//         <li class="space"> </li>
//         <li class="hide letter a">a</li>
//         <li class="hide letter r">r</li>
//         <li class="hide letter e">e</li>
//         <li class="space"> </li>
//         <li class="hide letter y">y</li>
//         <li class="hide letter o">o</li>
//         <li class="hide letter u">u</li>
//     </ul>
// </div>