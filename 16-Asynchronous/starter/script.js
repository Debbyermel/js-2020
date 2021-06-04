'use strict';
///////////////////////////////////////

//SYNC CODE
// Executed line by line, which line waits for the previous line.

//ASYNC CODE
// Code only is executed after a task that runs in the background finishes

const img = document.querySelector('.dog');
img.src = 'dog.jpg';
img.addEventListener('load', function() {
  img.classList.add('fadeIn');
});

///////////////////////////////////////
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');