
var quizData = [
    {
        question: "Which is the correct way to write a comment in JavaScript?",
        options: ["??...", "//...", "{#...#}", "!---....---!"], //options - put each option on a button
        answer: 1 //index
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
        answer: 3 //index
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
    var saveInitials = document.createElement("button");
    saveInitials.textContent = "Save Initials";
    document.querySelector("#question-container").appendChild(saveInitials);
    saveInitials.addEventListener('click', function(){
        let initialsAndScore = {
            initials: userInitials.value,
            score: score
        }
        localStorage.setItem("Initials", JSON.stringify(initialsAndScore)) ;
        document.querySelector("#question-container").innerHTML="";
        let initials = JSON.parse(localStorage.getItem("Initials"));
        document.querySelector("#question-container").textContent="Initials: " + initials.initials + " score: " + initials.score;
    });


    //show high scores
};



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
                        questionElement.textContent = "This is a test"; //end the quiz SHOW HIGH SCORES
                        optionsElement.innerHTML = '';
                        endGame();
                }; 
            // correct answer, move to the next question
            } else {
                score+=1;
                currentQuestion++; 
                
                if (currentQuestion < quizData.length) {
                        loadQuestion();
                } else { 
                        questionElement.textContent = "This is a test"; //end the quiz
                        optionsElement.innerHTML = '';
                        endGame();
                }; 
            };
        });
        optionsElement.appendChild(button);
    });
};


    
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
            endGame();
            // showScores();
        };
    }, 1000);
    loadQuestion();
};

// function wrongAnswer() {
//     secondsLeft -=10;
// }


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