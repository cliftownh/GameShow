/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const qwerty = document.getElementById('qwerty');
const overlay = document.getElementById('overlay');
const startBtn = document.getElementById('btn__reset');

startBtn.addEventListener('click', function(event) {
  game = new Game(['a chip on your shoulder', 'a dime a dozen', 'a piece of cake', 'back to square one', 'curiosity killed the cat']);
  overlay.style.display = 'none';
  game.startGame();
});

qwerty.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    event.target.disabled = true;
    game.handleInteraction(event.target, phraz.checkLetter(event.target.textContent));
  }
});
