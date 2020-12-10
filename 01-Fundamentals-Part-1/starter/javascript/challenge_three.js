const dolphinsAverageScore = (97 + 112 + 81) / 3;
const koalasAverageScore = (109 + 95 + 86) / 3;

if(dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
  console.log(`Score: ${dolphinsAverageScore} - Dolphins is the winner`);
}
else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100) {
  console.log(`Score: ${koalasAverageScore} - Koalas is the winner`);
}
else if (koalasAverageScore === dolphinsAverageScore && koalasAverageScore > 100 && dolphinsAverageScore > 100) {
  console.log(`It's a draw`);
}
else {
  console.log('no one win 😭')
}
