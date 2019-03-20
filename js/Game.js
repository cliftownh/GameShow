/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

let phraz;

class Game {
  constructor(arr) {
    this.missed = 0;
    this.phrases = arr;
    this.activePhrase = null;
  }

  startGame() {
    this.activePhrase = this.getRandomPhrase();
    phraz = new Phrase(this.activePhrase);
    phraz.addPhraseToDisplay();
  }

  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

  handleInteraction(key, match) {
    if (match) {
      key.classList.add('chosen');
    } else {
      key.classList.add('wrong');
      // removeLife();
    }
  }

  // removeLife() {
  //
  // }

}
