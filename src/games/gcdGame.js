import playGame from '../index.js'
import { roundsCount } from '../index.js'

const rules = 'Find the greatest common divisor of given numbers.'

const gcd = (a, b) => {
    if (b === 0) {
        return a
    }
    else {
        while (b !== 0) {
        let newB = a % b
        a = b
        b = newB
        }
    }
    return a
}

export default () => {
    const questions = []
    const correctAnswers = []
    for (let i = 0; i < roundsCount; i += 1) {
        const value1 = Math.floor(Math.random()*50)
        const value2 = Math.floor(Math.random()*50)
        questions.push(`${value1} ${value2}`)
        
        correctAnswers.push(gcd(value1, value2))
    }
    playGame(rules, questions, correctAnswers)
}
