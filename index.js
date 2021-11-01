// ES6
class Animal {
        gender = "female";

    printGender = () => {
        console.log(this.gender);
    }
}

class Dog extends Animal{
        // no need to call super constructor to use parent constructor
        name = "Scooby"
        // this would overwrite parent
        //gender = 'male';

    printMyName = () => {
        console.log(this.name);
    }
}

const dog = new Dog();
dog.printMyName();
dog.printGender();

// javascript
class Human {
    constructor() {
        this.gender = "male"
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor() {
        // must call super constructor to use parent constructor
        super();
        this.name = "Jordan"
        // this would overwrite parent and make person female
        //this.gender = 'female';
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();

// Spread operator

//Used for arrays
const numbers = [1,2,3,4,5];
//pulls numbers out of array and adds 6 ... [1,2,3,4,5,6]
const newNumbers = [...numbers,6]
console.log(newNumbers);
const numbers2 = [1,2,3,4,5];
//Makes a new array with array numbers and 6 ... [Array(5),6]
const newNumbers2 = [numbers2,6]
console.log(newNumbers2);

//Used for objects
const car = {
    name: "Toyota Supra"
};

const newCar = {
    ...car,
    color: "red"
}

console.log(newCar);

// Rest Operator 
// Used in a function ES6 arrow function / returns results in an array
const filter = (...args) => {
    return args.filter(el => el % 2);
}
console.log(filter(1,2,3));


