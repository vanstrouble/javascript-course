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

    const render2Hero = (hero1, hero2) => {
        element.innerHTML += `
            <h2>${hero1.name}</h2>
            <img src="${hero1.picture}" alt="${hero1.name}" />
            <p>${hero1.about}</p>
            <h2>${hero2.name}</h2>
            <img src="${hero2.picture}" alt="${hero2.name}" />
            <p>${hero2.about}</p>
        `;
    };

    const renderError = (error) => {
        element.innerHTML = `<h3 style="color: red;">${error}</h3>`;
    };

    const id1 = '5d86371fd55e2e2a30fe1ccb2';
    const id2 = '5d86371f25a058e5b1c8a65e';

    //! Promise chaining
    // findHeroByID(id1)
    //     .then( (hero1) => {

    //         findHeroByID(id2)
    //             .then( hero2 => {
    //                 render2Hero( hero1, hero2 );
    //             })
    //             .catch( renderError );
    //     })
    //     .catch( renderError );


    //! Promise chaining version 2
    // let hero1;
    // findHeroByID(id1)
    //     .then( hero  => {
    //         hero1 = hero;
    //         return findHeroByID(id2);
    //     }).then( hero  => {
    //         render2Hero( hero1, hero );
    //     })
    //     .catch( renderError );

    //! Promise.all
    Promise.all( [ findHeroByID(id1), findHeroByID(id2) ] )
        .then( ([hero1, hero2]) => {
            render2Hero( hero1, hero2 );
        })
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
