// архитектура приложения
// этот файл взаимодействует с пользователем, приинимает от него данные,
// а также с логикой игры, принимает от нее правильный ответ
// сравнивает решение и ответ
import readlineSync from 'readline-sync';

export default (gameDescription, startGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);
  const winsToEnd = 3;
  let wins = 0;
  while (wins !== winsToEnd) {
    const [solution, question] = startGame();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (solution === answer) {
      console.log('Correct!');
      wins += 1;
    } else {
      console.log(`Let's try again, ${name}!`);
      wins = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
