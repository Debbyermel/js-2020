const country = 'Brazil';
// const continent = 'Americas';
let population = 212000000;
// const IsIsland = false;
// const language = 'Portuguese';
// let finlandPopulation = 6000000;
// population = 22000000;
// population += 1;
// let halfBrazilPopulation =  population / 2;
// let brasilIsBigger = population > finlandPopulation;
// let averagePopulation = 33000000;
// let myCountryDescription = ' My country is ' + country + ' located on ' + continent + ' we speak ' + '' + language + ' with a population of ' +  population;
// const stringTemplate = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
// console.log(myCountryDescription);
// console.log('The half of' + country + ' populations is: ' + halfBrazilPopulation);
// console.log( country + ' has ' + population + ' Finland has ' + finlandPopulation + ' Brasil IS bigger than Finland: ' + brasilIsBigger);
// console.log(stringTemplate);

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if(numNeighbours === 1 ) {
//   console.log('Only 1 border! (strict operator will never enter here unless converter the prompt to number)');
// }
// else if(numNeighbours === 4 ) {
//   console.log('More than 1 border!');
// }
// else {
//   console.log('No border! will Always enter here if === are used because Js will coercion the prompt to string');
// }

const mostPopularLanguage = 'portuguese';
switch (mostPopularLanguage ) {
  case 'mandarin':
  case 'chinese':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'English':
    console.log('3rd place in number of native speakers');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default :
    console.log('Great language too :D');
  }

//Ternary operator string template
console.log(`${country}'s population is ${population > 33000000 ? `above` : `below`} average`);



