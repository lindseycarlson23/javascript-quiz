//question array
var quizData = [
    {
        question: "Which is the correct way to write a comment in JavaScript?",
        options: ["??...", "//...", "{#...#}", "!---....---!"], 
        answer: 1 
    },
    {
        question: "Which array method sorts the elements of an array?",
        options: ["changeOrder(order)", "order()", "sort()", "goBanadas()"], 
        answer: 2 
    },
    {
        question: "How do you create a new function in JavaScript?",
        options: ["new.function() {}", "function myFunction() {}", "function = myFunction() {}", "function:myFunction() {}"], //options - put each option on a button
        answer: 2 
    },
    {
        question: "Which is not a primitive data type in JavaScript?",
        options: ["String", "Object", "Boolean", "Numbers"], 
        answer: 1 
    },
    {
        question: "What is the actual value supplied when a function is called?",
        options: ["array", "trueValue", "null", "argument"], 
        answer: 3 
    }
];

var currentQuestion = 0;

var questionElement = document.querySelector('.question');
var optionsElement = document.querySelector('.options');
var score = 0;
var secondsLeft;

//runs if you run out of time or finish questions
//creates input box for initials
//displays score
function endGame() {
    var userInitials = document.createElement("INPUT");
    userInitials.setAttribute("type", "text");
    userInitials.classList.add("initials");
    document.querySelector("#question-container").innerHTML="";
    document.querySelector("#question-container").appendChild(userInitials);
    var saveInitials = document.createElement("button");
    saveInitials.textContent = "Save Initials";
   
    document.querySelector("#question-container").appendChild(saveInitials);
    saveInitials.addEventListener('click', function(event){
        event.preventDefault();
        let initialsAndScore = {
            initials: userInitials.value,
            score: score
        }
        localStorage.setItem("Initials", JSON.stringify(initialsAndScore)) ;
        document.querySelector("#question-container").innerHTML="";
        let initials = JSON.parse(localStorage.getItem("Initials"));
        document.querySelector("#question-container").innerHTML= "initials: " + initials.initials + "<br/>" + "score: " + initials.score;
    });
};


//advances through the questions and reduces timer as applicable
function loadQuestion() {  
    var currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
    optionsElement.innerHTML = '';

    currentQuizData.options.forEach((option, index) => {
        var button = document.createElement('button');
        button.classList.add("answer-buttons");
        button.textContent = option;
        button.addEventListener('click', () => {
            if (index !== currentQuizData.answer) { //if the answer is incorrect
                secondsLeft -=10; 
                currentQuestion++; 
                if (secondsLeft <= 0) { //ends game is timer goes to or past 0
                    document.getElementById("time").classList.add("hidden");
                    endGame();
                }
                                
                if (currentQuestion < quizData.length) {
                        loadQuestion();
                } else { 
                        questionElement.textContent = "This is a test"; 
                        optionsElement.innerHTML = '';
                        document.getElementById("time").classList.add("hidden");
                        endGame();
                }; 
          
            } else { //if the answer is correct
                score+=1;
                currentQuestion++; 
                
                if (currentQuestion < quizData.length) { //if there are more questions
                        loadQuestion();
                } else { //if there aren't more questions
                        questionElement.textContent = "This is a test";
                        optionsElement.innerHTML = '';
                        document.getElementById("time").classList.add("hidden");
                        endGame();
                }; 
            };
        });
        optionsElement.appendChild(button);
    });
};


    
function startQuiz() {
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
            document.getElementById("time").classList.add("hidden");
            endGame();
            // showScores();
        };
    }, 1000);
    loadQuestion();
};




document
    .getElementById("startButton")
    .addEventListener("click", startQuiz);


