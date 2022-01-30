

//random keyword generator
let wordDict = ['APPLE','HERON','BARGE','TREES','MOUSE','COUNT']
let rand = Math.floor(Math.random()*6);
let keyWord = wordDict[rand];
//creates array of keyword letters to compare to guess
let keyWordParse = keyWord.split("");

//Cheat codes!
console.log(keyWord);

// Grabs word from form submission
function checkWord (){
    //stores user input
    let wordInput = document.getElementById("word").value;
    const gameBoard = document.getElementById("gameboard");

    //creates new answerbox each time a word is submitted
    const answerBox = document.createElement("div");
    answerBox.className = "answerBox"

    wordInput = wordInput.toUpperCase();
    //creates array of input word letters
    let inputParse = wordInput.split("");

    //compares input and keyword
    for (let i=0; i<inputParse.length; i++) {

        var newItem = document.createElement("span");
        newItem.className = "letter";
        //assigns color
        
        if (inputParse[i] === keyWordParse[i]){
            newItem.className += " right";
        } else {

            for (let j=0; j<keyWordParse.length; j++){
                if (inputParse[i] === keyWordParse[j]) {
                    newItem.className += " sorta";
                }
            }
        }
        newItem.innerHTML = inputParse[i];
        gameBoard.appendChild(answerBox);
        answerBox.appendChild(newItem);

    }
}


