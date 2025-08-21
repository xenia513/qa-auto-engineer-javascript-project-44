import runGame from '../index.js'
import getRandomNumber from '../utils.js'

const rule = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = number => number % 2 === 0

const getRound = () => {
  const question = getRandomNumber(0, 100)
  const correctAnswer = isEven(question) ? 'yes' : 'no'
  return [question, correctAnswer]
}

const runEvenGame = () => {
  runGame(rule, getRound)
}

export default runEvenGame
