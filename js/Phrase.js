/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const phraseDiv = document.getElementById('phrase');
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
       list[i].textContent = this.phrase[i];
     } else if (/\s/.test(this.phrase[i])) {
       list[i].className = 'space';
       list[i].textContent = ' ';
     }
   }
 }

 checkLetter(key) {
   let match = false;
   let list = ul.getElementsByTagName('li');
   for (let i = 0; i < list.length; i++) {
     if (list[i].textContent === key) {
       match = true;
       this.showMatchedLetter(list[i]);
     }
   }
   if (match) {
     return true;
   } else {
     return false;
   }
 }

 showMatchedLetter(letter) {
   letter.classList.remove('hide');
   letter.classList.add('show');
 }
}
