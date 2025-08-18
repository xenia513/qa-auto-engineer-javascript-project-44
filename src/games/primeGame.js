import playGame from '../index.js'
import getRandomNumber from '../utils.js'

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (n) => { // функция-предикат вычисляет, является ли число простым
  if (n < 2) {
    return false
  }
  else {
    for (let i = 2; i <= Math.sqrt(n); i += 1) {
      if (n % i === 0) {
        return false
      }
    }
  }
  return true
}

const getRound = () => {
  const question = getRandomNumber(1, 100) // записываем случайное число как вопрос
  const correctAnswer = isPrime(question) ? 'yes' : 'no'// вычисляем, является ли число простым, и присваиваем значения
  return [question, correctAnswer] // возвращаем вопрос+ответ раунда
}
const runPrimeGame = () => { // запускаем игру с описанными правилами и механикой
  playGame(rule, getRound)
}

export default runPrimeGame
