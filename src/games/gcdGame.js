import runGame from '../index.js'
import getRandomNumber from '../utils.js'

const rule = 'Find the greatest common divisor of given numbers.'

const gcd = (a, b) => {
  if (b === 0) {
    return a
  }
  return gcd(b, a % b)
}

const getRound = () => {
  const value1 = getRandomNumber(1, 50)
  const value2 = getRandomNumber(1, 50)
  const question = `${value1} ${value2}`
  const correctAnswer = gcd(value1, value2).toString()
  return [question, correctAnswer]
}

const runGcdGame = () => {
  runGame(rule, getRound)
}

export default runGcdGame
