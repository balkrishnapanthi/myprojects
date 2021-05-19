var screen= document.getElementById('display');
var button =document.getElementsByClassName("numbutton");

var screenvalue="";

for (item of button){
item.addEventListener("click", clicked);

function clicked (event) {
  
  var num =  event.target.textContent; // event.target returns the element that has fired the event

 

if(num=="C")
  {
      screen.value="";
  }
  else if (num=="=")
  {
    
screen.value=eval(screenvalue);

console.log(x);

  }
  else if (num=="X")
  {
    screen.value += "*";
    screenvalue=screen.value;

  }

  else {

    screen.value += num;
    screenvalue=screen.value;
  }
  

}
}