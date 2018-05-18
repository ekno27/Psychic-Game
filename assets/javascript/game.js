document.addEventListener("DOMContentLoaded", function(event) { 
    
  
console.log("testing");

//array of letters that will be used to guess
function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}
//array of letters

var alphabet = genCharArray('a', 'z'); 
console.log(alphabet);
  
//random generator used to guess the letter 
 var correctLetter = alphabet[Math.ceil(Math.random() * alphabet.length)];

 console.log(correctLetter);

 //variable declarations
 

 //getting each element 
 var winnerText = document.getElementById("win-id");
 var lossText = document.getElementById("loss-id");
 var guessesLeftText = document.getElementById("guess-id");
 var lettersGuessedText = document.getElementById("sofar-id");
 var wins = 0;
 var losses = 0; 
 var guessesLeft = 10;
 var lettersArray=[];
 

 document.onkeyup = function(event){
    var input = event.key;


    if(event.key ===correctLetter){
        correctLetter = alphabet[Math.ceil(Math.random() * alphabet.length)];
        console.log(correctLetter); //use to check for correct letter
        alert("you win!");
        wins++;
        winnerText.innerText="Wins:" + wins ;
        guessesLeft = 10;
        lettersArray =[];
        guessesLeftText.innerText="Guesses left: 10";
        lettersGuessedText.innerText = "Your guesses so far: ";

        
    }
    else{
        guessesLeft--;
        guessesLeftText.innerText="Guesses left: " + guessesLeft;
        lettersArray.push(input);
        lettersGuessedText.innerText = "Your guesses so far:" + lettersArray;
        
    }

    if(guessesLeft ===0){
        losses++;
        lossText.innerText= "losses: " + losses;
        alert("you lose and you suck");
        guessesLeft = 10;
        lettersArray =[];
        guessesLeftText.innerText="Guesses left: 10";
        lettersGuessedText.innerText = "Your guesses so far: ";

    }

 };
});
