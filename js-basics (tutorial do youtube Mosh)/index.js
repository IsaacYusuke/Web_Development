// Comment
//console.log('Hello World');


//let name = 'Mosh'; // String
//console.log(name);
//let age = 30; // Number 
let isApproved = false; // Boolean
let firstName = undefined; // undefined
//let selectedColor = null; // null

let person = {
    name: 'Mosh',
    age: 30
}
person.name = 'John';
let selection = 'name';
person[selection] = 'Mary';
//console.log(person.name);

/*
const interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
*/

let selectedColors =['red', 'blue'];
selectedColors[2] = 10;
//console.log(selectedColors.length);

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
/*
greet('Isaac', 'Yusuke');
greet('Lucas');
*/

function square(number) {
    return number*number;
}

console.log(square(3));