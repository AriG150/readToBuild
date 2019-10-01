console.log("Hello world");

//Global Variables
var level = 0;
var answer = 0;

// Word Choices per round and per Level 
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

//DOM references //
var allImages = document.getElementsByClassName("allImages");
var allImageGoal = document.getElementById("allImageGoal");
var imageGoal = document.getElementById("imageGoal");
var doorImage = document.getElementById("doorImage");
var words = document.getElementsByClassName("words");
var wordBox = document.getElementById("wordBox");
var toggleLevel = document.getElementsByClassName("switch");
var resetButton = document.getElementById("reset");
var startButton = document.getElementById("start");
var correctField = document.getElementById("choice1");
var incorrectField1 = document.getElementById("choice2");
var incorrectField2 = document.getElementById("choice3");
var incorrectField3 = document.getElementById("choice4");



//Event Listners 
startButton.addEventListener('click', init);
resetButton.addEventListener('click', reset);

//words clickable
wordBox.addEventListener('click', function(e){
    //if wrong word clicked do nothing
    if (e.target.id === "choice1"){
        level1Answer2Words();
        imageGoal.src = `images/window.png`
        allImageGoal.src = `images/door.png`
        console.log("worked?")
    }
    //delay of 10 seconts 
    //stetch goal of animation 
    //check endLevel 
});

//Accessing words per given level  //

function level1Answer1Words(){
    correctField.textContent = level1.answer1.correct;
    incorrectField1.textContent = level1.answer1.incorrect[0];
    incorrectField2.textContent = level1.answer1.incorrect[1];
    incorrectField3.textContent = level1.answer1.incorrect[2];
}

function level1Answer2Words(){
    correctField.textContent = level1.answer2.correct;
    incorrectField1.textContent = level1.answer2.incorrect[0];
    incorrectField2.textContent = level1.answer2.incorrect[1];
    incorrectField3.textContent = level1.answer2.incorrect[2];
}

function level1Answer3Words(){
    correctField.textContent = level1.answer3.correct;
    incorrectField1.textContent = level1.answer3.incorrect[0];
    incorrectField2.textContent = level1.answer3.incorrect[1];
    incorrectField3.textContent = level1.answer3.incorrect[2];
}


//Functions//


//Game Init Function//
function init (){
    level1Answer1Words();
    imageGoal.src = `images/door.png`
}

//create counter function that increases the level/answer number that corresponds with level1Answer1, level1Answer2 etc
//for every increase of those numbers, create a new function that has an event lister that calls the correct words and images


//End Level function // 
//if array allImage.length is 3 (ie has door, window, and roof) game has finished 
// elements no longer clickable
//reset button clickable
// strech: make pop-up "You've finished the first level. Congradulations. Get ready for level 2!"
// load second level after 10 seconds 


//reset function
// pop-up 'Are you sure you want to reset the game?'
// call init();




