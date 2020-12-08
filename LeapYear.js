document.querySelector('button').onclick = LeapYear;

function LeapYear() {
  var h = document.querySelector('.Year').value;
  if ((h % 4 == 0 && h % 100 != 0) || h % 400 == 0) {
    console.log("It's a leap year");
  } else {
    console.log("It's not a leap year");
  }
}
