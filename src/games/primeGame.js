import runGame from '../index.js'
import getRandomNumber from '../utils.js'

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (n) => {
  if (n < 2) {
    return false
  }
  const limit = Math.sqrt(n)
  for (let i = 2; i <= limit; i += 1) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

const getRound = () => {
  const question = getRandomNumber(1, 100)
  const correctAnswer = isPrime(question) ? 'yes' : 'no'
  return [question, correctAnswer]
}

const runPrimeGame = () => {
  runGame(rule, getRound)
}

export default runPrimeGame
