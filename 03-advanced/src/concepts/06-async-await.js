import { heroes } from "../data/heroes";

export const asyncAwaitComponent = async (element) => {
	const renderHero = (hero) => {
		element.innerHTML = `
            <h2>${hero.name}</h2>
            <img src="${hero.picture}" alt="${hero.name}" />
            <p>${hero.about}</p>
        `;
	};

	const renderHeroName = (hero) => {
		element.innerHTML = `<h2>${hero.name}</h2>`;
	};

    try {
        const hero1 = await findHero("5d86371f2343e37870b91ef1");
        const hero2 = await findHero("5d86371f9f80b591f499df32");
        const hero3 = await findHero("5d86371f233c9f2425f16916");

        element.innerHTML = `${hero1.name} / ${hero2.name} / ${hero3.name}`;
    } catch (error) {
        element.innerHTML = `<p>${error.message}</p>`;
    }
};

const findHero = async (id) => {
	const hero = heroes.find((hero) => hero.id === id);
	if (!hero) {
		throw new Error(`Hero with id ${id} not found`);
	}
	return hero;
};
