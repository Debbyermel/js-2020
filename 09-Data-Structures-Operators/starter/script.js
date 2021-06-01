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

// Destructuring Objects:

//Renaming
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);


//Default Values
const { menu = [], starterMenu: starters = []} =  restaurant;
console.log(menu, starters);


//Mutating Variables
let a = 111;
let b = 999;
const testObj = {
  a: 23,
  b: 7,
  c: 14
}
console.log(({a, b}));


// Nested Objects
const { fri: { open: openTime, close: closeTime }, } = restaurant.openingHours;
console.log(openTime, closeTime);

//Passing An destructured object as function parameter

restaurant.orderDelivery({
  address: 'Via de Sole, 21',
  starterIndex: 1
});


// Spread operator

