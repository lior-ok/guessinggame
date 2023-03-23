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

function equationMult(value1min: number, value1max: number, value2min: number, value2max: number) {
    let guess = 0
    let correct = true
    let value = randint(value1min, value1max)
    let secondValue = randint(value2min, value2max)
    game.splash("Answer the question!")
    guess = parseFloat(game.askForString("What is " + value + " multiplied by " + secondValue + "?", 4))
    if (guess == value * secondValue) {
        correct = true
    } else {
        correct = false
    }
    return correct
}

while (true) {
let getNums = game.askForNumber("Type in a number",2)

if (equationMult(getNums, getNums * 2, 7, 9) == true) {
    game.splash("That is correct")
} else {
    game.splash("You're wrong stupid")
}
}