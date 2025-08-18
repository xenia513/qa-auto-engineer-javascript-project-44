import playGame from '../index.js'
import getRandomNumber from '../utils.js'

const rule = 'Find the greatest common divisor of given numbers.'

const gcd = (a, b) => { // функция вычисляет наибольший общий делитель двух чисел
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

const getRound = () => {
  const value1 = getRandomNumber(1, 50) // первое случайное число
  const value2 = getRandomNumber(1, 50) // второе случайное число
  const question = `${value1} ${value2}` // записываем 2 числа как вопрос
  const correctAnswer = gcd(value1, value2).toString() // вычисляем НОД двух чисел и записываем его как верный ответ
  return [question, correctAnswer] // возвращаем вопрос+ответ раунда
}

const runGcdGame = () => { // запускаем игру с описанными правилами и механикой
  playGame(rule, getRound)
}

export default runGcdGame