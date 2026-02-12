import "./style.css";
import javascriptLogo from "./javascript.svg";
// import { environmentComponent } from "./concepts/01-enviroments";
// import { callbacksComponent } from "./concepts/02-callbacks";
// import { promisesComponent } from "./concepts/03-promises";
// import { callbacksComponent } from "./concepts/02-callbacks";
// import { promiseRaceComponent } from "./concepts/04-promise-race";
import { asyncComponent } from "./concepts/05-async";

document.querySelector("#app").innerHTML = `
    <div>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
            <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
        </a>
        <h1>Hello Vite!</h1>
        <div class="card">
        </div>
    </div>
`;

// promiseRaceComponent(document.querySelector(".card"));
asyncComponent(document.querySelector(".card"));
