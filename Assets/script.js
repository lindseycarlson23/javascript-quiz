
var quizData = [
    {
        question: "What is my fave color?",
        options: [1, 2, 3, 4], //options - put each option on a button
        answer: 0 //index
    },
    {
        question: "What is my fave number?",
        options: [1, 2, 3, 4], //options - put each option on a button
        answer: 2 //index
    },
    {
        question: "What is my fave food?",
        options: [1, 2, 3, 4], //options - put each option on a button
        answer: 2 //index
    },
    {
        question: "What is my fave person?",
        options: [1, 2, 3, 4], //options - put each option on a button
        answer: 1 //index
    },
    {
        question: "What is my fave book?",
        options: [1, 2, 3, 4], //options - put each option on a button
        answer: 4 //index
    }
];

var currentQuestion = 0;

var questionElement = document.querySelector('.question');
var optionsElement = document.querySelector('.options');
var score = 0;
var secondsLeft;



function endGame() {
    //runs if you run out of time or finish questions
    //provide input for initials
    var userInitials = document.createElement("INPUT");
    userInitials.setAttribute("type", "text");
    document.querySelector("#question-container").innerHTML="";
    document.querySelector("#question-container").appendChild(userInitials);
    //show high scores
}



function loadQuestion() {
      
    var currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
    optionsElement.innerHTML = '';

    currentQuizData.options.forEach((option, index) => {
        var button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => {
            if (index !== currentQuizData.answer) { //if the answer is incorrect
                secondsLeft -=10;
                console.log("wrongAnswer")
                currentQuestion++; 
                
                //and add one point
                if (currentQuestion < quizData.length) {
                        loadQuestion();
                } else { 
                        endGame();
                        // questionElement.textContent = "Quiz completed"; //end the quiz SHOW HIGH SCORES
                        // optionsElement.innerHTML = '';
                }; 
            // correct answer, move to the next question
            } else {
                score+=1;
                currentQuestion++; 
                
                if (currentQuestion < quizData.length) {
                        loadQuestion();
                } else { 
                        questionElement.textContent = "Quiz completed"; //end the quiz
                        optionsElement.innerHTML = '';
                }; 
            };
        });
        optionsElement.appendChild(button);
    });
};

// loadQuestion();
    
function startQuiz() {
    console.log("I am here!")
    secondsLeft = 30;
    var timer = document.getElementById("time");
    document.getElementById("startButton").classList.add("hidden");
    document.getElementById("question-container").classList.remove("hidden");
    document.getElementById("time").classList.remove("hidden");
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left";
        // secondsLeft = document.getElementById("time").innerHTML;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);

            // showScores();
        };
    }, 1000);
    loadQuestion();
};

function wrongAnswer() {
    secondsLeft -=10;
}


document
    .getElementById("startButton")
    .addEventListener("click", startQuiz);



//TODO
//End Game function
//Set score and get score functions - this is how to store on local storage
//optional - reset game

// Timer!!!
// var secondsLeft = 30;
// secondsLeft = document.getElementById("time").innerHTML;

// function setTime() {
//     var timerInterval = setInterval(function() {
//         secondsLeft--;
//         // timeElem.textContent = secondsLeft + " seconds left";
//         secondsLeft = document.getElementById("time").innerHTML;

//         if(secondsLeft === 0) {
//             clearInterval(timerInterval);
//             // showScores();
//         }
//     }, 1000);
// }

// function showScores() {
//     "My High Scores!"
// }