//
// Object destructuring
//
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    edition: {
        publisher: 'Penguin',
        // year: 2016
    }
};

// Object destructuring with rename & default value
const { publisher: publisherName = 'Self published', year = '2000'} = book.edition;

// Prints -
// 'Published by Penguin during 2000'
console.log(`Published by ${publisherName} during ${year}`);


//
// Array destructuring
//
const item = ['Starbucks', 'Coffee (hot)', '£2.00', '£2.50', '2.80'];

const [, drink, , mediumPrice] = item; // notice we skip 1st, 3rd and ignore everything after 4th

// prints -
// 'A medium Coffee (hot) costs £2.50'
console.log(`A medium ${drink} costs ${mediumPrice}`);