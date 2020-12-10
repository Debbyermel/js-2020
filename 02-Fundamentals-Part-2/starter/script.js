'use strict';

// function logger(name) {
//   return `Hi ${name}`;
// }

// const userName = logger('Sammy');
// console.log(userName);

// // Function declaration
// function calcAge(birthYear) {
//   return 2037 - birthYear
// }

// const futureAge = calcAge(1985);
// console.log(futureAge)


// //Function Expression
// const calcAge2 = function (birthYear) {
//   return 2048 - birthYear
// }

// const futureAge2 = calcAge2(1985);
// console.log(futureAge2);

// //Arrow function without param, don't need return or {}
// const calcAge3 = birthYear => 2045 - birthYear;
// const age3 = calcAge3(1985);
// console.log(age3);

// //Arrow function with one param, with return
// const yearsUntilRetirement = birthYear => {
//   const age = 2020 - birthYear;
//   const retirement = 66 - age;
//   return retirement;
// }
// const total = yearsUntilRetirement(1985);
// console.log( `${total} years till retirement`);

// //Arrow function with more than one param.
// const personDetails = (firstName, lastName, monthOfBirth, yearOfBirth) => {
//   return `${firstName + ' ' + lastName} was born on ${monthOfBirth} of ${yearOfBirth}!`;
// }

// console.log(personDetails('Nathan', 'Nelson', 'May', 1974));


///////////////////////////////////////
// Introduction to Arrays
// const friends = ['Bia', 'Sim', 'Lia'];
// console.log(friends);

// const y = new Array(1991, 1985, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]); // normal array count

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Deb';
// const deb = [firstName, 'Ermel', 2020 - 1985, 'Coder', friends];
// console.log(deb);
// console.log(deb.length);

// // Exercise
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);


///////////////////////////////////////
// Basic Array Operations (Methods)
// const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//   console.log('You have a friend called Steven');
// }


// Objects
// const pet = {
//   firstName: 'Sam',
//   lastName: 'Bucca',
//   birthYear: 2017,
//   color: 'black',
//   size: 'toy',
//   breed: 'Brussels griffon',
//   hasDriverLicense: false,
//   favourite_things: ['hugs', 'sleep', 'play', 'treats'],
//   friends: ['Fedi', 'piglet', 'navi', 'jag'],
//   calcAge: function () {
//     this.age = 2020 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function() {
//     return `${this.firstName} is a cute ${this.age} years old ${this.size} size ${this.breed}, and she has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`;
//   }
// };

// const nameKey = 'Name'

// console.log(pet['first' + nameKey]);
// console.log(pet['last' + nameKey]);

// const interestedIn = prompt(' What you want to know about Sammy, choose between color, age, toy or favorite things');

// if(pet[interestedIn]) {
//   console.log(pet[interestedIn]);
// }
// else {
//   console.log('Sammy did not answered this question.');
// }

// console.log(pet.calcAge());

// console.log(pet.getSummary());

// //For loops

// const years = [1985, 1974, 2010, 1678];
// const ages = [];

// for(let i= 0; i < years.length; i++) {
//   ages.push(2020 - years[i]);
// }

// console.log(ages);


// //continue and break
// for (let i = 0; i < pet.length; i++) {
//   if(typeof pet[i] === 'number') break;
//   console.log(pet[i], typeof pet[i]);
// }


const petTwo = {
  firstName: 'Jag',
  lastName: 'Meister',
  birthYear: 2010,
  color: 'blond',
  size: 'toy',
  breed: 'Brussels griffon',
  hasDriverLicense: true,
  favourite_things: ['food', 'sleep', 'sleep again', 'treats'],
  friends: ['Fedi', 'navi'],
}

// for (let i = petTwo.length - 1; i >= 0; i--) {
//   petLoop = petTwo[i];
//   console.log(petLoop);
// }

// for (let exer = 1; exer < 4; exer++) {
//   console.log(`Start ${exer}`);
// }

//While

let dice = Math.trunc(Math.random() * 6 ) + 1;

while(dice !== 6) {
  console.log(`you roll a ${dice}`);
  dice = Math.trunc(Math.random() * 6 ) + 1;
  if(dice === 6){
    console.log('loop is ending....');
  }
}

