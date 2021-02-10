import getRandom from '../getRandom';

const findGcd = (a, b) => (b === 0 ? a : findGcd(b, a % b));

const gameDescription = 'Find the greatest common divisor of given numbers.';

const a = getRandom();
const b = getRandom();
const gcd = findGcd(a, b);

