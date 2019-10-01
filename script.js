console.log("Hello world");

//Global Variables
var level = 0;
var task = 0;

// Word Choices per round and per Level 
const level1 = {
    task1: {
        correct: 'door',
        incorrect: ['dog', 'day', 'down',]
    },
    task2: {
        correct: 'window',
        incorrect: ['white', 'when', 'walk',]
    },
    task3: {
        correct: 'roof',
        incorrect: ['red', 'run', 'read']
    }
}

const level2 = {
    task1: {
        correct: 'chair',
        incorrect: ['child', 'chain', 'cherry']
    },
    task2:{
        correct: 'desk',
        incorrect: ['door', 'does', 'deer']
    },
    task3:{
        correct: 'backpack',
        incorrect: ['become', 'because', 'baloon']
    }
}

//DOM references //
var allImages = document.getElementsByClassName("allImages");
var allImageRight = document.getElementById("allImageRight");
var imageCenter = document.getElementById("imageCenter");
var doorImage = document.getElementById("door");
var windowImage = document.getElementById("window");
var roofImage = document.getElementById("roof");

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
// wordBox.addEventListener('click', function(e){
//     if (e.target.id === "choice1"){
//         level1Task2Words();
//         imageCenter.src = `images/window.png`
//         allImageRight.src = `images/door.png`
//         console.log("worked?")
//     }
//     //delay of 10 seconts 
//     //stetch goal of animation 
//     //check endLevel 
// });

//Want to accomplish: //
/*
    want to impliment a method that will use a counter to determine what the event listener should do
    start of the game would make level = 1 and task = 1. When user completes the first correct answer
    task would equal 2. that way I could feed in level1Task2Words and move the correct images in the 
    correct spot. 
    //can I add event listeners to a switch statement?
    // look up usage of the  indexOf() function 
    //Do I have to put the correct answers in an array. would that impact the manner I retrieve the 
    words/task options? 
    //e.target.indexOf()
*/

//Click function. what happens when the correct word is clicked
wordBox.addEventListener('click', function(e){
    if (e.target.id === "choice1"){
        level1TaskIterations();
        task++
        level = 1;
        if (task === 4){
            level++
        }
    }
});

// Level 1 
function level1TaskIterations(){
    if (level === 1 && task === 1){
        level1Task1Words();
        imageCenter.src = `images/door.png`;
        // allImageRight.src = ``;
        console.log(`task number is: ${task}`);
        console.log(`level number is: ${level}`);
    }  else if (level === 1 && task === 2){
        level1Task2Words();
        imageCenter.src = `images/window.png`;
        doorImage.style.display = 'inline-block';
        console.log(`task number is: ${task}`);
        console.log(`level number is: ${level}`);
    } else if (level === 1 && task === 3){
        level1Task3Words();
        imageCenter.src = `images/roof.png`;
        doorImage.style.display = 'inline-block';
        windowImage.style.display = 'inline-block';
        console.log(`task number is: ${task}`);
        console.log(`level number is: ${level}`);
    } else if (level ===1 && task == 4) {
        imageCenter.src = `images/house.png`;
        doorImage.style.display = 'inline-block';
        windowImage.style.display = 'inline-block';
        roofImage.style.display = 'inline-block';
        //TODO: make `images/house.png` appear with setInterval 1000 miliseconds
        task === 0;
        level === 1;
        console.log(`task number is: ${task}`);
        console.log(`level number is: ${level}`);
    }
}

//Level 2 
function level2TaskIterations(){

}

//Accessing words per given level  //

function level1Task1Words(){
    correctField.textContent = level1.task1.correct;
    incorrectField1.textContent = level1.task1.incorrect[0];
    incorrectField2.textContent = level1.task1.incorrect[1];
    incorrectField3.textContent = level1.task1.incorrect[2];
}

function level1Task2Words(){
    correctField.textContent = level1.task2.correct;
    incorrectField1.textContent = level1.task2.incorrect[0];
    incorrectField2.textContent = level1.task2.incorrect[1];
    incorrectField3.textContent = level1.task2.incorrect[2];
}

function level1Task3Words(){
    correctField.textContent = level1.task3.correct;
    incorrectField1.textContent = level1.task3.incorrect[0];
    incorrectField2.textContent = level1.task3.incorrect[1];
    incorrectField3.textContent = level1.task3.incorrect[2];
}

function level2Task1(){
    correctField.textContent = level2.task1.correct;
    incorrectField1.textContent = level2.task1.incorrect[0];
    incorrectField2.textContent = level2.task1.incorrect[1];
    incorrectField3.textContent = level2.task1.incorrect[2];
}

function level2Task2(){
    correctField.textContent = level2.task2.correct;
    incorrectField1.textContent = level2.task2.incorrect[0];
    incorrectField2.textContent = level2.task2.incorrect[1];
    incorrectField3.textContent = level2.task2.incorrect[2];
}

function level2Task3(){
    correctField.textContent = level2.task3.correct;
    incorrectField1.textContent = level2.task3.incorrect[0];
    incorrectField2.textContent = level2.task3.incorrect[1];
    incorrectField3.textContent = level2.task3.incorrect[2];
}

//Functions//


//Game Init Function//
function init (){
    level1Task1Words();
    imageCenter.src = `images/door.png`
    task = 0;
    console.log(`task number is: ${task}`);
    console.log(`level number is: ${level}`);
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
function reset (){
    imageCenter.src = ``;
    doorImage.style.display = 'none';
    windowImage.style.display = 'none';
    roofImage.style.display = 'none';
    task = 0;
    level = 1;
}




