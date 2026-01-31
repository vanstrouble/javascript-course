export const promiseRaceComponent = (element) => {
    console.log('Promise Race component loaded');

    element.innerHTML = `<h3>Loading...</h3>`;

    const renderValue = (value) => {
        element.innerHTML = value
    };

    Promise.race( [ slowPromise(), mediumPromise(), fastPromise() ] )
        .then( value => renderValue(value));
};

const slowPromise = () => new Promise( (resolve) => {
    setTimeout( () => resolve('Slow Promise Resolved'), 2000 );
});

const mediumPromise = () => new Promise( (resolve) => {
    setTimeout( () => resolve('Medium Promise Resolved'), 1500 );
});

const fastPromise = () => new Promise( (resolve) => {
    setTimeout( () => resolve('Fast Promise Resolved'), 1000 );
});
