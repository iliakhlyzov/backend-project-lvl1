import getRandom from '../getRandom.js';
import startGame from '../index.js';

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

const getGame = () => {
  const number1 = getRandom(0, 10);
  const number2 = getRandom(0, 10);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandom(0, operators.length - 1)];
  const result = calculate(number1, number2, operator);
  const task = `${number1} ${operator} ${number2}`;
  return [String(result), task];
};

export default () => startGame(gameDescription, getGame);
