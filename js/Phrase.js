// Phrase.js

const phraseDiv = document.getElementById('phrase');
let ul;
let list;

class Phrase {
 constructor(phrase) {
   this.phrase = phrase.toLowerCase().split('');
 }
 // Add li elements for each part of the phrase
 addPhraseToDisplay() {
   ul = phraseDiv.querySelector('ul');
   for (let i = 0; i < this.phrase.length; i++) {
     ul.appendChild(document.createElement('li'));
   }
   list = ul.getElementsByTagName('li');
   // Give each li the appropriate class name
   for (let i = 0; i < list.length; i++) {
     if (/[a-z]/.test(this.phrase[i])) {
       list[i].className = `hide letter ${this.phrase[i].valueOf()}`;
       list[i].textContent = this.phrase[i];
     } else if (/\s/.test(this.phrase[i])) {
       list[i].className = 'space';
       list[i].textContent = ' ';
     }
   }
   return list;
 }
 // Check to see if selected letter exists in the phrase
 checkLetter(key) {
   let match = false;
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
 // If the letter is in the phrase, it is revealed
 showMatchedLetter(letter) {
   letter.classList.remove('hide');
   letter.classList.add('show');
 }
}
