// 
function check(){

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var correct = 0;

//if else statement
if (question1 == "ASIA") {
    correct++;
}

if (question2 == "CANADA") {
    correct++;
}

 if (question3 == "TUNISIA") {
    correct++;
}

 if (question4 == "DAMASCUS") {
    correct++;
}

if (question5 == "AFRICA") {
    correct++;
}
else{
    // console log wrong answers 
    // show user wrong questions with wrong answers  
    // display a message 
}
//array goes here
var messages = ["You Aced It", "Not bad", "You need to study"];

var range;



document.getElementById("number-correct").innerHTML = "You got " + correct + "correct.";
}