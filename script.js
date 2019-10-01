console.log("Hello world");

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

// imageCenter. false = not appear, true = appear 
var imageCenter = {
    door: false,
    window: false,
    roof: false,
    house: false,
}

var allImages = []

//DOM references //
var allImages = document.getElementsByClassName("allImages");
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

//words clickable
wordBox.addEventListener('click', function(e){
    //if wrong word clicked do nothing
    if (e.target.id === "choice1"){
        console.log("worked?")
        // level1Answer3();
    }
    //if correct word clicked 
    //remove image door from center 
    //add image door from top right 
    // load level two 
    //delay of 10 seconts 
    //stetch goal of animation 
    //check endLevel 
    
    // if (!imageCenter[selectImage] && !endLevel){
    //     e.target.src = `images/${selectImage}.png`;
    //     imageCenter[selectImage] = true;
    // }
});


//Functions//


//setting words //
function level1Answer1 (){
    correctField.textContent = level1.answer1.correct;
    incorrectField1.textContent = level1.answer1.incorrect[0];
    incorrectField2.textContent = level1.answer1.incorrect[1];
    incorrectField3.textContent = level1.answer1.incorrect[2];
}

function level1Answer2(){
    correctField.textContent = level1.answer2.correct;
    incorrectField1.textContent = level1.answer2.incorrect[0];
    incorrectField2.textContent = level1.answer2.incorrect[1];
    incorrectField3.textContent = level1.answer2.incorrect[2];
}

function level1Answer3(){
    correctField.textContent = level1.answer3.correct;
    incorrectField1.textContent = level1.answer3.incorrect[0];
    incorrectField2.textContent = level1.answer3.incorrect[1];
    incorrectField3.textContent = level1.answer3.incorrect[2];
}


//Game Init Function//
function init (){
    level1Answer1();
    imageGoal.src = `images/door.png`
    //find its source 



}

// answer1Words loaded
//allImages.length = 0
// image_door = true 
// correctField unclicked

//End Level function // 
//if array allImage.length is 3 (ie has door, window, and roof) game has finished 
// elements no longer clickable
//reset button clickable
// strech: make pop-up "You've finished the first level. Congradulations. Get ready for level 2!"
// load second level after 10 seconds 



resetButton.addEventListener('click', function(e){
    console.log("test!", e.target.id);
})





