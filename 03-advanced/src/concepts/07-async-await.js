export const asyncAwait2Component = async (element) => {
	console.log("Async Await 2 component loaded");

	console.time("Start");
	// const value1 = await slowPromise();
	// const value2 = await mediumPromise();
	// const value3 = await fastPromise();

	const [value1, value2, value3] = await Promise.all([
		slowPromise(),
		mediumPromise(),
		fastPromise(),
	]);

	element.innerHTML = `
        <p style="text-align: justify;">
            <strong>Value 1:</strong> ${value1}<br>
            <strong>Value 2:</strong> ${value2}<br>
            <strong>Value 3:</strong> ${value3}
        </p>
    `;

	console.timeEnd("Start");
};

const slowPromise = () =>
	new Promise((resolve) => {
		setTimeout(() => resolve("Slow Promise Resolved"), 2000);
	});

const mediumPromise = () =>
	new Promise((resolve) => {
		setTimeout(() => resolve("Medium Promise Resolved"), 1500);
	});

const fastPromise = () =>
	new Promise((resolve) => {
		setTimeout(() => resolve("Fast Promise Resolved"), 1000);
	});
