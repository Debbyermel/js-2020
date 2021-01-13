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
// const jane = {
//   year: 2001,
//   calcAge: function() {
//     console.log(this);
//     console.log(2037 - this.year);
//   }
// };
// jane.calcAge();

// const matilda = {
//   year: 2017
// };

// // Method Borrowing
// matilda.calcAge = jane.calcAge;
// // It will be matilda age 20
// //This keyword always points to the object that is calling the method.
// matilda.calcAge();

// const f = jane.calcAge;
// f(); // undefined error, because the this is not attached to an object, there is not an owner.


//  *********************************************************************************************
// Regular Functions vs. Arrow Functions
//  *********************************************************************************************

// const firstName = 'Matilda';

// const jonas = {
//   year: 1991,
//   calcAge: function () { // On a method such as .calcAge itself, this refers to its parent object
//     console.log(2037 - this.year); // That's why we can get the value of year from the jonas object with this.year.

//     //isMillenial is a function expression inside a function expression, assigned to the property calcAge of the Jonas object.
//     const isMillenial = function () {
//       console.log(this); // the value of this is the window object, or undefined in strict mode
//       console.log(this.year >= 1981 && this.year <= 1996);
//       //The function expression isMillenial is not a method, but is instead a simple function.
//       //A function call will refer to the global object when using this.
//       //In this case, the global object is window. Although, it should be pointed out that when in strict mode, this will instead return undefined.

//     }
//   //Here isMillenial is an arrow function, it does not create a new value for this.
//   //Instead, the this keyword will still refer to the same value as its parent does, which works perfectly for our purposes.
//   const isMillenial = () => {
//     console.log(this); // the value of this of my parent is the jonas object
//     console.log(this.year >= 1981 && this.year <= 1996);
//   }
//     isMillenial();
//   },
//   greet: () => {
//       console.log(this);
//       console.log(this.firstName);
//   }
// };

// jonas.greet();


// Arguments keyword
const addExp = function(a, b) {
  // On regular function arguments existes
  console.log(arguments);
  return a+ b;
}
addExp(4, 8);
addExp(7,8,9,2,4);

const addArrow = (a, b) => {
  // On arrow function arguments is not defined
  console.log(arguments);
  return a + b;
}
addArrow(2, 2);






