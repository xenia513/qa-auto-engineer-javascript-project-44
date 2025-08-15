import playGame, { roundsCount } from '../index.js'

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (n) => { // функция-предикат вычисляет, является ли число простым
  if (n < 2 || n === 2 || n % 2 === 0) {
    return false
  }
  else {
    for (let i = 3; i < Math.sqrt(n); i += 1) {
      if (n % i === 0) {
        return false
      }
    }
  }
  return true
}

export default () => {
  const questions = []
  const correctAnswers = []
  for (let i = 0; i < roundsCount; i += 1) {
    const randomNubmer = Math.floor(Math.random() * 100)
    questions.push(randomNubmer) // записываем случайное число как вопрос
    const correctAnswer = isPrime(randomNubmer) ? 'yes' : 'no'// вычисляем, является ли число простым, и присваиваем значения
    correctAnswers.push(correctAnswer) // записываем значение как верный ответ
  }
  playGame(rules, questions, correctAnswers)
}
