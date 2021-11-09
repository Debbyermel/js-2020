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


// Spread operator

