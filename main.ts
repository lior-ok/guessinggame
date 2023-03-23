function equationAdd(value1min: number, value1max: number, value2min: number, value2max: number) {
    let guess = 0
    let value = randint(value1min, value1max)
    let secondValue = randint(value2min, value2max)
    game.splash("Answer the question!")
    while (guess != value + secondValue) {
        guess = parseFloat(game.askForString("What is the sum of " + value + " and " + secondValue + "?", 3))
    }
    game.splash("Correct!")
}

function equationMult(value1min: number, value1max: number, value2min: number, value2max: number) { // Function with parameters. The function handles prompting the user with 
// the question, and uses parameters so the problem can be changed each time it is called
    let guess = 0
    let correct = true
    let value = randint(value1min, value1max)
    let secondValue = randint(value2min, value2max)
    game.splash("Answer the question!")
    guess = parseFloat(game.askForString("What is " + value + " multiplied by " + secondValue + "?", 4))
    if (guess == value * secondValue) {
        correct = true // Boolean value changing depending on whether the user got the answer correct or not
    } else {
        correct = false
    }
    return correct // Return value. This is used so the conditional statement can check if the user's answer was correct
}

while (true) { // While loop. Continues the code so the game doesn't just black out
let getNums = game.askForNumber("Type in a number",2)

if (equationMult(getNums, getNums * 2, 7, 9) == true) { // Conditional statement. Checks if the user's answer was correct using the function's return value, then acts accordingly
    game.splash("That is correct")
} else {
    game.splash("You're wrong stupid")
}
}