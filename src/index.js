// архитектура приложения
// этот файл взаимодействует с пользователем, приинимает от него данные,
// а также логику игры, принимает правильный ответ
// сравнивает решение и ответ
import readlineSync from 'readline-sync';

export default (gameDescription, startGame, roundCount = 3) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);
  let isWin = true;
  let round = 1;
  do {
    const [solution, question] = startGame();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (solution === answer) {
      console.log('Correct!');
      round += 1;
    } else {
      console.log(`Let's try again, ${name}!`);
      isWin = false;
      break;
    }
  } while (round <= roundCount);
  if (isWin) {
    console.log(`Congratulations, ${name}!`);
  }
};
