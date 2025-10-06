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

class Developer extends Person {
    constructor(name, lastname, age, nickname) {
        super(name, lastname, age, nickname);
    }
}

class Hero extends Person {
    constructor(name, lastname, age, nickname, superpower) {
        super(name, lastname, age, nickname);
        this.superpower = superpower;
    }
}

antonio = new Developer("Antonio", "Vazquez", 26, "vanstrouble");
antonio.whoAmI();
antonio.sayYours();

spiderman = new Hero("Peter", "Parker", 21, "Spiderman", "Spider abilities");
spiderman.whoAmI();
spiderman.setPhrase = "With great power, comes great responsibility.";
spiderman.sayYours();
