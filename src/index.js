import { homepage } from "./homepage";

const display = document.querySelector("#content");
const navButtons = document.querySelectorAll("nav button");

navButtons.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    if (button.dataset.id == "home") {
      homepage.displayContent(display);
    }
  });
});