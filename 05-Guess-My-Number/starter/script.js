'use strict';

// //Accessing tag content
// console.log(document.querySelector('.message').textContent);

// //Setting content
// document.querySelector('.message').textContent = 'Correct number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 567890;
// document.querySelector('.again');

//Event listening

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is not input
  if(!guess) {
    document.querySelector('.message').textContent = 'No number!🚫';
  }

  //When player wins
  else if(guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number! 🤩';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

  }

  //when number is too high or number of try is over
  else if(guess > secretNumber) {
    if(score > 1) {
      document.querySelector('.message').textContent = 'Number is too hight! 📈';
      score--;
      document.querySelector('.score').textContent = score;
    }
    else {
      document.querySelector('.message').textContent = 'You lost the game 😭';
      document.querySelector('.score').textContent = 0;
    }
  }

  //when number is too low or number of try is over
  else if(guess < secretNumber) {
    if(score > 1) {
      document.querySelector('.message').textContent = 'Number is too low! 📈';
      score--;
      document.querySelector('.score').textContent = score;
    }
    else {
      document.querySelector('.message').textContent = 'You lost the game 😭';
      document.querySelector('.score').textContent = 0;
    }
  }
})

//resetting and start the game
document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem'
})


