// arrays challenge
function calcTip(bill) {
  const small_tip = bill * 0.15;
  const large_tip = bill * 0.2;
  return bill >= 50 && bill <= 300 ? small_tip : large_tip;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const totals = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2]
];

console.log(totals);