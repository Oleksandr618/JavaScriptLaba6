document.querySelector('button').onclick = Song;

function Song() {
  var i = 98;
  console.log("99 bottles of beer on the wall,");
  console.log("99 bottles of beer.");
  console.log("Take one down, pass it around,");
  while (i > 0) {
    console.log(i + " bottles of beer on the wall,");
    console.log(i + " bottles of beer on the wall,");
    console.log(i + " bottles of beer.");
    console.log("Take one down, pass it around,");
    i--;
  }
}
