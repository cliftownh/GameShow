/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

let phraseDiv = document.getElementById('phrase');
let qwerty = document.getElementById('qwerty');
let ul = phraseDiv.querySelector('ul');

 class Phrase {
   constructor(phrase) {
     this.phrase = phrase.toLowerCase().split('');
   }

   addPhraseToDisplay() {
     for (let i = 0; i < this.phrase.length; i++) {
       ul.appendChild(document.createElement('li'));
     }

     let list = ul.getElementsByTagName('li');

     for (let i = 0; i < list.length; i++) {
       if (/[a-z]/.test(this.phrase[i])) {
         list[i].className = `hide letter ${this.phrase[i].valueOf()}`;
         list[i].innerText = this.phrase[i];
       } else if (/\s/.test(this.phrase[i])) {
         list[i].className = 'space';
         list[i].innerText = ' ';
       }
     }
   }

   checkLetter(key) {
     for (let i = 0; i < this.phrase.length; i++) {
       if (this.phrase[i] === key) {
         this.showMatchedLetter(key);
       } else {
         return false;
       }
     }
   }

   showMatchedLetter(letter) {
     let list = ul.getElementsByTagName('li');
     
     for (let i = 0; i < this.phrase.length; i++) {
       if (list[i].classList.contains(letter)) {
         list[i].classList.remove('hide');
         list[i].classList.add('show');
       }
     }
   }
}

let ph = new Phrase('Hello World');
ph.addPhraseToDisplay();
 // <div id="phrase" class="section">
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
