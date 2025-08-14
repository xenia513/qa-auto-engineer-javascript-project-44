import readlineSync from 'readline-sync'

export const roundsCount = 3

const play = (questions, correctAnswers) => {
    for (let i = 0; i < roundsCount; i += 1) {
        console.log(`Question: ${questions[i]}`)
        const answer = readlineSync.question('Your answer: ')
        if (correctAnswers[i].toString() !== answer.toLowerCase()) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswers[i]}'.`)
            return false
        }
        console.log('Correct!')
    }
    return true
}

export default (rules, questions, correctAnswers) => {
    console.log('Welcome to the Brain Games!')
    const name = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${name}`)
    console.log(rules)
    if (play(questions, correctAnswers)) {
        console.log(`Congratulations, ${name}!`);
    } 
    else {
    console.log(`Let's try again, ${name}!`);
  }
}
