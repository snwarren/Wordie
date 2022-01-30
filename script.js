

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
    //stores user input
    let wordInput = document.getElementById("word").value;

    //creates array of input word letters
    inputParse = wordInput.split("");

    //compares input and keyword
    for (let i=0; i<inputParse.length; i++) {
        let guessIndex = "guessLetter" + i;
        let letter = document.getElementById(guessIndex);
        //assigns color
        
        if (inputParse[i] === keyWordParse[i]){
            letter.className="right"
        }
        else {

            for (let j=0; j<keyWordParse.length; j++){
                if (inputParse[i] === keyWordParse[j]) {
                    letter.className="sorta"
                }
            }
        }

        letter.innerHTML = inputParse[i].toUpperCase();
    }
}


