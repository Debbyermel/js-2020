'use strict';

// //Accessing tag content
// console.log(document.querySelector('.message').textContent);

// //Setting content
// document.querySelector('.message').textContent = 'Correct number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 567890;

//Event listening


const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if(!guess) {
    document.querySelector('.message').textContent = 'No number!🚫';
  }
  else if(guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number! 🤩';
  }
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


