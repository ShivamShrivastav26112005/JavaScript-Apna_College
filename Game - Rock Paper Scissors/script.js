// JS Logic -: 

// 0 -: starting -: 
let userScore = 0; // this variable tracks user score 
let compScore = 0; // and this tracks computer score



// access all the choices -: 
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");



// update scores -: 
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");



// 2-: to Generate computer's choice we make a function "genCompChoice" -: 
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"]; // make an array and store options
  const randIdx = Math.floor(Math.random() * 3); // random method generates no. b/w 0 to 1. when multiplied by 3, the range becomes 0 to 2
  // and then convert it into floor form, it gives an integer.
  return options[randIdx];
};




// 4-: when the game is a draw -: 
const drawGame = () => {
  msg.innerText = "Game was a draw. Play again."; // message displayed when it's a draw
  msg.style.backgroundColor = "#081b31"; // keep background consistent for a draw
};




// 5 -: using arrow function (used to write code in compact ways -:)
const showWinner = (userWin, userChoice, compChoice) => {

  if (userWin) {
    userScore++; // increment user score
    userScorePara.innerText = userScore; // update the score display
    // ${userChoice} -: we write like this becoz we want to write number as string not as a number 
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`; // message for user win
    msg.style.backgroundColor = "green"; // green background for win
  } else {
    compScore++; // increment computer score
    compScorePara.innerText = compScore; // update the score display
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`; // message for computer win
    msg.style.backgroundColor = "red"; // red background for loss
  }

};



// 3-: choice for computer, playGame is a variable 
const playGame = (userChoice) => {
  // to Generate computer's choice, call the function "genCompChoice" -: 
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    // Draw Game
    drawGame(); // fun call -: 

  } else {
    let userWin = true; // assume user wins by default
    if (userChoice === "rock") {
      // scissors, paper
      userWin = compChoice === "paper" ? false : true; // rock beats scissors, but loses to paper
    } else if (userChoice === "paper") {
      // rock, scissors
      userWin = compChoice === "scissors" ? false : true; // paper beats rock, but loses to scissors
    } else {
      // rock, paper
      userWin = compChoice === "rock" ? false : true; // scissors beat paper, but lose to rock
    }

    // 5-: Display winner
    showWinner(userWin, userChoice, compChoice);
  }
};



// 1-: this is user's choice -: 
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id"); // get the ID to know the user's choice
    playGame(userChoice); // call the playGame function with the user's choice
  });
});
