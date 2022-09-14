const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  let BMI = weight/(height*height)
  return BMI
  
  //code here
}
function getBMIMeaning(weight, height) {
  let BMI = calculateBMI(weight, height);

  if(BMI < 18.5){
    return "Underweight"
  }
  else if(BMI >= 18.5 && BMI <= 24.9 ) {
    return "Normal weight"
  }
  else {
    return "Overweight"
  }
  
  
  //code here
}
module.exports = getBMIMeaning
