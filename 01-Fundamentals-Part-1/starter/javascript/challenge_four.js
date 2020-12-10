let bill = 270;
const small_tip = bill * 0.15;
const large_tip = bill * 0.2;
const tip = bill <= 300 && bill >= 50 ? small_tip : large_tip;
console.log(` The bill was ${bill}, the tip was ${tip}, and the total was ${bill + tip }`);

// remove the tax
console.log(bill * (100 - 0.16));