var body = document.body;
body.setAttribute("style", "margin:100px;");
displayInitials.setAttribute("style", "font-size: 40px")
displayScores.setAttribute("style", "font-size: 40px")

var viewScores = function () {
    recentInit = localStorage.getItem("Initials");
    console.log(recentInit);
    recentScore = localStorage.getItem("Score");
    console.log(recentScore);

    displayInitials.innerText = recentInit;
    displayScores.innerText = recentScore;


}

window.onload = (viewScores)