// ES 5 style function def in object
// const multiplier = {
//     numbers: [1,2,3,4,5],
//     multiplyBy: 2,
//     //multiply: () => this.numbers.map(num => num * this.multiplyBy)
//     multiply: function() {
//         return this.numbers.map(n => n * this.multiplyBy);
//     }
// }

// ES6 style function def in object
// ES5 style function body
// const multiplier = {
//     numbers: [1,2,3,4,5],
//     multiplyBy: 2,
//     //multiply: () => this.numbers.map(num => num * this.multiplyBy)
//     multiply() {
//         return this.numbers.map(n => n * this.multiplyBy);
//     }
// }

const multiplier = {
    numbers: [1,2,3,4,5],
    multiplyBy: 2,
    //multiply: () => this.numbers.map(num => num * this.multiplyBy)
    multiply: () => this.numbers.map(n => n * this.multiplyBy)
}

console.log(multiplier.multiply(multiplier.numbers, multiplier.multiplyBy   ));