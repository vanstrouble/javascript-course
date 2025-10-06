class Singleton {
    static instance;

    constructor(name) {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        this.name = name;
        Singleton.instance = this;
    }
}

const singletonA = new Singleton('First Instance');
console.log(singletonA.name); // Output: First Instance

const singletonB = new Singleton('Second Instance');
console.log(singletonB.name); // Output: First Instance

const singletonC = new Singleton('Third Instance');
console.log(singletonC.name); // Output: First Instance

console.log(singletonA === singletonB); // Output: true
// Both singletonA and singletonB point to the same instance
