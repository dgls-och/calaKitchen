import "./styles.css";

export const about = (function () {
  const displayAbout = (display) => {
    const heading = document.createElement("h2");
    heading.classList.add("dish-h2");
    heading.textContent = "Let's Tell You the Story";
    
    const about = document.createElement("p");
    about.classList.add("dish-p");
    about.textContent = "calaKitchen started with a simple idea: " 
      + "food should feel like home, no matter where it's from. " 
      + "By bringing together Nigerian classics, East african warmth, and Asian flair, " 
      + "we've created a space where cultures meet on a plate. Our passion is "
      + "serving meals that not only taste good but leave lasting memories.";

    display.appendChild(heading);
    display.appendChild(about);
  };

  return { displayAbout };
})();