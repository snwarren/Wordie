let keyWord = "barge";


// Grabs word from form submission
function checkWord (){
    let wordInput = document.getElementById("word").value;

    //checks if word matches
    if (wordInput === keyWord){
        console.log("YAY!")
    }
    else {
        console.log("you suck")
    }
}


