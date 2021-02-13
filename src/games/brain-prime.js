import startGame from '../index.js';
import getRandom from '../getRandom.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  const maxDivisor = num / 2;
  for (let i = 2; i < maxDivisor; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getGame = () => {
  const number = getRandom(0, 100);
  return [isPrime(number) ? 'yes' : 'no', number];
};
export default () => startGame(gameDescription, getGame);
