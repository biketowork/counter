const plus=document.getElementsByClassName("left");
const minus=document.getElementsByClassName("right");
let result=document.getElementById("result");
let c=0;

function addNumber() {
       c++;
       result.innerHTML=c;
    };

function decreaseNumber() {
      c--;
      result.innerHTML=c;
  }

plus[0].addEventListener("click", addNumber); 
minus[0].addEventListener("click", decreaseNumber);


