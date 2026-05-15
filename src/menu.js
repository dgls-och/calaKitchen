//import "./styles.css";

const display = document.querySelector("#content");

// first dish
const dish1 = document.createElement("div");
dish1.classList.add("dish");

const dish1Heading = document.createElement("h2");
dish1Heading.classList.add("dish-h2");
dish1Heading.textContent = "Smoky Jollof Royale";

const dish1Description = document.createElement("p");
dish1Description.classList.add("dish-p");
dish1Description.textContent = "A rich, firewood-style Jollof rice bursting with bold tomato and spice flavours, served with juicy grilled chicken and sweet fried platains. A true tatse of Nigeria in every bite.";

const dish1Price = document.createElement("p");
dish1Price.classList.add("bold", "dish-p");
dish1Price.textContent = "NGN 5,500";

const dish1OrderButton = document.createElement("button");
dish1OrderButton.classList.add("menu-button", "content-nav-button")
dish1OrderButton.textContent = "Order now";

dish1.appendChild(dish1Heading);
dish1.appendChild(dish1Description);
dish1.appendChild(dish1Price);
dish1.appendChild(dish1OrderButton);


// second dish
const dish2 = document.createElement("div");
dish2.classList.add("dish");

const dish2Heading = document.createElement("h2");
dish2Heading.classList.add("dish-h2");
dish2Heading.textContent = "Swahili Coconut Chicken";

const dish2Description = document.createElement("p");
dish2Description.classList.add("dish-p");
dish2Description.textContent = "Tender chicken simmered on a creamy coconut sauce infused with East African spices, served  with fragrant rice. Smooth, comforting, and deeply satisfying.";

const dish2Price = document.createElement("p");
dish2Price.classList.add("bold", "dish-p");
dish2Price.textContent = "NGN 6,200";

const dish2OrderButton = document.createElement("button");
dish2OrderButton.classList.add("menu-button", "content-nav-button")
dish2OrderButton.textContent = "Order now";

dish2.appendChild(dish2Heading);
dish2.appendChild(dish2Description);
dish2.appendChild(dish2Price);
dish2.appendChild(dish2OrderButton);

// third dish
const dish3 = document.createElement("div");
dish3.classList.add("dish");

const dish3Heading = document.createElement("h2");
dish3Heading.classList.add("dish-h2");
dish3Heading.textContent = "Asian Stir-Fry Delight";

const dish3Description = document.createElement("p");
dish3Description.classList.add("dish-p");
dish3Description.textContent = "A vibrant mix of stir-fried noodles, crisp vegetables, and your choice of chicken or beef, tossed in a savory soy-garlic sauce. Bold flavours with a perfect balance.";

const dish3Price = document.createElement("p");
dish3Price.classList.add("bold", "dish-p");
dish3Price.textContent = "NGN 6,800";

const dish3OrderButton = document.createElement("button");
dish3OrderButton.classList.add("menu-button", "content-nav-button")
dish3OrderButton.textContent = "Order now";

dish3.appendChild(dish3Heading);
dish3.appendChild(dish3Description);
dish3.appendChild(dish3Price);
dish3.appendChild(dish3OrderButton);

// append to display
display.appendChild(dish1);
display.appendChild(dish2);
display.appendChild(dish3);
