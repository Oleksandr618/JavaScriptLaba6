document.querySelector('button').onclick = RandomName;

function RandomName() {
  var h = ['Martin', 'Alex', 'Bob', 'Bill', 'Jacob', 'Will', 'Jayson']
var randomName = h[Math.floor(Math.random()*h.length)];
    console.log(randomName+" is buying a coffee for everybody");

  }
