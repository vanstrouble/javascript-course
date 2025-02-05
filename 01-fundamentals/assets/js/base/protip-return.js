const createPerson = (name, lastname) => ({name, lastname});

const person = createPerson('Regina', 'Guerrero');
console.log(person); // { name: 'Regina', lastname: 'Guerrero' }

const printArgs = (...Args) => console.log(Args);

printArgs(1, 2, 3, 4, 5);

const returnArgs = (...Args) => Args;

const [name, lastname, age, country] = returnArgs('Regina', 'Guerrero', 24, 'Mexico');
console.log({name, lastname, age, country}); // Regina Guerrero

const {name: n} = createPerson('Aideé', 'Correa');
console.log(n); // Aideé

const tony = {
    name: 'Tony Stark',
    codeName: 'Ironman',
    live: false,
    age: 40,
    suits: ['Mark I', 'Mark V', 'Hulkbuster'],
};

const printProperties = ({name, codeName, live, age=15, suits}) => {
    console.log({name, codeName, live, age, suits});
};

printProperties(tony); // { name: 'Tony Stark', codeName: 'Ironman', live: false, age: 15, suits: [ 'Mark I', 'Mark V', 'Hulkbuster' ] }
