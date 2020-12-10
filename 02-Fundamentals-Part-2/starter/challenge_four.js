// arrays challenge
const calcTip = function(bill) {
  const small_tip = bill * 0.15;
  const large_tip = bill * 0.2;
  return bill >= 50 && bill <= 300 ? small_tip : large_tip;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1190, 86, 52];
let tips = [];
let totals = [];

for(let i = 0; i < bills.length; i++) {
  let tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tips + bills[i]);
}
console.log(bills, tips, totals);
