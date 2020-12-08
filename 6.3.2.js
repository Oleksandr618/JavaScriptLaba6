document.querySelector('button').onclick = Fibonacci;

function Fibonacci() {
    var w = document.querySelector('.Number').value;
    var a = 0;
    var  b = 1;
      var c = 0;
    var  i = 0;

    while (i < 2) {
   console.log(i);
   i++;
 }

  while (i < w) {
    c = a + b;
    a = b;
    b = c;
    console.log(c);
    i++;
  }

}
