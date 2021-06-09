'use strict';

//Default parameters
// const bookings = [];

// const createBooking = function(flightNumber, numOfPass = 1, price = 199) {
//   //ES5 way
//   // numOfPass = numOfPass || 1;
//   // price = price || 199;

//   const booking = {
//     flightNumber,
//     numOfPass,
//     price
//   };
//   console.log(booking);
//   bookings.push(booking)
// }

// createBooking('LH245', 2, 870);
// //undefined will get the value of the param
// createBooking('LH788', undefined, 670);

//How primitives and reference type works with functions
const flight = 'LR457';
const passenger = {
  name: 'Lia Rutz',
  passport: 3456789089
};

const checkIn = function(flight, passenger) {
  flight = 'LH999';
  passenger.name = 'Mr ' + passenger.name;
  if(passenger.passport === 3456789089) {
    alert('check in');
  }
  else{
    alert('Wrong passport');
  }
};

checkIn(flight, passenger);
console.log(flight);
console.log(passenger);





//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Functions to arrow
// const button = document.querySelector('.buy');
// const library = [
//   'Cooking for dummies',
//   'Learning React',
//   'How to make ice',
//   'Boiling water the right way',
//   'Jump cat'
// ];

//Function
// const videos = library.filter(function(video) {
//   return video.includes('dummies');
// });
// console.log(videos);

//Arrow
// const videosArrowFunc = library.filter(video => video.includes('ice'));
// console.log(videosArrowFunc);

//Callbacks, Higher Order Functions
// library.push('meditation for jackass')
// console.log(library);

//Higher Order Functions (Default)
// library.forEach(function(item) {
//   console.log(item);
// });

// Creating a /Higher Order Functions
// function repeater(fn) {
//   fn();
//   fn();
//   fn();
// }

//Callback
// button.addEventListener('click', () => {
//   console.log('btn was click');
// })

