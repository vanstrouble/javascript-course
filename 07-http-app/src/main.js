import "./style.css";
import walter from "/walter-white.svg";
import { BreakingBadApp } from "./breaking-bad/breakingbad-app";

document.querySelector("#app").innerHTML = `
	<div>
		<a href="http://www.savewalterwhite.com/" target="_blank" >
			<img src="${walter}" class="logo walter-img" alt="Walter White face sticker"/>
		</a>
		<h1 id="app-title">Hello Vite!</h1>
		<div class="card">
		</div>
	</div>
`;

BreakingBadApp(document.querySelector(".card"));
