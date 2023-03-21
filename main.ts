let guess = 0
let value = randint(1, 5)
let secondValue = randint(1, 5)
game.splash("Answer the question!")
while (guess != value + secondValue) {
    guess = parseFloat(game.askForString("What is the sum of " + value + " and " + secondValue + "?", 1))
}
game.splash("Correct!")
game.over(true)

