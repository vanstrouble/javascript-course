import { heroes } from "../data/heroes";

export const asyncComponent = (element) => {
	console.log("Async component loaded");

	const hero1 = "5d86371f25a058e5b1c8a65e";
    console.log("Component initialized");

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

	findHero(hero1)
		.then(renderHeroName)
		.catch((error) => {
			element.innerHTML = `<p>${error.message}</p>`;
		});
	console.log("Component finished");
};

/**
 * Find a hero by id.
 *
 * @param {string} id - Hero identifier.
 * @returns {Promise<Object>} Found hero.
 */
const findHero = async (id) => {
	const hero = heroes.find((hero) => hero.id === id);
	if (!hero) {
		throw new Error(`Hero with id ${id} not found`);
	}
	return hero;
};
