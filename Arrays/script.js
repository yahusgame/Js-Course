// create an array
let database = ['turtle','cat','dog','fish'];
console.log(database);
console.log(database.length);

// get the element
let animal = database[1];
console.log(animal);

// change the element
database[2] = 'mouse';
console.log(database);

// get the last element
let last = database[database.length-1];
console.log(last);

// add a new element
database.push('snake');
console.log(database);

// remove the last element
database.pop();
console.log(database);