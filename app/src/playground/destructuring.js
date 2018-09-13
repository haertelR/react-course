// Obj destructuring


/* const person = {
    name: 'renan',
    age: 28,
    location: {
        city: 'Mga',
        temp: 30
    }
}

const { name = 'Anonymous' , age } = person;

console.log(`${name} is ${age}`)

const { city, temp: temperature = 25 } = person.location;

if (city && temperature )console.log(`It's ${temperature} in ${city}`)

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName) */

// Array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'PA', '19147'];

const [street, city, state = 'NY', zip] = address;

console.log(`You are in ${address[1]} ${address[2]}`);

console.log(`You are in ${street} ${city}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [drink, , mediumPrice,] = item;

console.log(`A medium ${drink} costs ${mediumPrice}`)
