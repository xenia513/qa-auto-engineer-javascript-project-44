import playGame, { roundsCount } from '../index.js'

const rules = 'Find the greatest common divisor of given numbers.'

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

export default () => {
    const questions = []
    const correctAnswers = []
    for (let i = 0; i < roundsCount; i += 1) {
        const value1 = Math.floor(Math.random()*50) // первое случайное число
        const value2 = Math.floor(Math.random()*50) // второе случайное число
        questions.push(`${value1} ${value2}`) // записываем 2 числа как вопрос
        
        correctAnswers.push(gcd(value1, value2)) // вычисляем НОД двух чисел и записываем его как верный ответ
    }
    playGame(rules, questions, correctAnswers)
}
