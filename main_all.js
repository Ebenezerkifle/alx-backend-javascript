import getResponseFromAPI from "./0x01-ES6_promise/0-promise";
import getFullResponseFromAPI from "./0x01-ES6_promise/1-promise";

const response = getResponseFromAPI();
console.log(response instanceof Promise);
console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));