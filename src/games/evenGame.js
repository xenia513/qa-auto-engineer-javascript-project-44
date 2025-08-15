import playGame, { roundsCount } from '../index.js'

const rules = 'Answer "yes" if the number is even, otherwise answer "no".'

export default () => {
    const questions = []
    const correctAnswers = []
    for (let i = 0; i < roundsCount; i += 1) {
        const randomNubmer = Math.floor(Math.random()*100) 
        questions.push(randomNubmer) // записываем случайное число как вопрос
        const correctAnswer = randomNubmer % 2 === 0 ? 'yes' : 'no' // вычисляем, является ли число четным, и присваиваем значения
        correctAnswers.push(correctAnswer) // записываем значение как верный ответ
    }
    playGame(rules, questions, correctAnswers)
}
