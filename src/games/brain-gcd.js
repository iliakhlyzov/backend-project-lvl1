import getRandom from '../getRandom';
import logic from '../../src/index.js';


const findGcd = (a, b) => (b === 0 ? a : findGcd(b, a % b));

const gameDescription = 'Find the greatest common divisor of given numbers.';

const data = () => {
  const number1 = getRandom();
  const number2 = getRandom();
  const gcd = findGcd(number1, number2);
  console.log(`Question: ${number2} ${number1}`)
  return gcd;
}

export default () => logic(gameDescription, data);
