import playGame from '../index.js'
import getRandomNumber from '../utils.js'

const rule = 'What is the result of the expression?'
const operators = ['+', '-', '*'] // задаем операторы, которые будут использоваться в выражениях

const getRound = () => {
  const value1 = getRandomNumber(0, 50) // задаем первый операнд
  const value2 = getRandomNumber(0, 50) // задаем второй операнд
  const operator = operators[getRandomNumber(0, operators.length - 1)] // выбираем случайный оператор
  const question = `${value1} ${operator} ${value2}` // формируем выражение-вопрос
  let correctAnswer = ''
  switch (operator) { // вычисляем значение выражения в зависимости от выбранного оператора
    case '+': correctAnswer = (value1 + value2).toString()
      break
    case '-': correctAnswer = (value1 - value2).toString()
      break
    case '*': correctAnswer = (value1 * value2).toString()
      break
  }
    return [question, correctAnswer] // возвращаем вопрос+ответ раунда
}
const runCalcGame = () => { // запускаем игру с описанными правилами и механикой
  playGame(rule, getRound)
}

export default runCalcGame
