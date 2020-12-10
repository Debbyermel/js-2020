'use strict';

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
}

const canada = describeCountry('Canada', 38, 'Ottawa');
const brasil = describeCountry('Brasil', 212, 'Brasilia');
const mexico = describeCountry('Mexico', 126, 'Mexico city');

console.log(canada, brasil, mexico);


function percentageOfWorld(population) {
  return (population / 7900) * 100;
}

console.log(percentageOfWorld(212));
console.log( `Mexico represents ${percentageOfWorld(126)} percent of worlds population`);
console.log( `Canada represents ${percentageOfWorld(38)} percent of worlds population`);


const percentageOfWorld3 = population => (population / 7900) * 100;

console.log(`Greece represents ${percentageOfWorld3(12)} percent of worlds population`);
console.log(`Italy represents ${percentageOfWorld3(15)} percent of worlds population`);


function describePopulation(country, population) {
  let percentageOfCountryPopulation = percentageOfWorld3(population)
  return (`${country} has ${population} million people, which is about ${percentageOfCountryPopulation} of the world`);
}

console.log(describePopulation('Germany', 22));


// Arrays
const populations = [216, 34, 56, 12 ];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld3(populations[0]),
  percentageOfWorld3(populations[1]),
  percentageOfWorld3(populations[2]),
  percentageOfWorld3(populations[3])
];

console.log(percentages);
