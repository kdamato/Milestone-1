//Window Prompt-Enter Player Username
let userName = window.prompt('Please enter your name:')
//JS code for score tracker
let userScore = 0
//Play again boolean variable to check if true
let playAgain = true


//JS code for questions window prompts, answer selection, correct answer tracker and correct answer score
function playGame() {
    for(let i = 0; i < questions.length; i++){
        let question = questions[i]
        let userAnswer = window.prompt(question.text)
        if(userAnswer === question.correctAnswer){
        userScore = userScore + 10
        }
//Window Prompt-alert for final score
    window.alert('Your score is: '+userScore)
    }
}

//JS code to present player with option to play again-added window prompts to true(yes) and no(false) to begin again or end program
while (playAgain === true) {
    playGame()
    let userChoice = window.prompt('Would you like to play the game again? Answer yes or no.')
    if(userChoice === 'yes'){
            playAgain = true
        } else {
            playAgain = false
            window.alert('Thanks for playing the game!')
        }
}