export const BreakingBadApp = (element) => {
	console.log("BreakingBadApp called with element", element);

	document.querySelector("#app-title").textContent = "Breaking Bad App";
	element.innerHTML = `
        <p>Things are coming…</p>
    `;
};
