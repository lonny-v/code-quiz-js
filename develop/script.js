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
var countdownDisplay = document.createElement("h3");
var startBtn = document.querySelector("#startBtn");
var displayQuestion = document.createElement("h1");
// display choices in ordered list
var choicesSection = document.createElement("ol");
var displayChoice1 = document.createElement("li");
var displayChoice2 = document.createElement("li");
var displayChoice3 = document.createElement("li");
var displayChoice4 = document.createElement("li");


// element styling
body.setAttribute("style", "text-align:center;");
intro.setAttribute("style", "margin-top:200px; line-height: 2.8;");
startBtn.setAttribute("style", "font-size: 30px; background-color:aqua; color: darkblue; font-weight: bold; border-radius: 7px; padding: 10px 30px;")
countdownDisplay.setAttribute("style", "text-align:right; margin: 45px 100px; font-size: 25px;");
displayQuestion.setAttribute("style", "width:100%;font-size:45px; background-color: darkblue; color: white; padding:30px;");
choicesSection.setAttribute("style", "margin:100px; text-align:left; list-style:none; font-size:30px; margin:none; padding:none;");
displayChoice1.setAttribute("style", "background-color: lightblue; margin-bottom: 10px; padding: 20px 60px;");
displayChoice2.setAttribute("style", "background-color: lightblue; margin-bottom: 10px; padding: 20px 60px;");
displayChoice3.setAttribute("style", "background-color: lightblue; margin-bottom: 10px; padding: 20px 60px;");
displayChoice4.setAttribute("style", "background-color: lightblue; margin-bottom: 10px; padding: 20px 60px;");
// end element styling

// questions and answers
const questions = [
    {
        question: "How many strings are there on a concert grand pedal harp?",
        choice1: "25",
        choice2: "36",
        choice3: "44",
        choice4: "52",
        answer: 3,
    },
    {
        question: "When was Jurassic Park 1 released?",
        choice1: "1993",
        choice2: "1996",
        choice3: "1995",
        choice4: "1999",
        answer: 1,
    },
    {
        question: "How old was Abraham Lincoln when he took office as President?",
        choice1: "25",
        choice2: "36",
        choice3: "44",
        choice4: "52",
        answer: 5,
    },
    {
        question: "What was the first song released by the Beach Boys?",
        choice1: "Surfer Girl",
        choice2: "Surfin'",
        choice3: "California Girls",
        choice4: "Help me, Rhonda",
        answer: 2,
    },
    {
        question: "How many flavors of ice cream is Bask Robins famous for?",
        choice1: "32",
        choice2: "40",
        choice3: "31",
        choice4: "35",
        answer: 3,
    },
]

var startQuiz = function () {
    // when startBtn is clicked, remove intro html
    // start timer
    // display questions
    intro.innerHTML = "";
    intro.setAttribute("style", "margin-top: 0px;");
    countdownDisplay.textContent = "60 seconds";

   
    displayQuestion.textContent = questions[1].question;
    displayChoice1.textContent = questions[1].choice1;
    displayChoice2.textContent = questions[1].choice2;
    displayChoice3.textContent = questions[1].choice3;
    displayChoice4.textContent = questions[1].choice4;

    // print questions and choices to screen
    body.appendChild(countdownDisplay);
    body.appendChild(displayQuestion);
    body.appendChild(choicesSection);
    choicesSection.appendChild(displayChoice1);
    choicesSection.appendChild(displayChoice2);
    choicesSection.appendChild(displayChoice3);
    choicesSection.appendChild(displayChoice4);
    console.log(questions[1].answer);
};

// start timer at 60, deduct 20 seconds for wrong answers
countdown = function () {
    // wrong answers:
    time = time - 20;
};

// start quiz
startBtn.addEventListener("click", startQuiz);