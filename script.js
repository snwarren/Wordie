

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
    //Object for where guess will print
    let guess = document.getElementById("guess");

    // Create parse variables as arrays
    let lastGuessParse = [];
    let lastGuess = [];


    //checks if word matches
    if (wordInput === keyWord){
        console.log("YAY!")
    }
    else {
        //creates array of input word letters
        inputParse = wordInput.split("");
        //compares input and keyword
        for (let i=0; i<=inputParse.length-1; i++) {
            //Moves matching letters to new array
            if (inputParse[i] === keyWordParse[i]){
                lastGuessParse.push(inputParse[i]);

            }
            //Adds blank for non-matches
            else {
                lastGuessParse.push("_");
            }
        }
        //Merges parsed new array into string
        lastGuess = lastGuessParse.join("");

        //Displays on page
        guess.innerHTML = lastGuess;
    }
}


