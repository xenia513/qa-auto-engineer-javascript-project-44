import readlineSync from 'readline-sync'

const randomNubmerIsEven = number => (number % 2 === 0 ? 'yes' : 'no')

const game = () => {
    for (let i = 1; i < 4; i += 1) {
        const randomNubmer = Math.floor(Math.random()*100)
        console.log(`Question: ${randomNubmer}`)
        const answer = readlineSync.question('Your answer: ')
        const correctAnswer = randomNubmerIsEven(randomNubmer)
        if (correctAnswer === answer) {
            console.log('Correct!')
        }
        else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
            return false
        }
    }
    return true
}

const evenGame = () => {
    console.log('Welcome to the Brain Games!')
    const name = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${name}`)
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    if (game()) {
        console.log(`Congratulations, ${name}!`);
    } 
    else {
    console.log(`Let's try again, ${name}!`);
  }
}
export default evenGame
