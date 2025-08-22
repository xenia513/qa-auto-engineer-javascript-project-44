import runGame from '../index.js'
import getRandomNumber from '../utils.js'

const rule = 'What number is missing in the progression?'

const makeProgression = (start, step, length) => {
  const progression = []
  for (let index = 0; index < length; index += 1) {
    let currentElement = start + index * step
    progression.push(currentElement)
  }
  return progression
}

const getRound = () => {
  const start = getRandomNumber(1, 20)
  const step = getRandomNumber(2, 10)
  const length = getRandomNumber(5, 10)
  const progression = makeProgression(start, step, length)
  const randomIndex = getRandomNumber(0, progression.length - 1)
  const hiddenElement = progression[randomIndex]
  progression[randomIndex] = '..'
  const question = progression.join(' ')
  const correctAnswer = hiddenElement.toString()
  return [question, correctAnswer]
}

const runProgressionGame = () => {
  runGame(rule, getRound)
}

export default runProgressionGame
