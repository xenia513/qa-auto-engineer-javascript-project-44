import playGame from '../index.js'
import { roundsCount } from '../index.js'

const rules = 'What is the result of the expression?'

export default () => {
    const questions = []
    const correctAnswers = []
    const operators = ['+', '-', '*']
    for (let i = 0; i < roundsCount; i += 1) {
        const value1 = Math.floor(Math.random()*50)
        const value2 = Math.floor(Math.random()*50)
        const operator = operators[Math.floor(Math.random() * operators.length)]
        questions.push(`${value1} ${operator} ${value2}`)
        switch (operator) {
            case '+': correctAnswers.push(value1 + value2)
            break
            case '-': correctAnswers.push(value1 - value2)
            break
            case '*': correctAnswers.push(value1 * value2)
            break
        }
    }
    playGame(rules, questions, correctAnswers)
}
