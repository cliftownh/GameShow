// Game.js

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
  /* The game starts by getting a random phrase and
     assigning it as a new Phrase object */
  startGame() {
    this.activePhrase = this.getRandomPhrase();
    phraz = new Phrase(this.activePhrase);
    phraz.addPhraseToDisplay();
  }

  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }
  /* If the letter is matched in the phrase,
   * the key gets the chosen class and turns blue,
   * then check to see if all letters have been matched.
   * If the letter doesn't match, the key gets the wrong
   * class and turns yellow and a heart is lost. */
  handleInteraction(key, match) {
    if (match) {
      key.classList.add('chosen');
      this.checkForWin();
    } else {
      key.classList.add('wrong');
      this.removeLife();
    }
  }
  // Game ends if 5 hearts are lost
  removeLife() {
    if (this.missed < 4) {
      this.missed += 1;
      hearts[this.missed - 1].src = 'images/lostHeart.png';
    } else {
      this.missed += 1;
      this.gameOver();
    }
  }
  // If all letters are matched, game ends
  checkForWin() {
    let letters = ul.getElementsByClassName('letter');
    let correct = ul.getElementsByClassName('show').length;

    if (correct === letters.length) {
      this.gameOver();
    }
  }
  /* Determine if the game is won or lost
     and reset the gameboard */
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
    while (ul.lastChild) {
      ul.removeChild(ul.lastChild);
    }
    for (let i = 0; i < keys.length; i++) {
      keys[i].className = 'key';
      keys[i].disabled = false;
    }
    for (let j = 0; j < hearts.length; j++) {
      hearts[j].src = 'images/liveHeart.png';
    }
  }

}
