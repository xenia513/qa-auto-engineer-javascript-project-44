import playGame from '../index.js'
import getRandomNumber from '../utils.js'

const rule = 'What number is missing in the progression?'

const makeProgression = () => {
  const start = getRandomNumber(1, 20) // случайный стартовый элемент прогрессии от 1 до 20
  const step = getRandomNumber(2, 10) // случайный шаг прогрессии от 2 до 10
  const length = getRandomNumber(5, 10) // случайная длина прогрессии от 5 до 10
  const randomIndex = getRandomNumber(0, length - 1) // случайный индекс элемента, который будет скрыт
  const progression = []
  let hiddenElement
  for (let index = 0; index < length; index += 1) {
    let currentElement = start + index * step // последовательно вычисляем элементы прогрессии
    if (index === randomIndex) { // если индекс элемента совпал с заданным к скрытию индексом,
      hiddenElement = currentElement // записываем значение скрытого элемента
      currentElement = '..' // вместо него в прогрессию запишется '..'
    }
    progression.push(currentElement) // записываем элементы в прогрессию
  }
  return [progression, hiddenElement]
}

const getRound = () => {
    const [progression, hiddenElement] = makeProgression()
    const question = progression.join(' ') // приводим прогрессию к строке
    const correctAnswer = hiddenElement.toString() // записываем скрытый элемент как верный ответ
    return [question, correctAnswer] // возвращаем вопрос+ответ раунда
}

const runProgressionGame = () => { // запускаем игру с описанными правилами и механикой
  playGame(rule, getRound)
}

export default runProgressionGame