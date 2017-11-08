
var rand1 = generateRandomNumber(); 
var rand2 = generateRandomNumber(); 

console.log("rand1: " +  rand1); 
console.log("rand2: " +  rand2); 


function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1; 
}

function getMessageForGuess(guess, id, target) {
    if (guess < target) {
        return "Guess for value " + id + " is too low"; 
    } else if (guess > target) {
        return "Guess for value " + id + " is too high"; 
    } else {
        return "Guess for value " + id + " is correct!"; 
    }
}

$( document ).ready(function() {
    $("#btn-guess").click(function(e) {
        var guess1 = $('#guess-1').val(); 
        var guess2 = $('#guess-2').val(); 
        
        var messageForGuess1 = getMessageForGuess(guess1, 1, rand1); 
        var messageForGuess2 = getMessageForGuess(guess2, 2, rand2); 
        
        $("#message").html(messageForGuess1 + "<br>" + messageForGuess2); 
        
    })
    
    $("#btn-give-up").click(function(e) {
        $("#message").html("First value is " + rand1 + ".  Second value is " + rand2); 
    })
});