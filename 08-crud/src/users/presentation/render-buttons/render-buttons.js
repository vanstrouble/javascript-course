import usersStore from "../../store/users-store.js";
import "./render-buttons.css";

export const renderButtons = (element) => {
	const container = document.createElement("div");
	container.className = "pagination-container";

	const prevButton = document.createElement("button");
	prevButton.className = "pagination-button";
	prevButton.innerText = "< Previous";

	const currentPageLabel = document.createElement("span");
	currentPageLabel.className = "page-label";
	currentPageLabel.innerText = usersStore.getCurrentPage();

	const nextButton = document.createElement("button");
	nextButton.className = "pagination-button";
	nextButton.innerText = "Next >";

	container.append(prevButton, currentPageLabel, nextButton);
	element.append(container);
};
