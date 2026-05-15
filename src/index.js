import "./styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";

const display = document.querySelector("#content");
const navButtons = document.querySelectorAll("nav button");

home.displayContent(display);

navButtons.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();

    if (button.dataset.id == "home") {
      display.textContent = "";
      home.displayContent(display);
      button.classList.add("active-btn");
      return;
    }

    if (button.dataset.id == "menu") {
      display.textContent = "";
      menu.displayMenu(display);
      button.classList.add("active-btn");
      return;
    }
  });
});