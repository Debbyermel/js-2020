// const markMass = 78;
// const markHeight = 1.69;
// const markBmi = markMass / markHeight ** 2;

// const johnMass = 98;
// const johnHeight = 1.75;
// const johnBmi = johnMass / (johnHeight * johnHeight);

// if (markBmi > johnBmi) {
//   console.log(` Mark BMI is ${markBmi} and John BMi is ${johnBmi}, Mark BMI is greater than John BMI.`);
// }
// else {
//   console.log(`John BMI is ${johnBmi} and Mark BMI is ${markBmi}, John BMI is greater than Mark BMI.`);
// }


const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.markBMI = this.mass / this.height ** 2;
    return this.markBMI;
  }
}


const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.johnBMI = this.mass / this.height ** 2;
    return this.johnBMI;
  }
}

mark.calcBMI();
john.calcBMI();

if(mark.markBMI > john.johnBMI) {
  console.log(`${mark.fullName}'s BMI (${mark.markBMI}) is higher than ${john.fullName} (${john.johnBMI}).`);
}
else {
  console.log(`${john.fullName}'s BMI (${john.markBMI}) is higher than ${mark.fullName} (${mark.markBMI}).`);
}