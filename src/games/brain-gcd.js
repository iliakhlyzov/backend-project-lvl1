import getRandom from '../getRandom.js';
import logic from '../index.js';

const findGcd = (number1, number2) => number2 === 0 ? number1 : findGcd(number2, number1 % number2);

const gameDescription = 'Find the greatest common divisor of given numbers.';

const data = () => {
  const number1 = getRandom();
  const number2 = getRandom();
  const gcd = findGcd(number1, number2);
  console.log(`Question: ${number2} ${number1}`);
  return gcd;
};

export default () => logic(gameDescription, data);
