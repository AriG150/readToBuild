
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
    },
    task4:{
        message: `You've completed level 1!`
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
var backpackImage = document.getElementById("backpack");
var chairImage = document.getElementById("chair")
var deskImage = document.getElementById("desk");
var classroomImage = document.getElementById("classroom");

var levelUpButton = document.getElementById("levelUp");
var resetButton = document.getElementById("reset");
var startButton = document.getElementById("start");

var title = document.getElementById("title");

var words = document.getElementsByClassName("words");
var wordBox = document.getElementById("wordBox");

var correctField = document.getElementById("choice1");
var incorrectField1 = document.getElementById("choice2");
var incorrectField2 = document.getElementById("choice3");
var incorrectField3 = document.getElementById("choice4");



//Event Listners 
startButton.addEventListener('click', init);
// resetButton.addEventListener('click', reset);

//Click function. what happens when the correct word is clicked
wordBox.addEventListener('click', function(e){
    if (e.target.id === "choice1" && level === 1){
        level1TaskIterations();
        task++
    }
    else if (e.target.id === "choice1" && level === 2){
        level2TaskIterations();
        task++
        // TODO: if (task == 4){
        //     gameover();
        // }
    }
});


levelUpButton.addEventListener('click', function(){
    level = 2;
    task = 1;  
    level2TaskIterations();
    levelUpButton.style.display = 'none';
    title.textContent = "Build a Classroom!"
    doorImage.style.display = 'none';
        windowImage.style.display = 'none';
        roofImage.style.display = 'none';
})


// Level 1 
function level1TaskIterations(){
    if (level === 1 && task === 2){
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
    } else if (level === 1 && task == 4) {
        imageCenter.src = `images/house.png`;
        doorImage.style.display = 'inline-block';
        windowImage.style.display = 'inline-block';
        roofImage.style.display = 'inline-block';
        //TODO: make `images/house.png` appear with setInterval 1000 miliseconds
        levelUpButton.style.display = 'block';
        console.log(`task number is: ${task}`);
        console.log(`level number is: ${level}`);
    }
}

//Level 2 
function level2TaskIterations(){
    if (level === 2 && task === 1){
        level2Task1Words();
        imageCenter.src = `images/chair.png`
        // levelUpButton.style.display = 'none';
        console.log(`task number is: ${task}`);
        console.log(`level number is: ${level}`);
    } else if ( level === 2 && task === 2){
        imageCenter.src=`images/desk.png`;
        chairImage.style.display = 'inline-block';
        level2Task2Words();
        console.log(`task number is: ${task}`);
        console.log(`level number is: ${level}`);
    } else if (level === 2 && task === 3){
        level2Task3Words();
        imageCenter = `images/backpack.png`
        chairImage.style.display = 'inline-block';
        deskImage.style.dispaly= 'inline-block';
        console.log(`task number is: ${task}`);
        console.log(`level number is: ${level}`);
    } else if (level === 2 && task === 4){
        chairImage.style.display = 'inline-block';
        deskImage.style.dispaly = 'inline-block';
        backpackImage.style.display = 'inline-block';
        console.log("where the classroom image is inserted.");
        console.log("you've finished message");
        console.log(`task number is: ${task}`);
        console.log(`level number is: ${level}`);
    }
}

//Accessing words per given level  //

//level 1 
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

function level1LevelFinished(){
    message.textContent = level1.task4;
}

// level 2 
function level2Task1Words(){
    correctField.textContent = level2.task1.correct;
    incorrectField1.textContent = level2.task1.incorrect[0];
    incorrectField2.textContent = level2.task1.incorrect[1];
    incorrectField3.textContent = level2.task1.incorrect[2];
}

function level2Task2Words(){
    correctField.textContent = level2.task2.correct;
    incorrectField1.textContent = level2.task2.incorrect[0];
    incorrectField2.textContent = level2.task2.incorrect[1];
    incorrectField3.textContent = level2.task2.incorrect[2];
}

function level2Task3Words(){
    correctField.textContent = level2.task3.correct;
    incorrectField1.textContent = level2.task3.incorrect[0];
    incorrectField2.textContent = level2.task3.incorrect[1];
    incorrectField3.textContent = level2.task3.incorrect[2];
}

//Functions//


//Game Init Function//
function init (){
    title.textContent = "Build a House!"
    level1Task1Words();
    imageCenter.src = `images/door.png`
    task = 1;
    level = 1;

    console.log(`task number is: ${task}`);
    console.log(`level number is: ${level}`);
}

//reset function
// pop-up 'Are you sure you want to reset the game?'
// call init();
// function reset (){
//     title.textContent = "It's time to Build!"
//     imageCenter.src = `images/door.png`;
//     level1Task1Words();
//     task = 1;
//     level = 1;
//     levelUpButton.style.display = 'none';
//     doorImage.style.display = 'none';
//     windowImage.style.display = 'none';
//     roofImage.style.display = 'none';
//     console.log(`task number is: ${task}`);
//     console.log(`level number is: ${level}`);
//     //TODO: remove words 
// }




//End Level function // 
//if array allImage.length is 3 (ie has door, window, and roof) game has finished 
// strech: make pop-up "You've finished the first level. Congradulations. Get ready for level 2!"
// load second level after 10 seconds 




