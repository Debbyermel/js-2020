// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// BREAKING DOWN PROBLEMS

// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer.
// Our most recent task is this:
// Given an array of temperatures of one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error.

// 1- Understand the problem:
//  what is tem amplitude? answer: difference between the highest and lowest temperature.
// How to compute the max and min temperature? answer:
// What is a sense error? and what to do? answer:

// 2- breaking the problem into sub-problems:
//How to ignore errors
// find max value temperature in array
// find min value temperature in array
// subtract min from max and return it

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//Problem 2
// Function should receive 2 arrays of temperatures.
// With 2 arrays, should we implement functionality twice? No! just merge two arrays

// breaking problem:
//Merge 2 arrays.

const calcTempAmplitudeNew = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [23, -2, 5]);
console.log(amplitudeNew);
