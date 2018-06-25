import {
  getRndInteger,
  getRandomColorCode
} from "./functions/helpers.js";
import { Owner } from "./core/owner.js";

const cnv = document.querySelector("canvas");
cnv.height = window.innerHeight;
window.addEventListener("resize", () => {
  cnv.height = window.innerHeight;
});

(() => {
  new Owner(cnv);
})(window);
