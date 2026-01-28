import { heroes } from "../data/heroes";

export const callbacksComponent = (element) => {
	console.log("Callbacks component loaded");

	const id = "5d86371f25a058e5b1c8a65e";
	findHeroById(id, (error, hero) => {
        if (error) {
            element.innerHTML = `<h3>${error}</h3>`;
            return;
        }

		element.innerHTML = `
            <h2>${hero.name}</h2>
            <img src="${hero.picture}" alt="${hero.name}" />
            <p>${hero.about}</p>
        `;
	});
};

/**
 *
 * @param {String} id
 * @param { (error: String|null, hero: Object) => void } callback
 */
const findHeroById = (id, callback) => {
	const hero = heroes.find((hero) => hero.id === id);

    if (!hero) {
        callback(`Hero with id ${id} not found`);
        return;
    }

	callback(null, hero);
};
