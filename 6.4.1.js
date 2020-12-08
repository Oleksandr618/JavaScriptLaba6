
  var n1 = Math.floor(Math.random() * 6) + 1;
  var i1 = "img-" + n1 + ".png";
  var d1 = document.querySelector('.v1');
  d1.setAttribute("src", i1);
  var n2 = Math.floor(Math.random() * 6) + 1;
  var i2 = "img-" + n2 + ".png";
  var d2 = document.querySelector('.v2');
  d2.setAttribute("src", i2);

  if (n1 > n2) {
    document.querySelector("h2").innerHTML = "First player is winner";
  } else if (n2 > n1) {
    document.querySelector("h2").innerHTML = "Second player is winner";
  } else {
    document.querySelector("h2").innerHTML = "Draw";
  }
