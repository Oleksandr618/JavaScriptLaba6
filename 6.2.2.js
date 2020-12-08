document.querySelector('button').onclick = While;

function While() {
var i=100;
while(i>0){
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
  i--;
  }
}
