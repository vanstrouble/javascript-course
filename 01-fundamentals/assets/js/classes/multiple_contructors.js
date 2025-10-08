class Person {

    static byObject({name, lastname, country}) {
        return new Person(name, lastname, country);
    };

    constructor(name, lastname, country) {
        this.name = name;
        this.lastname = lastname;
        this.country = country;
    }

    getInfo() {
        return `${this.name} ${this.lastname} from ${this.country}`;
    }
}

const person1 = new Person('John', 'Doe', 'USA');
const person2 = new Person('Jane', 'Smith', 'UK');

const regina = {
    name: 'Regina',
    lastname: 'Guerrero',
    country: 'Mexico'
}

const person3 = Person.byObject(regina);

console.log(person1.getInfo());
console.log(person2.getInfo());
console.log(person3.getInfo());
