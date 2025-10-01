class Person {
    constructor(name, lastname, age, nickname) {
        this.name = name;
        this.age = age;
        this.lastname = lastname;
        this.nickname = nickname;
        this.phrase = "";
    }

    set setPhrase(phrase) {
        if (typeof phrase === "string" && phrase.length > 0) {
            this.phrase = phrase;
        } else {
            console.warn("Please provide a valid phrase.");
        }
    }

    get getPhrase() {
        return this.phrase;
    }

    whoAmI() {
        console.log(`I'm ${this.name} ${this.lastname}, but you can call me ${this.nickname}. I'm ${this.age} years old.`);
    }

    sayYours() {
        if (this.phrase && this.phrase.length > 0) {
            console.log(`${this.nickname} says: "${this.phrase}"`);
        } else {
            console.log(`${this.nickname} has nothing to say right now.`);
        }
    }

}

const peter = new Person("Peter", "Parker", 18, "Spiderman");
const tony = new Person("Tony", "Stark", 48, "Ironman");

// console.log(peter);
// console.log(tony);

peter.whoAmI();
tony.whoAmI();

peter.setPhrase = "With great power, comes great responsibility.";
tony.setPhrase = "I am Ironman.";

peter.sayYours();
tony.sayYours();

console.log(peter.getPhrase);
