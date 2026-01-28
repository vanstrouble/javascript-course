import { heroes } from '../data/heroes';

export const promisesComponent = (element) => {
    console.log('Promises component loaded');

    const renderHero = (hero) => {
        element.innerHTML = `
            <h2>${hero.name}</h2>
            <img src="${hero.picture}" alt="${hero.name}" />
            <p>${hero.about}</p>
        `;
    };

    const renderError = (error) => {
        element.innerHTML = `<h3 style="color: red;">${error}</h3>`;
    };

    const id1 = '5d86371fd55e2e2a30fe1ccb2';

    findHeroByID(id1)
        .then( renderHero )
        .catch( renderError );
};

/**
 *
 * @param {String} id
 * @returns {Promise}
 */
const findHeroByID = (id) => {
    console.log('Finding hero by ID using Promise');
    return new Promise( (resolve, reject) => {
        const hero = heroes.find(hero => hero.id === id);
        if (hero) {
            resolve(hero);
            return;
        } else {
            reject(`Hero with id ${id} not found`);
        }
    });
}
