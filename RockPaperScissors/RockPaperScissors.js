let hands = ["rock", "paper", "scissors"];

let playerHand = prompt("Please enter your choice");

function getComputerHand() {
    let randomNumber = Math.floor(Math.random() * 3);
    return hands[randomNumber];
}

/*
function compare(playerHand, computerHand) {
  console.log("Player hand is: "+playerHand);
  console.log("Computer hand is: "+computerHand);
    if(playerHand === computerHand) {
          return "Tie game";
  }
  if(playerHand === "rock") {
          if(computerHand === "paper") {
              return "Computer wins";
      } else {
                 return "Player wins";   
      }
  }
    else if(playerHand === "paper") {
          if(computerHand === "scissors") {
              return "Computer wins";
      } else {
                 return "Player wins";   
      }
  }
  else if(playerHand === "scissors") {
          if(computerHand === "rock") {
              return "Computer wins";
      } else {
                 return "Player wins";   
      }
  }  
}
*/

function compare(playerHand, computerHand) {
    console.log("Player hand is: " + playerHand);
    console.log("Computer hand is: " + computerHand);
    let playerNumber = hands.indexOf(playerHand);
    let computerNumber = hands.indexOf(computerHand);

    let winStatus = playerNumber - computerNumber;
    if (winStatus < 0) {
        winStatus += 3;
    }
    if (winStatus == 0) {
        return "Tie game";
    } else if (winStatus == 1) {
        return "Player wins";
    } else {
        return "Computer wins";
    }
}


console.log(compare(playerHand, getComputerHand()));