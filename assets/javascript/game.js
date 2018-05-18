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
 var wins = 0;
 var losses = 0; 
 var guessesLeft = 10;
 var lettersGuessed;

 //getting each element 
 var winnerText = document.getElementById("win-id");
 var lossText = document.getElementById("loss-id");
 var guessesLeftText = document.getElementById("guess-id");
 var lettersGuessedText = document.getElementById("sofar-id");
 

 document.onkeyup = function(event){
    var input = event.key;


    if(event.key ===correctLetter){
        correctLetter = alphabet[Math.ceil(Math.random() * alphabet.length)];
        console.log(correctLetter);
        wins++;
        winnerText.innerText="Wins:" + wins ;
        
    }
    else{
        guessesLeft--;
        guessesLeftText.innerText="Guesses left: " + guessesLeft;
        console.log(guessesLeft);
        
    }

    if(guessesLeft===0){
        alert("you lose and you suck") 
    }

 };

