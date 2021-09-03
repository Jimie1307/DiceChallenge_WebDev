
function generateNewDice(){

    var randomNum = Math.floor(Math.random()*6)+1;
    var newDice = "images/dice"+ randomNum +".png";

    return newDice;
}

function changeDice(){
  var dice1 = generateNewDice();
  var dice2 = generateNewDice();
  document.querySelector(".img1").setAttribute("src", dice1);
  document.querySelector(".img2").setAttribute("src", dice2);

  changeHeader(dice1, dice2);
}

function changeHeader(dice1, dice2){
  if(dice1 == dice2){
    document.querySelector("h1").innerText = "Draw!";
  }
  else if(dice1 > dice2){
    document.querySelector("h1").innerText = "🚩Player 1 Wins!";
  }
  else if(dice2 > dice1){
    document.querySelector("h1").innerText = "Player 2 Wins!🚩";
  }
  else{
    document.querySelector("h1").innerText = "Error has won the game instead!";
  }
}
