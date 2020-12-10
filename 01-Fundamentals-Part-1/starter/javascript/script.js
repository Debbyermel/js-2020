// Operators
const future = 2037;
const now = 2020;
const myAge = now - 1985;
const myFutureAge = future - 1985;
let x = 10;
let y = 2;
// Assignment operators
x *= 4;
y += x;
console.log('In 2037 I will be ' + myFutureAge + ' years old.');
console.log(' Today I am ' + myAge + ' years old.');
console.log(x, y);

//comparison operators
console.log(x > y);
console.log(myFutureAge, x, myFutureAge < x);

//Condition
const age = 15;

if (age >= 18) {
  console.log( ` Deb  is ${age}, she can drive 🚗` );
}
else {
  console.log(`Too young for driving... wait a little more 🔞 ❌ `);
}

//Type conversion
const inputYear = '1987';
console.log(Number(inputYear) + 2);
console.log(String(inputYear));

//Type coercion
console.log('i am ' + 23 + ' years old');
console.log('20' - '5' - 5);

//Falsy, values: 0, '', undefined, null, NaN;
let height;

if(height){
  console.log('It is defined');
}
else {
  console.log('UNDEFINED or Zero');
}

//Equality operators

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours === 1) {
//   console.log('Only 1 border! (strict operator will never enter here unless converter the prompt to number)');
// }
// else if (numNeighbours === 4) {
//   console.log('More than 1 border!');
// }
// else {
//   console.log('No border! will Always enter here if === are used because Js will coercion the prompt to string');
// }

//Boolean (&&)(||);
//(AND)True when all are true, False when one is False;
//(OR) True when one is true, False when all is False;
//(!) Inverts true and false;

//Switch statement

const day = 'saturday';

switch(day) {
  case 'monday':
    console.log('study Js');
  break;
  case 'tuesday':
    console.log('study CSS Advanced');
  break;
  case 'wednesday':
  case 'thursday':
    console.log('Prepare for coding challenges');
    break;
  case 'friday':
    console.log('Review PRs');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Rest and watch Star Trek');
    break;
  default:
    console.log('Invalid day');
}


