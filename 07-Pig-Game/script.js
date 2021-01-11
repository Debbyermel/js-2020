'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let currentScore, scores, activePlayer, gameIsActive;

function initGame() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  gameIsActive = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  btnHold.classList.remove('disable-btn');
  btnRoll.classList.remove('disable-btn');
}

initGame();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function() {
  if(gameIsActive) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if(dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function() {
  if(gameIsActive) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 100) {
      gameIsActive = false;
      diceEl.classList.add('hidden');
      btnHold.classList.add('disable-btn');
      btnRoll.classList.add('disable-btn');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', initGame);
