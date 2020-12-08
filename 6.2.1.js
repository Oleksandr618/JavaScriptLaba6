document.querySelector('button').onclick = Ifelse;

function Ifelse() {
  for (var i = 100; i > 0; i--) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("NameSurname");
    } else if(i % 3 == 0){
        console.log("Name");
    }else if(i % 5 == 0){
        console.log("Surname");
    }
    else {
      console.log(i);
    }
  }
}
