//
// Object Destructuring
//




// const person = {
//     name: 'Morgan',
//     age: 31,
//     location: {
//         city: 'Fairfield',
//         temp: 75
//     }
// };


// const {name, age} = person;

// console.log(`${name} is ${age}`);


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name :publisherName = 'Self-Published'} = book.publisher;
// if(publisherName){
//     console.log(publisherName);   
// }


//
//  Array Destructuring
//


const address = ['1299 Juniper Street', 'Phila', 'Penn', '19147'];

//bad

console.log(`You are in ${address[1]} ${address[2]}`);


//good - variables set by position

const [street, city, state, zip] = address

console.log(`You are in ${city} ${state}`);

//skip array values, add comma

//const [, city] = address;

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee,,med,] = item;

console.log(`A medium ${coffee} costs ${med}`);