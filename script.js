

//random keyword generator
let wordDict = ['apple','heron','barge','trees','mouse','count']
let rand = Math.floor(Math.random()*4);
let keyWord = wordDict[rand];
//creates array of keyword letters to compare to guess
let keyWordParse = keyWord.split("");

//Cheat codes!
console.log(keyWord);

// Grabs word from form submission
function checkWord (){
    //User input
    let wordInput = document.getElementById("word").value;

    //creates array of input word letters
    inputParse = wordInput.split("");
    //compares input and keyword
    for (let i=0; i<inputParse.length; i++) {
        let guessIndex = "guessLetter" + i;
        let guessLetter = document.getElementById(guessIndex);
        //Moves matching letters to new array
        if (inputParse[i] === keyWordParse[i]){
            guessLetter.className="right"
        }
        else {
            guessLetter.className="wrong"
        }

        guessLetter.innerHTML = inputParse[i];
    }
}


