//Using arrow function

const calcAverage = (scoreOne, scoreTwo, scoreThree) => (scoreOne + scoreTwo + scoreThree) / 3;
const dolphinsAverageScore = calcAverage(85, 54, 41);
const koalasAverageScore = calcAverage(23, 34, 27);

const checkWinner = function(dolphinsAverageScore, koalasAverageScore) {

  if(dolphinsAverageScore >= 2 * koalasAverageScore) {
    console.log(`Dolphins is the winner ${dolphinsAverageScore}`);
  }
  else if (koalasAverageScore >= 2 * dolphinsAverageScore) {
    console.log(`Koala is the winner ${koalasAverageScore}`);
  }
  else {
    console.log(`No one wins!`);
  }
}

checkWinner(dolphinsAverageScore, koalasAverageScore);
