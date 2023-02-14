class Human {
    constructor(){
        this.gender = 'male';
    }

    printGender(){
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        // Super Constructor
        super();
        this.name = 'Mehrshad';
    }

    PrintName(){
        console.log(this.name);
    }
}

const person = new Person();
person.printGender();
person.PrintName();
