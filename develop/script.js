// when start button is clicked, start game and timer countdownDisplay
// display question with multiple choices from array
// when incorrect answer is chosen, deduct 20 seconds from timer
// display new question and repeat
// when questions run out, display score - remaining time - and ask for initials
// set score and initials in localStorage
// When View High Scores is clicked, get scores and initials from localStorage
// Organize by high score

var body = document.body;
// use this to remove all intro content after start button is clicked
var intro = document.querySelector("#intro");
var displayScores = document.getElementById("#displayScores");
// display time left in countdown
var countdownDisplay = document.createElement("h3");
var startBtn = document.querySelector("#startBtn");
var displayQuestion = document.createElement("h1");
// display choices in ordered list
var choicesSection = document.createElement("ol");
var displayChoice1 = document.createElement("li");
var displayChoice2 = document.createElement("li");
var displayChoice3 = document.createElement("li");
var displayChoice4 = document.createElement("li");
var highScore = document.createElement("a");
var scoresList = document.createElement("h4");
var initInput = document.createElement("input");
var initBtn = document.createElement("button");

var timeLeft = 60;


// element styling
body.setAttribute("style", "text-align:center; align-items: center;");
intro.setAttribute("style", "margin-top:200px; line-height: 2.8;");
startBtn.setAttribute("style", "font-size: 30px; background-color:aqua; color: darkblue; font-weight: bold; border-radius: 7px; padding: 10px 30px;")
countdownDisplay.setAttribute("style", "text-align:right; margin: 45px 100px; font-size: 40px;");
displayQuestion.setAttribute("style", "width:100%;font-size:45px; background-color: darkblue; color: white; padding:30px;");
choicesSection.setAttribute("style", "margin:100px; text-align:left; list-style:none; font-size:30px; margin:none; padding:none;");
displayChoice1.setAttribute("style", "background-color: lightblue; margin-bottom: 10px; padding: 20px 60px;");
displayChoice2.setAttribute("style", "background-color: lightblue; margin-bottom: 10px; padding: 20px 60px;");
displayChoice3.setAttribute("style", "background-color: lightblue; margin-bottom: 10px; padding: 20px 60px;");
displayChoice4.setAttribute("style", "background-color: lightblue; margin-bottom: 10px; padding: 20px 60px;");
highScore.setAttribute("style", "margin-top: 100px; font-size: 30px;");
initBtn.setAttribute("style", "display: block; background-color:aqua; color: darkblue; font-weight: bold; border-radius: 7px; padding: 10px 30px; font-size: 22px; margin: 10px auto;");

// end element styling

// questions and answers

var questionCounter = 0;
const maxQuestions = 5;
const questions = [
    {
        question: "How many strings are there on a concert grand pedal harp?",
        choice1: "25",
        choice2: "36",
        choice3: "44",
        choice4: "52",
        answer: "44",
    },
    {
        question: "When was Jurassic Park 1 released?",
        choice1: "1993",
        choice2: "1996",
        choice3: "1995",
        choice4: "1999",
        answer: "1993",
    },
    {
        question: "How old was Abraham Lincoln when he took office as President?",
        choice1: "25",
        choice2: "36",
        choice3: "44",
        choice4: "52",
        answer: "52",
    },
    {
        question: "What was the first song released by the Beach Boys?",
        choice1: "Surfer Girl",
        choice2: "Surfin'",
        choice3: "California Girls",
        choice4: "Help me, Rhonda",
        answer: "Surfin'",
    },
    {
        question: "How many flavors of ice cream is Baskin Robins famous for?",
        choice1: "32",
        choice2: "40",
        choice3: "31",
        choice4: "35",
        answer: "31",
    },
]// end of questions

// start game
var startQuiz = function () {
    // when startBtn is clicked, remove intro html
    // start timer
    // display question first question
    intro.innerHTML = "";
    intro.setAttribute("style", "margin-top: 0px;");
    intro.appendChild(countdownDisplay);
    countdown();
    nextQuestion();
};

var nextQuestion = function () {

    // // if there are more questions
    // // display next question and choices in array
    // // when an answer is clicked, check to see if correct
    // if incorrect subtract 20 seconds
    if (!questions[questionCounter]) {
        endGame();
        return;
    }

    displayQuestion.textContent = questions[questionCounter].question;
    displayChoice1.textContent = questions[questionCounter].choice1;
    displayChoice2.textContent = questions[questionCounter].choice2;
    displayChoice3.textContent = questions[questionCounter].choice3;
    displayChoice4.textContent = questions[questionCounter].choice4;

    intro.appendChild(displayQuestion);
    intro.appendChild(choicesSection);
    choicesSection.appendChild(displayChoice1);
    choicesSection.appendChild(displayChoice2);
    choicesSection.appendChild(displayChoice3);
    choicesSection.appendChild(displayChoice4);

};

var checkAnswer = function (event) {
    var clicked = event.target;


    if (clicked.innerText === questions[questionCounter].answer) {
        console.log("yay")
    }
    else {
        console.log("nope");
        timeLeft = timeLeft - 20;
    }
    questionCounter++
    nextQuestion();
};

// start timer at 60, deduct 20 seconds for wrong answers
countdown = function () {

    var timerInterval = setInterval(function () {
        if (timeLeft > 0) {
            countdownDisplay.innerText = timeLeft;
            timeLeft--;
        }
        else {
            timeLeft = 0;
            countdownDisplay.innerText = "";
            clearInterval(timerInterval);
            endGame();
            return;
        }
    }, 1000);
};

endGame = function () {
    // display score
    // prompt for initials
    // save initials in localStorage
    intro.innerHTML = 'Your score is ' + timeLeft;
    intro.setAttribute("style", "font-size: 40px; margin-top: 50px;");
    score = timeLeft
    localStorage.setItem("Score", score);
    initials = prompt("What are your initials?");
    localStorage.setItem("Initials", initials);
    

    body.appendChild(initBtn);
    initBtn.innerText = "Play again?";
    body.appendChild(highScore);
    highScore.appendChild(scoresList);
    scoresList.innerText = "View high scores";
    highScore.href = "./endGame.html";
}

viewScores = function() {
    recentInit = localStorage.getItem("Initials", initials);
    console.log(recentInit);
    recentScore = localStorage.getItem("Score", score);
    console.log(recentScore);

    displayScores.innerText = recentInit, recentScore;

}
// start quiz
startBtn.addEventListener("click", startQuiz);
choicesSection.addEventListener("click", checkAnswer);
initBtn.addEventListener("click", startQuiz);
scoresList.addEventListener("click", viewScores);
