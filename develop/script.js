// when start button is clicked, start game and timer countdown
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
var countdown = document.createElement("h3");
var startBtn = document.querySelector("#startQuiz");
var displayQuestion = document.createElement("h1");
// display choices in ordered list
var choicesSection = document.createElement("ol");
var displayChoice1 = document.createElement("li");
var displayChoice2 = document.createElement("li");
var displayChoice3 = document.createElement("li");
var displayChoice4 = document.createElement("li");

countdown.textContent = "60 seconds";
displayQuestion.textContent = "Question 1";
displayChoice1.textContent = "Choice 1";
displayChoice2.textContent = "Choice 2";
displayChoice3.textContent = "Choice 3";
displayChoice4.textContent = "Choice 4";

body.appendChild(countdown);
body.appendChild(displayQuestion);
displayQuestion.appendChild(choicesSection);
choicesSection.appendChild(displayChoice1);
choicesSection.appendChild(displayChoice2);
choicesSection.appendChild(displayChoice3);
choicesSection.appendChild(displayChoice4);

body.setAttribute("style", "text-align:center;");
startBtn.setAttribute("style", "font-size: 30px; background-color:aqua; color: darkblue; font-weight: bold; border-radius: 7px; padding: 10px;")
countdown.setAttribute("style", "text-align:right; margin-right:100px; font-size: 25px;");
displayQuestion.setAttribute("style", "margin:auto; padding:30px; font-size:45px;");
choicesSection.setAttribute("style", "margin-left: 200px; text-align:left; list-style:none;");


