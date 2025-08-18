import readlineSync from 'readline-sync'

export const roundsCount = 3

export default (rule, getRound) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}`)
  console.log(rule)
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getRound()
      console.log(`Question: ${question}`)
      const answer = readlineSync.question('Your answer: ')
    if (correctAnswer !== answer.toLowerCase()) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      return console.log(`Let's try again, ${name}!`)
    }
    else console.log('Correct!')
  }
  console.log(`Congratulations, ${name}!`)
}
