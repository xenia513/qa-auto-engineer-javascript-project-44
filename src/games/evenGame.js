import playGame from '../index.js'
import getRandomNumber from '../utils.js'

const rule = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = (number) => { // функция вычисляет, является ли число четным
  if (number % 2 === 0) {
    return true
  }
  return false
}

const getRound = () => {
  const question = getRandomNumber(0, 100) // выбираем случайное число
  const correctAnswer = isEven(question) ? 'yes' : 'no' // записываем правильный ответ
  return [question, correctAnswer] // возвращаем вопрос+ответ раунда
}

const runEvenGame = () => { // запускаем игру с описанными правилами и механикой
  playGame(rule, getRound)
  }

export default runEvenGame
