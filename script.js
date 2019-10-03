
// ----- Global Variables ----- //
var level = 0;
var task = 0;


// ----- Word Choices per round and per Level ----- // 
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
        incorrect: ['become', 'because', 'balloon']
    }
}

// ----- DOM references ----- //
// images //
var imagePart = document.getElementById("imagePart");

var doorImage = document.getElementById("door");
var windowImage = document.getElementById("window");
var roofImage = document.getElementById("roof");
var backpackImage = document.getElementById("backpack");
var chairImage = document.getElementById("chair")
var deskImage = document.getElementById("desk");
var classroomImage = document.getElementById("classroom");

// sounds // 
// var correctSound = document.getElementById("correctSound");
// var yes = document.getElementById("yes");
var clickSound = document.getElementById("click");
var winSound = document.getElementById("win");
var crowdYaySound = document.getElementById("crowdYay");

// button // 
var levelUpButton = document.getElementById("levelUp");
var resetButton = document.getElementById("reset");
var startButton = document.getElementById("start");

// title // 
var title = document.getElementById("title");

// words // 
var wordBox = document.getElementById("wordBox");

var correctField = document.getElementById("choice1");
var incorrectField1 = document.getElementById("choice2");
var incorrectField2 = document.getElementById("choice3");
var incorrectField3 = document.getElementById("choice4");



//Event Listners 
startButton.addEventListener('click', init);
resetButton.addEventListener('click', reset);

//correct word clicked // 
wordBox.addEventListener('click', function(e){
    if (e.target.id === "choice1" && level === 1){
        level1TaskIterations();
        task++
    }
    else if (e.target.id === "choice1" && level === 2){
        level2TaskIterations();
        task++
    }
});

//level up button// 
levelUpButton.addEventListener('click', function(){
    level = 2;
    task = 1;  
    wordBox.classList.remove("hidden")
    wordBox.classList.add("words")
    level2TaskIterations();
    levelUpButton.style.display = 'none';
    title.textContent = "Build a Classroom!"
    roofImage.style.display = 'none';
    doorImage.style.display = 'none';
    windowImage.style.display = 'none';
})



// Level 1 
function level1TaskIterations(){
    if (level === 1 && task === 1){
        level1Task2Words();
        imageCenter.src = `images/window.png`;
        doorImage.style.display = 'inline-block';
        console.log(`task number is: ${task}`);
        console.log(`level number is: ${level}`);
    } else if (level === 1 && task === 2){
        level1Task3Words();
        imageCenter.src = `images/roof.png`;
        doorImage.style.display = 'inline-block';
        windowImage.style.display = 'inline-block';
        console.log(`task number is: ${task}`);
        console.log(`level number is: ${level}`);
    } else if (level === 1 && task == 3) {
        imageCenter.src = `images/house.png`;
        doorImage.style.display = 'inline-block';
        windowImage.style.display = 'inline-block';
        roofImage.style.display = 'inline-block';
        levelUpButton.style.display = 'block';
        title.textContent = "You've won!"
        wordBox.classList.remove("words");
        wordBox.classList.add("hidden")
        winSound.play();
        crowdYaySound.play();
        console.log(`task number is: ${task}`);
        console.log(`level number is: ${level}`);
    }
}

//Level 2 
function level2TaskIterations(){
    if (level === 2 && task === 1){
        level2Task1Words();
        imageCenter.src = `images/chair.png`
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
        imageCenter.src = `images/backpack.png`
        chairImage.style.display = 'inline-block';
        deskImage.style.display= 'inline-block';
        console.log(`task number is: ${task}`);
        console.log(`level number is: ${level}`);
    } else if (level === 2 && task === 4){
        imageCenter.src = `images/classroom.png`;
        chairImage.style.display = 'inline-block';
        deskImage.style.display = 'inline-block';
        backpackImage.style.display = 'inline-block';
        wordBox.classList.remove("words");
        wordBox.classList.add("hidden")
        winSound.play();
        crowdYaySound.play();
        title.textContent = "You've won!"
        console.log(`task number is: ${task}`);
        console.log(`level number is: ${level}`);
    }
}

// ----- Accessing words per given level ----- //

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


// ----- Functions ----- //

//Game Init Function//
function init (){
    title.textContent = "Build a House!"
    imagePart.classList.remove("hidden")
    level1Task1Words();
    imageCenter.src = `images/door.png`
    task = 1;
    level = 1;
    clickSound.play();
    console.log(`task number is: ${task}`);
    console.log(`level number is: ${level}`);
}

//Reset function//
function reset (){
    clickSound.play();
    document.location.href= "";
    //set everything like wordbox to be empty, 
}





