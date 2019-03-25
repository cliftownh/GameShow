// app.js

let game;
let phraseList = [
  'a chip on your shoulder', 
  'a dime a dozen',
  'a piece of cake',
  'back to square one',
  'curiosity killed the cat'];
const qwerty = document.getElementById('qwerty');
const keys = document.getElementsByClassName('key');
const overlay = document.getElementById('overlay');
const startBtn = document.getElementById('btn__reset');

/* Start button click assigns Game object,
 * hides the start screen and game begins */
startBtn.addEventListener('click', function(event) {
  game = new Game(phraseList);
  overlay.style.display = 'none';
  game.startGame();
});

// Give the on-screen keyboard functionality
qwerty.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    event.target.disabled = true;
    game.handleInteraction(event.target, phraz.checkLetter(event.target.textContent));
  }
});

window.addEventListener('keyup', function(event) {
  if (overlay.style.display === 'none') {
    for (let i = 0; i < keys.length; i++) {
      if (event.key === keys[i].textContent &&
        keys[i].className === 'key')
        {
          keys[i].disabled = true;
          game.handleInteraction(keys[i], phraz.checkLetter(event.key));
      }
    }
  }
});
