import { heroes } from "../data/heroes";

export const asyncGeneratorFunctions = async(element) => {
    console.log('Async generator functions component loaded');

    const generator = getHeroGenerator();
    let isDone = false;

    do {
        const {value, done} = await generator.next();
        isDone = done;
        if (isDone) break;

        console.log('Value:', value, 'Done:', done);

        element.innerHTML += `<p>${value}</p>`;
    } while ( !isDone );
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function* getHeroGenerator() {
    for (const hero of heroes) {
        await delay(300);
        yield hero.name;
    }
    return "All heroes processed";
}
