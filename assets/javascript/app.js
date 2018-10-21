//opening page with start button
//code to hide the page after button is clicked
//game starts with on same page:
//countdown timer, multiple choice questions
//when timer is done:
//game stops and hides
//Final page shows: ALL DONE!!, correct answers, incorrect answers, unanswered
//========================================
//countdown Timer - showing
//when game ends the score will show - possible .hide, and reveal
//have 10 question with 4 possible answers
//only one answer at a time can be chosen
//add  hover to css  #button:hover {                #button:focus 
//                   cursor: pointer                outline: 0
//                   background-color: ytdytr
//                   }
//dont forget returns to be able to use variable

//var questions
var correctAnswers = [1];
var incorrectAnswers = [0];
var unansweredQuestions = [0];
var count = 0;
var intervalId = 0;
var timmerRunning = false;
var quiz = [
    {
        question: "In what place was Christmas illegal?",
        choice: ["Brazil", "England", "Russia", "France"],
        answer: 1
    },
    {
        question: "In California, is it illegal to eat oranges doing what?",
        choice: ["Bathing", "Gardening", "Driving", "Working on a Computer"],
        answer: 0
    },
    {
        question: "Coulrophobia means fear of what?",
        chioce: ["Clowns", "Old People", "Sacred Things", "Clouds"],
        answer: 0
    },
    {
        question: "Which of the following is the longest running American animated TV show?",
        choice: ["Buggs Bunny", "Pokemon", "The Simpsons", "Rugrats"],
        answer: 2
    },
    
    {
        question: "In what key do most American car-horns honk?",
        choice: ["A", "F", "E", "B"],
        answer: 1
    },
    {
        question: "When glass breaks, the cracks move up to how many mph?",
        choice: [5000, 3000, 1000, 8000],
        answer: 1
    }
]
$(document).ready(function () {
    var resetGame = function () {

    }
},




function get (x) {
return document.getElementById(x);
},

//click start button to start game
$("#start").on("click", function () {
		$("#start").hide();
        var seconds = 60;
        $("#time-display").text(seconds);
        displayQuestion();
        runTimer();
        console.log (seconds);
//		for(var i = 0; i < quiz.length; i++) {
//	holder.push(quiz[i]);

var timer = {
    time = 0,
    lap = 1,

    reset: function () {

        timer.time = 0,
        timer.lap = 1,

        $("#time-display").html("Time remaining: " + "00");
        
    },

    start: function () {

        if (!timmerRunning) {
            intervalId = setInterval(timer.count, 1000);
            timmerRunning = true;
            intervalId = setInterval(decrement, 1000); 
        }

    },
    stop: function () {
        
        clearInterval(intervalId);
        timmerRunning = false;
    }
}
},
    





//function results() 

function startGame() {
    console.log("game has begun");
    $("#start").remove();
    correctAnswers = 0;
    incorrectAnswers = 0;
    unansweredQuestions = 0;
    loadQandA(); {
        $(".class").on("click"(type, "radio"),

        )
    }
},

function displayTrivia () {
    var 
   
   ($("input [type='radio']:checked").each(function() {

    if ($("input [type='radio]:checked").val() === 1) {
        console.log("correct");
        correctAnswers++;
        $("#correctCount").html("Correct Answers" + correctAnswers);
        $("#correctCount").append("Correct Answers" + correctAnswers);
    }
    else {
        console.log("incorrect");
        incorrectAnswers++;
        $("#incorrectCount").html("Wrong Answers" + incorrectAnswers);
        $("#incorrectCount").append("Wrong Answers" + incorrectAnswers);
    }

   })
   
   
   
    // $("#quiz").html(quiz[0].question);
   // question++;

   // var choicesArr = quiz[0].choice;
   // var inputArr = [];

   // for (let i = 0; i < choicesArr.length; i++) {
   //     var radio = $
    //}
)});

