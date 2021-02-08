#!/usr/bin/env node
/* eslint-disable no-unused-vars */

import readlineSync from 'readline-sync';
import getRandom from '../../src/getRandom.js';

const isEven = (num) => num % 2 === 0;
const getBoolean = (answer) => {
  if (answer === 'yes' || answer === 'no') return answer === 'yes';
  return null;
};

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let countRight = 0;
while (countRight !== 3) {
  const number = getRandom();
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if (getBoolean(answer) === isEven(number)) {
    console.log('Correct!');
    countRight += 1;
  } else {
    countRight = 0;
    console.log(`Let's try again, ${name}!`);
  }
}
console.log(`Congratulations, ${name}!`);
