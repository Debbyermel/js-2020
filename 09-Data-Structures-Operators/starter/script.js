'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function({ starterIndex = 1, mainIndex = 0, time = '13:00', address }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and
      ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPast: function(item1, item2, item3) {
    console.log(`You choose the ${item1}, ${item2} and ${item3} to be added into your pasta.`);
  }
};

// Destructuring Arrays:

//Getting the first and second item of array
let [main, secondary] = restaurant.categories;
//Switching variables
[main, secondary] = [secondary, main];

//Getting the first, skip the second and getting the third item of array
// const [main, , secondary] = restaurant.categories;
// console.log('categories: ' + main, secondary );

//Nested destructuring array
const nested = [2, 4, [5,6]];
const [i, ,[j,k]] = nested;

//Default values when we dont know the size of array, we can assign 1 by default:
const [p=1, q=1, r=1] = [8, 9];
//returns 8, 9, 1


// Destructuring Objects:
const { name, openingHours, categories } = restaurant;

//Renaming the variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

//Default Values
const { menu = [], starterMenu: starters = []} =  restaurant;
console.log(menu, starters);

//Mutating Variables while destructing objects
let a = 111;
let b = 999;
const testObj = {
  a: 23,
  b: 7,
  c: 14
}

// ({a, b} = testObj);
console.log(a, b);

// Nested Objects
const { fri: { open: openTime, close: closeTime }, } = openingHours;
console.log(`open: ${openTime}hr, close: ${closeTime}hr`);

//Passing An destructured object as function parameter

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via de Sole, 21',
  starterIndex: 1,
  mainIndex: 2
});


// Spread Operator
// Help to get element of an array
// Only used on elements separated with commes
const arr = [7, 8, 9];

const badArr = [1, 2, arr[0], arr[1], arr[2]];

const goodArr = [1, 2, ...arr];

//Log individual
console.log(...goodArr);

// Adding new element on an array
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy new array
const mainMenuCopy = [...restaurant.mainMenu];

//Join arrays
const fullMenu = [...restaurant.starterMenu, ...newMenu];
console.log(`Our full menu: ${fullMenu}`);

//Spread interacts with all iterables: array, string, maps and sets but not object.
const str = 'Debora';
const letters = [...str, '', 'S.'];
console.log(letters);

//Using the spread with a function.
// const ingredientes = [
//   prompt('Let\'s make a pasta! ingrediente 1?'),
//   prompt('Let\'s make a pasta! ingrediente 2?'),
//   prompt('Let\'s make a pasta! ingrediente 3?')
//  ];
//  console.log(ingredientes);
//  restaurant.orderPast(...ingredientes);


//Copy objects and add new elements
const newRestaurant = {...restaurant, founder: 'Guiseppe', foundYear: 1956 };
console.log(newRestaurant);

//Copy original and add rename
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Preggo';


// REST OPERATOR:
// will collect remaing elements of an array and save it on a new array.
// Always must be t last element.
// Just one in any destructing
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

//Rest parameters on functions
const add = function(...numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
}

add(2,3);
add(2,3,8,9,7,0,2);
add(2,3.7,8,8,9);