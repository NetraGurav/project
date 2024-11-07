let boxx = document.querySelectorAll(".box");
let ResetGame = document.querySelector("#ResetGame");
let newwga = document.querySelector(".neww");
let m = document.querySelector(".mcontainer");
let iff = document.querySelector("#newgame");
let turnO=true;
const winpaterns = [
  [0,1,2],
  [0,4,8],
  [2,4,6],
  [6,7,8],
  [1,4,7],
  [0,3,6],
  [2,5,8],
  [3,4,5],

]
boxx.forEach((box) => {
  box.addEventListener("click",()=>{
//  console.log("The box was clicked");

 if(turnO){
  box.innerText = "O";
  turnO = false;
 
 }
 else{
  box.innerText = "X";
  turnO = true;
 }
 if(turnO == true){
   box.style.color = "green";
 }
 else if(turnO == false){
  box.style.color = "red";
 }
 
 box.disabled = true;
 checkwinner();
 });

});
const showwinner = (winner)=>{
   
   m.classList.remove("hide");
  
   if(winner == null){
    newwga.innerHTML = "Tie match";
 
 }
 else{
  newwga.innerHTML = `congratulations the winner is ${winner}!`;
 }
 disabledboxx();

}
let disabledboxx = ()=>{
  for(let box of boxx){
    box.disabled = true;
  }
};
let enabledboxx = ()=>{
  for(let box of boxx){
    box.disabled = false;
    box.innerText = "";
  }
};
const resetgame = () =>{
  turnO =true;
  enabledboxx();
  m.classList.add("hide");
  
};

const checkwinner = () =>{
  for(let patern of winpaterns){
    // console.log(boxx[patern[0]].innerText,boxx[patern[1]].innerText,boxx[patern[2]].innerText);
      // console.log(patern[0],patern[1],patern[2]);
      let winnerFound = false;
      let postval1 =boxx[patern[0]].innerText;
      let postval2 = boxx[patern[1]].innerText;
      let postval3 = boxx[patern[2]].innerText;
      if(postval1!= ""&&  postval2!=" "&& postval3!=""){
        if(postval1 === postval2 && postval2 === postval3){
          console.log("Winner");
          winnerFound = true; 
          showwinner(postval1);
          }
          if (!winnerFound && Array.from(boxx).every(box => box.innerText !== "")) {
            showwinner(null); // Pass `null` to indicate a tie
          }
        }
      }
    
  };
  iff.addEventListener("click",resetgame);
  ResetGame.addEventListener("click",resetgame);
