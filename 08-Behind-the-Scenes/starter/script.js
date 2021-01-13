'use strict';

// ********************************************************************************************
// Scoping in Practice
// ********************************************************************************************

// function calcAge(birthYear) {
//   const age = 2021 - birthYear;

//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}.`;
//     console.log(output);

//     if(birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `Oh, you are a millenial, ${firstName}.`
//       console.log( str);
//     }
//     else {
//       const str2 = `Oh, you are NOT a millenial, ${firstName}.`
//       console.log(str2);
//     }

//     //Var is a function scoop and accessible outside de block scope
//     console.log(millenial);
//   }

//   printAge();
//   return age;
// }

// const firstName = 'Deb';
// console.log(calcAge(1987));

//  *********************************************************************************************
// Hoisting and TDZ in Practice
//  *********************************************************************************************

// Variables

// console.log(me); // Undefined right now
// console.log(job); //tdz right now
// console.log(year);

// var me = 'Deb';
// let job = 'Developer';
// const year = 2021;


// Functions
// console.log(addDecl(1,2));
// console.log(addExp(5,5));
// console.log(addArrow(7,7));

//Function declaration is the only that can be access before be declared.
// function addDecl(a, b) {
//   return a + b;
// }

//Function declaration(Const variable) using const and arrow behaves the same and stay on tdz as well
// const addExp = function(a, b) {
//   return a+ b;
// }

// Any variables declared with VAR will be hoisted and set to undefined. (Is not a function error)
// var addArrow = (a, b) => a+ b;


//Example of bad practices and dangers of using hoist var:
// this if will trigger the function that will delete the shopping cart because at this point
// var is undefined so the condition will be true and the function will be exec.
// if(!numProducts) {
//   console.log(numProducts);
//   deleteShopCart();
// }

// var numProducts = 10;

// function deleteShopCart() {
//   console.log('all products deleted.');
// }

// Another example
// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x); // True.. creates a property on the global window object
// console.log(y === window.y);// False
// console.log(z === window.z); // False


//  *********************************************************************************************
// THIS KEY WORD
//  *********************************************************************************************

// console.log(this); // window object

// This key word function declaration
// const calcAge = function(birthYear) {
//   console.log(2021 - birthYear);
//   console.log(this); // undefined
// }

// calcAge(1974);


// This key word inside an arrow function
// const calcAgeArrow = birthYear => {
//   console.log(2021 - birthYear);
//   // The window, because arrow function don't have it's own this keyword
//   // Instead it uses a lexical keyword, that means that it uses a this of its parent scope, that is this case will be the window.
//   console.log(this);
// };

// calcAgeArrow(1992);


// This key word inside a method.
// When we have a method call, this keyword inside of the method will be the object calling the method.
const jane = {
  year: 2001,
  calcAge: function() {
    console.log(this);
    console.log(2037 - this.year);
  }
};
jane.calcAge();

const matilda = {
  year: 2017
};

// Method Borrowing
matilda.calcAge = jane.calcAge;
// It will be matilda age 20
//This keyword always points to the object that is calling the method.
matilda.calcAge();

const f = jane.calcAge;
f(); // undefined error, because the this is not attached to an object, there is not an owner.

