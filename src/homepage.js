const outputDiv = document.querySelector("#content");

const heroHeadline = document.createElement("h2");
heroHeadline.textContent = "Taste That Feels Like Home";
heroHeadline.classList.add("content-h2")

const heroSubtext1 = document.createElement("p");
heroSubtext1.textContent = "From rich local flavours to modern favourites, calaKitchen "
  + "serves food that satisfies both heart and hunger.";
  heroSubtext1.classList.add("content-p");

const heroSubtext2 = document.createElement("p");
heroSubtext2.textContent = "Come hungry. Leave happy.";
heroSubtext2.classList.add("content-p", "bold");

const menuButton = document.createElement("button");
menuButton.dataset.id = "menu";
menuButton.textContent = "Check our menu";
menuButton.classList.add("content-nav-button", "menu-button")

const aboutButton = document.createElement("button");
aboutButton.dataset.id = "about";
aboutButton.textContent = "Learn more about us";
aboutButton.classList.add("content-nav-button")

const contentNav = document.createElement("nav");
contentNav.appendChild(menuButton);
contentNav.appendChild(aboutButton);

outputDiv.appendChild(heroHeadline);
outputDiv.appendChild(heroSubtext1);
outputDiv.appendChild(heroSubtext2);
outputDiv.appendChild(contentNav);