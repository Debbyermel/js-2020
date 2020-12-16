'use strict';

// //Accessing tag content
// console.log(document.querySelector('.message').textContent);

// //Setting content
// document.querySelector('.message').textContent = 'Correct number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 567890;
// document.querySelector('.again');

//Game starting
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMsg(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is not input
  if(!guess) {
    displayMsg('No number!🚫');
  }

  //When player wins
  else if(guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct number! 🤩';
    displayMsg('Correct number! 🤩');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if(score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //when guess is wrong
  else if(guess !== secretNumber) {
    if(score > 1) {
      displayMsg(guess > secretNumber ? 'Number is too hight 📈' : 'Number is too low📉 ');
      score--;
      document.querySelector('.score').textContent = score;
    }
    else {
      displayMsg('You lost the game 😭');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//resetting and start the game
document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMsg('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem'
});


