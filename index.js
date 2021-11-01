// create new class
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
        this.name = "Max"
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