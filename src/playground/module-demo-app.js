import seniorFunc, { isAdult, canDrink } from './person';

console.log('app.js built using webpack is running!');

console.log(18, 'An adult?', isAdult(18));
console.log(17, 'An adult?', isAdult(17));

console.log(18, 'Can drink?', canDrink(18));
console.log(25, 'Can drink?', canDrink(25));

console.log(64, 'Is senior?', seniorFunc(64));
console.log(65, 'Is senior?', seniorFunc(65));