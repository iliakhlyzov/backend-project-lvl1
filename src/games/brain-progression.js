import startGame from '../index.js';
import getRandom from '../getRandom.js';

const gameDescription = 'What number is missing in the progression?';

// у последовательность есть шаг, начало и длина
const generateSequence = (firstElement, step, length = 10) => {
  const sequence = [];
  for (let i = 0; i < length; i += 1) {
    sequence.push(firstElement + (step * i));
  }
  return sequence;
};

// задача следующей функции выбрать случайный элемент в последовательности
// и скрыть его
// передается массив , а возращает почти такой же массив
const hideElement = (array, index) => {
  const copyArray = [...array];
  copyArray[index] = '..';
  return copyArray;
};

const getGame = () => {
  const lengthOfArray = getRandom(5, 10);
  const firstElement = getRandom(0, 100);
  const step = getRandom(1, 10);
  const array = generateSequence(firstElement, step, lengthOfArray);

  const indexOfHiddenElement = getRandom(0, lengthOfArray - 1);
  const arrayWithoutElement = hideElement(array, indexOfHiddenElement);

  const answer = array[indexOfHiddenElement];

  console.log(`Question: ${arrayWithoutElement}`);
  return String(answer);
};

export default () => startGame(gameDescription, getGame);

