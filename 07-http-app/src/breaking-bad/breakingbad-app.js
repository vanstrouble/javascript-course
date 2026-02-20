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

    const quoteLabel = document.createElement("blockquote");
    const authorLabel = document.createElement("h3");
    const nextQuoteBtn = document.createElement("button");

    nextQuoteBtn.textContent = "Next Quote";

    const renderQuote = (data) => {
        quoteLabel.textContent = data.quote;
        authorLabel.textContent = `- ${data.author}`;
        element.replaceChildren(quoteLabel, authorLabel, nextQuoteBtn);
    }

    fetchQuote().then(renderQuote);

};
