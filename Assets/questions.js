// start button 
    //event listener
// var startButton = document.querySelector("#start-button");
// var isWin = false;

var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount = 0;


// var timerCount;
// var timerElement;

// Array of questions to be asked written as objects

//make this reference the HTML


//for loop for going through the question array
for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response === questions[i].answer){
        score++;
        alert("Correct!");
    }   else {
        alert("WRONG!");
    }
}

alert("you got " + score + "/" + questions.length)





//event listener
document.getElementById("#start-button").onclick = function(){

}

    //startButton.addEventListener("click", startGame); 

// startGame function called when start button is clicked
function startGame() {
    isWin = false;
    timerCount = 30;
    countdown()
}

// // startTimer starts and stops the timer
// function startTimer() {
//     timer = setInterval(function() {
//         timerCount--;
//         timerElement
//     })
// }


// button timer

// function timerCountdown() {
//     var secondsLeft = 60; //60 seconds
//     var timerInterval = setInterval(function () {

//         //function that subtracts 15 seconds for wrong answer
//     });
// }


// Timer that counts down from 5
function countdown() {
    var timerCount = 30;
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}




var penaltyPerWrongQuestionInSeconds = 15; //seconds
var time = null;
var index = 0;
var quizData = [
    {
        title: "What is the answer to Question 1?",
        options: [1, 2, 3, 4],
        answer: 0
    },
    {
        title: "What is the answer to Question 2?",
        options: [1, 2, 3, 4],
        answer: 0
    },
    {
        title: "What is the answer to Question 3?",
        options: [1, 2, 3, 4],
        answer: 0
    },
    {
        title: "What is the answer to Question 4?",
        options: [1, 2, 3, 4],
        answer: 0
    }
];

function renderQuestion() {
    var currentQuestion = quizData
}

function jumpNext() {

}

function startLoop() {
    index = 0;
    var currentQuestion = quizData[index];
}


function startQuiz(event) {
    event.target.hidden = true;
    startLoop();
}


document
    .getElementById("startButton")
    .addEventListener("click", startQuiz);