import playGame, { roundsCount } from '../index.js'

const rules = 'What number is missing in the progression?'

const makeProgression = () => {
  const start = Math.ceil(Math.random() * 20) // случайный стартовый элемент прогрессии от 1 до 20
  const step = 1 + Math.ceil(Math.random() * 5) // случайный шаг прогрессии от 2 до 5
  const length = 5 + Math.round(Math.random() * 5) // случайная длина прогрессии от 5 до 10
  const randomIndex = Math.round(Math.random() * length) // случайный индекс элемента, который будет скрыт
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
  return {
    progression,
    hiddenElement,
  }
}

export default () => {
  const questions = []
  const correctAnswers = []
  for (let i = 0; i < roundsCount; i += 1) {
    const result = makeProgression()
    const question = result.progression.join(' ') // приводим прогрессию к строке
    questions.push(question) // записываем регрессию как вопрос
    correctAnswers.push(result.hiddenElement) // записываем скрытый элемент как верный ответ
  }
  playGame(rules, questions, correctAnswers)
}
