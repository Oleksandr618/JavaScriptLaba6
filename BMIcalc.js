document.querySelector('button').onclick = BMICalc;
function BMICalc() {
  var h = document.querySelector('.Height').value;
  var w = document.querySelector('.Weight').value;
  var w1 = w / (h * h);
  if (w1 <= 18.5) {
    console.log("Indicates underweight. Index = " + w1);
  } else if (w1 >= 18.5 & w1 <= 24.9) {
    console.log("Equivalent to normal body weight. Index = " + w1);
  } else if (w1 >= 25 & w1 <= 29.9) {
    console.log("Indicates the presence of excess weight. Index = " + w1);
  } else if (w1 >= 30) {
    console.log("Is a sign of obesity. Index = " + w1);
  }
}
