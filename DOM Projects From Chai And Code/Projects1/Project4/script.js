// 1-: Generate a random number b/w 1 to 100. 
let randomNumber = parseInt(Math.random() * 100 + 1);

const Submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.LowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []; // this is an array 
let numGuess = 1; // it checks if guess is > than 10 then returns 

let playGame = true;

if (playGame) { // user game play karne ke liye allow hai 
    Submit.addEventListener('click', function (e) { // user enter the no. 
        // form submit hokar server ke pass na chale isliye yahan pe rokna hoga 
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess); // print the no. 
        validateGuess(guess); // display no. 
    });
}

// These below are given some methods:

// Function takes a parameter guess:
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number more than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

// Function to check if the guess is correct, too high, or too low
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is too low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is too high`);
    }
}

// Function to display the guess:
function displayGuess(guess) {
    userInput.value = ''; // it clears the input value 
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

// Function to display the message:
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// Function to end the game:
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

// Function to start a new game:
function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []; // reset the array
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}
