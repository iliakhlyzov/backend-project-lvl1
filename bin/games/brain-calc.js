#!/usr/bin/env node

import logic from '../../src/index.js';
import getRandom from '../../src/getRandom.js';

const gameDescription = 'What is the result of the expression?';
const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return (number1 + number2);
    case '*':
      return (number1 * number2);
    case '-':
      return (number1 - number2);
    default:
      return null;
  }
};
const getRandomOperator = (operators) => operators[Math.floor(Math.random() * operators.length)];

const playGame = () => {
  const number1 = getRandom();
  const number2 = getRandom();
  const operators = ['+', '-', '*'];
  const operator = getRandomOperator(operators);
  const result = calculate(number1, number2, operator);
  console.log(`Question: ${number1} ${operator} ${number2}`);
  return result;
};

logic(gameDescription, playGame);
