import getRandom from '../getRandom.js';
import logic from '../index.js';

const findGcd = (num1, num2) => (num2 === 0 ? num1 : findGcd(num2, num1 % num2));

const gameDescription = 'Find the greatest common divisor of given numbers.';

const data = () => {
  const number1 = getRandom(0, 10);
  const number2 = getRandom(0, 10);
  const gcd = findGcd(number1, number2);
  console.log(`Question: ${number2} ${number1}`);
  return gcd;
};

export default () => logic(gameDescription, data);
