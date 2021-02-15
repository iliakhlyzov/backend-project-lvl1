// архитектура приложения
// этот файл взаимодействует с пользователем, приинимает от него данные,
// а также логику игры, принимает правильный ответ
// сравнивает решение и ответ
import readlineSync from 'readline-sync';

const roundsCount = 3;
const welcomeText = 'Welcome to the Brain Games!';

export default (gameDescription, startGame) => {
  console.log(welcomeText);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);
  for (let round = 0; round < roundsCount; round += 1) {
    const [correctAnswer, question] = startGame();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
