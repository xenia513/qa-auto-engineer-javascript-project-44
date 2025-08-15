import playGame, { roundsCount } from '../index.js'

const rules = 'What is the result of the expression?'

export default () => {
    const questions = []
    const correctAnswers = []
    const operators = ['+', '-', '*'] // задаем операторы, которые будут использоваться в выражениях
    for (let i = 0; i < roundsCount; i += 1) {
        const value1 = Math.floor(Math.random()*50) // задаем первый операнд
        const value2 = Math.floor(Math.random()*50) // задаем второй операнд
        const operator = operators[Math.floor(Math.random() * operators.length)] // выбираем случайный оператор
        questions.push(`${value1} ${operator} ${value2}`) // формируем выражение-вопрос
        switch (operator) { // вычисляем значение выражения в зависимости от выбранного оператора
            case '+': correctAnswers.push(value1 + value2)
            break
            case '-': correctAnswers.push(value1 - value2)
            break
            case '*': correctAnswers.push(value1 * value2)
            break
        }
    }
    playGame(rules, questions, correctAnswers)
}
