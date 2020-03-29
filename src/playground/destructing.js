const person = {
    name: 'Gleison',
    age: 35,
    location: {
        city: 'Fortaleza',
        temp: 29
    }
};

const { name: firstName = 'Francisco', age } = person;

console.log(`${firstName} is ${age}`);

const { city, temp: temperatura } = person.location;

console.log(`it´s ${temperatura} in ${city}`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'self-publisher'} = book.publisher;

console.log(publisherName);


const address = ['901 avenida Í', 'Fortaleza', , '60750080'];

const [ , cidade, state = 'Caucaia'] = address;
console.log(`You are in ${cidade} ${state}`);

const item = ['Coffee (ice)', '$2.00', '$2.60', '$2.75'];

const [type , ,price] = item;

console.log(`A medium ${type} costs ${price}`);