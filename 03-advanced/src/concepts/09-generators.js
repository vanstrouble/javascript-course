export const generatorFunctionsComponent = (element) => {
	console.log("Generator functions component loaded");

	// const generator = myFirstGenerator();

	// console.log(generator.next()); // { value: 'Hello', done: false }
	// console.log(generator.next()); // { value: 'World', done: false }
	// console.log(generator.next()); // { value: 'Done', done: true }

	const idGen = idGenerator();
	// console.log(idGen.next());
	// console.log(idGen.next());
	// console.log(idGen.next());

	const button = document.createElement("button");
	button.textContent = "Click me";

	const renderButton = () => {
		const { value } = idGen.next();
		button.textContent = `Click ${value}`;
	};

	button.addEventListener("click", renderButton);
	element.appendChild(button);
};

function* myFirstGenerator() {
	yield "Hello";
	yield "World";
	return "Done";
}

function* idGenerator() {
	let id = 1;
	while (true) {
		yield id++;
	}
}
