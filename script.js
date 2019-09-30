console.log("Hello world");

// Variables 
const level1 = {
    answer1: {
        correct: 'door',
        incorrect: ['dog', 'day', 'down',]
    },
    answer2: {
        correct: 'window',
        incorrect: ['white', 'when', 'walk',]
    },
    answer3: {
        correct: 'roof',
        incorrect: ['red', 'run', 'read']
    }
}


//DOM references 
var allImages = document.getElementsByClassName("allImages");
var imagePart = document.getElementsByClassName("imagePart");
var words = document.getElementsByClassName("words");
var toggleLevel = document.getElementsByClassName("switch");
var resetButton = document.getElementById("reset");
var correctField = document.getElementById("choice1");
var incorrectField1 = document.getElementById("choice2");
var incorrectField2 = document.getElementById("choice3");
var incorrectField3 = document.getElementById("choice4");


//setting words 
function wordPlacement () {
    level1.answer1.correct = correctField.textContent
    level1.answer1.incorrect[0] = incorrectField1.textContent
    level1.answer1.incorrect[1] = incorrectField2.textContent
    level1.answer1.incorrect[2] = incorrectField3.textContent
}

// making wods clickable 

words.addEventListener('click', function(e){
    wordPlacement();
    console.log("clicking worked");
})





