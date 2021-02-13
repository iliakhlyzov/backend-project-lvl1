import getRandom from '../src/getRandom.js';
import startGame from '../index.js';

const isEven = (num) => num % 2 === 0;
const getBoolean = (answer) => {
  if (answer === 'yes' || answer === 'no') return answer === 'yes';
  return null;
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';


const getGame = () => {
  const number = getRandom(0, 10);
  console.log(`Question: ${number}`);
  return getBoolean(isEven(number));
};


export default () => startGame(gameDescription, getGame);
