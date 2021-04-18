let questions= [{
    question:"What is the baby name of a Moth known as?",
    choices:["baby", "infant", "kit", "larva"],
    correctAnswer:3
},{
    question:"What is the adult of a kid called",
    choices:["calf","doe", "goat", "chick"],
    correctAnswer: 2
},{
    question:"What is the young of a buffalo called?",
    choices:["calf", "baby", "pup", "cow"],
    correctAnswer:0
},{
    question:"What is a baby Alligator called?",
    choices:["baby", "gator", "hatchling", "calf"],
    correctAnswer:2
},{
    question:"What is a baby Goose called?",
    choices:["gooser", "gosling","gup", "pup"],
    correctAnswer:1
},{
    question:"What is a baby hamster called?",
    choices:["pup", "chick", "infant", "bully"],
    correctAnswer:0
},{
    question:"What is a baby Hawk called?",
    choices:["pup", "chick", "infant", "billy"],
    correctAnswer:0
},{
    question: "What is a baby Hawk called?",
    choices: ["hawklett","pup","larva", "eyas"],
    correctAnswer: 3
},{
   question:"What is a baby kangaroo called?",
   choices:["kinga","joey","calf","baby"],
   correctAnswer:1 
},{
    question:"What is a baby whale called?",
    choices:["whala","cub", "grub","infant"],
    correctAnswer:1
},{
    question:"what is a baby monkey called?",
    choices:["infant","baby","calf","pup"],
    correctAnswer:0
},{
    question:"What is a baby bear called?",
    choices:["cub","baby balu", "young bear","bearlet"],
    correctAnswer:0
}];


var currentQuestion=0;
var correctAnswers=0;
var quizOver= false;

$(document).ready(function() {   //.ready makes sure the page is ready
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide(); //hides the other question
    $(this).find(".nextButton").on("click", function(){  //when clicked
        if(!quizOver){
            value=$("input[type='radio']:checked").val();
            if(value== undefined){ //if an answe is not defined
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            }else{
                $(document).find(".quizMessage").hide();
                if (value == questions[currentQuestion].correctAnswer){
                    correctAnswers++;   //adds to correct answers
                }
                currentQuestion++;
                if(currentQuestion<questions.length){ //checks the number of questions remaining
                    displayCurrentQuestion();
                }else{
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver=true;
                }
            }
        }else{
            quizOver= false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});