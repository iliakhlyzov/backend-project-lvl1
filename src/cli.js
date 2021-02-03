import readlineSync from 'readline-sync';

export const getGreetings = () => {
    const name = readlineSync.question('May I have your name? ');
    return `Hello, ${name}!`;
}