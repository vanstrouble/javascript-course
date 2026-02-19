const fetchQuote = async () => {
	let id_rnd = Math.floor(Math.random() * 86) + 1;

	const proxyUrl = "https://corsproxy.io/?";
	const apiUrl = "https://api.mridul.tech/api/breaking-bad/quotes/" + id_rnd;

	const response = await fetch(proxyUrl + encodeURIComponent(apiUrl));

	const data = await response.json();
	return data.data;
};

export const BreakingBadApp = (element) => {
	document.querySelector("#app-title").textContent = "Breaking Bad App";
	element.innerHTML = `
        <p>Loading…</p>
    `;

	fetchQuote()
		.then((quote) => {
			if (quote && quote.quote && quote.author) {
				element.innerHTML = `
                <p>${quote.quote}</p>
                <p><em>- ${quote.author}</em></p>
            `;
			} else {
				element.innerHTML = `
                <p>No quote found. Please try again.</p>
            `;
			}
		})
		.catch((error) => {
			console.error("Error fetching quote", error);
			element.innerHTML = `
            <p>Failed to fetch quote. Please try again later.</p>
        `;
		});
};
