
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





function loadQuestion() {
    // console.log("The loop is started: ", index);
    // console.log("Current state of index after start: ", index);
    var currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
    optionsElement.innerHTML = '';

    currentQuizData.options.forEach((option, index) => {
        var button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => {
            console.log()
            if (index !== currentQuizData.answer) { //if the answer is incorrect
                //subtract 15 seconds  
                currentQuestion++; //and add one point
                if (currentQuestion < quizData.length) {
                        loadQuestion();
                } else { 
                        questionElement.textContent = "Quiz completed"; //end the quiz
                        optionsElement.innerHTML = '';
                }; 
            // correct answer, move to the next question
            } else {
                currentQuestion++; 
                //and add one point
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
}

loadQuestion();
    
function startQuiz() {
    document.getElementById("startButton").hidden = true;
    document.getElementsByClassName("question").hidden = false;
    loadQuestion();
};

document
    .getElementById("startButton")
    .addEventListener("click", startQuiz);

    // jumpNext();


// function renderQuestion() {
//     console.log("We are going to render a question at position: ", index);
//     var currentQuestion = quizData[index];
//     console.log("currentQuestion: ", currentQuestion);

//     //render the title
//     var titleObject = document.getElementById("title");
//     titleObject.innerHTML = currentQuestion.title;

//     // //render the options
//     // document.getElementById("option_0").innerHTML = currentQuestion.options[0];
//     // document.getElementById("option_1").innerHTML = currentQuestion.options[1];
//     // document.getElementById("option_2").innerHTML = currentQuestion.options[2];
//     // document.getElementById("option_3").innerHTML = currentQuestion.options[3];
//     // document.getElementById("option_4").innerHTML = currentQuestion.options[4];

// }

// function jumpNext() {
//     index = index++
// //     startLoop();
// }