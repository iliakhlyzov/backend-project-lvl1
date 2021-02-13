import getRandom from '../getRandom.js';
import startGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGame = () => {
  const number = getRandom(0, 10);
  console.log(`Question: ${number}`);
  return isEven(number) ? 'yes' : 'no';
};

export default () => startGame(gameDescription, getGame);
