/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const score = document.getElementById('scoreboard');
let phraz;
let hearts = score.getElementsByTagName('img');
let msg = document.getElementById('game-over-message');

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
      this.checkForWin();
    } else {
      key.classList.add('wrong');
      this.removeLife();
    }
  }

  removeLife() {
    if (this.missed < 4) {
      this.missed += 1;
      hearts[this.missed - 1].src = 'images/lostHeart.png';
    } else {
      this.missed += 1;
      this.gameOver();
    }
  }

  checkForWin() {
    let letters = ul.getElementsByClassName('letter');
    let correct = ul.getElementsByClassName('show').length;

    if (correct === letters.length) {
      this.gameOver();
    }
  }

  gameOver() {
    overlay.style.display = 'flex';
    if (this.missed === 5) {
      overlay.className = 'lose';
      msg.textContent = 'Sorry, better luck next time!';
    } else if (this.missed < 5) {
      overlay.className = 'win';
      msg.textContent = 'Congratulations, you won!';
    }
    this.missed = 0;
  }

}
