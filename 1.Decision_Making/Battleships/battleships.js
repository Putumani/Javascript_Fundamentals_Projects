var randomLoc = Math.floor(Math.random() * 5)
alert(randomLoc)
var location1 = randomLoc
var location2 = randomLoc + 1
var location3 = randomLoc + 1

var guess
var hits = 0
var guesses = 0

var isSunk = false

while(isSunk === false){

    guess = prompt("Ready, aim, fire! (enter a number 0-6):")

    if (guess === "" || guess < 0 || guess > 6){
       
        alert("Please enter a valid number")

    } else {
        guesses = guesses + 1

        if(guess == location1 || guess == location2 || guess == location3){
            
            alert("Hit!!!");

            hits = hits + 1

            if(hits === 3){

                isSunk = true

                alert("You sank my battleship!")
            }
        } else {

        alert("Miss!!!")

        }
    }
}

var stats = `You took ${guesses} guesses to sink the battleship, which means your shooting accuracy was ${3/guesses}`

alert(stats);