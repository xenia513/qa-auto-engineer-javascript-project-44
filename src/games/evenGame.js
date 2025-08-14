import playGame from '../index.js'
import { roundsCount } from '../index.js'

const rules = 'Answer "yes" if the number is even, otherwise answer "no".'

export default () => {
    const questions = []
    const correctAnswers = []
    for (let i = 0; i < roundsCount; i += 1) {
        const randomNubmer = Math.floor(Math.random()*100)
        questions.push(randomNubmer)
        const correctAnswer = randomNubmer % 2 === 0 ? 'yes' : 'no'
        correctAnswers.push(correctAnswer)
    }
    playGame(rules, questions, correctAnswers)
}
