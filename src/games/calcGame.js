import runGame from '../index.js'
import getRandomNumber from '../utils.js'

const rule = 'What is the result of the expression?'
const operators = ['+', '-', '*']

const calculate = (value1, value2, operator) => {
  switch (operator) {
    case '+': return value1 + value2
    case '-': return value1 - value2
    case '*': return value1 * value2
    default:
      throw new Error(`Unknown operator: '${operator}'`)
  }
}

const getRound = () => {
  const value1 = getRandomNumber(0, 50)
  const value2 = getRandomNumber(0, 50)
  const operator = operators[getRandomNumber(0, operators.length - 1)]
  const question = `${value1} ${operator} ${value2}`
  const correctAnswer = (calculate(value1, value2, operator)).toString()
  return [question, correctAnswer]
}

const runCalcGame = () => {
  runGame(rule, getRound)
}

export default runCalcGame
