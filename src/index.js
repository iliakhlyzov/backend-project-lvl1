// архитектура приложения
import readlineSync from 'readline-sync';

export default (gameDescription, startGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);
  const winsToEnd = 3;
  let wins = 0;
  while (wins !== winsToEnd) {
    if (startGame()) {
      wins += 1;
    } else {
      wins = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
