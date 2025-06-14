 const cuisines = [
    { name: "Italian" },
    { name: "Chinese" },
    { name: "Mexican" },
    { name: "Indian" },
    { name: "Thai" },
    { name: "West African" },
    { name: "Mediterranean" },
    { name: "Middle Eastern" },
    { name: "Caribbean" },
    { name: "Mixed" },
    { name: "Others" }
  ];

  document.addEventListener("DOMContentLoaded", function () {
    const selectElement = document.getElementById("cuisines");

    cuisines.forEach(cuisine => {
      const option = document.createElement("option");
      option.value = cuisine.name;
      option.textContent = cuisine.name;
      selectElement.appendChild(option);
    });
  });

const menus = [
  {
    dishName: "Veggie Spring Rolls",
    veganfriendly: "Yes",
    dishType: "Finger Food",
    imageUrl:
    "https://i.pinimg.com/736x/4b/3a/76/4b3a762840764d6197ed256b62803d5b.jpg"
  },
  {
    dishName: "Chicken Noodle Soup",
    veganfriendly: "No",
    dishType: "Soup",
    imageUrl:
    "https://i.pinimg.com/736x/81/62/75/81627582ad3c0d725c633e6ad87dd170.jpg"
  },
  {
    dishName: "Garden Salad",
    veganfriendly: "Yes",
    dishType: "Salad",
    imageUrl:
    "https://i.pinimg.com/736x/3c/a2/3d/3ca23d4f4aa1456ee49b998278711b3d.jpg"
  },
  {
    dishName: "Chocolate Truffles",
    veganfriendly: "No",
    dishType: "Dessert",
    imageUrl:
    "https://i.pinimg.com/736x/4b/72/07/4b7207129ffe7d92053e3e77875ac7c0.jpg"
  },
  {
    dishName: "Curried Pumpkin Rice",
    veganfriendly: "Yes",
    dishType: "Side Dish",
    imageUrl:
    "https://i.pinimg.com/736x/9f/9b/20/9f9b20341441e9fd701eef8dd428b195.jpg"
  },
  {
    dishName: "Beef Stew",
    veganfriendly: "No",
    dishType: "Entrées",
    imageUrl:
    "https://i.pinimg.com/736x/06/a2/cb/06a2cbf5ce22e2c4310caef7b4f203d9.jpg"
  },
  {
    dishName: "Hummus with Pita",
    veganfriendly: "Yes",
    dishType: "Finger Food",
    imageUrl:
    "https://i.pinimg.com/736x/34/91/d1/3491d149a865324058b441a677440bbc.jpg"
  },
  {
    dishName: "Lentil Soup",
    veganfriendly: "Yes",
    dishType: "Soup",
    imageUrl:
    "https://i.pinimg.com/736x/1a/7a/a0/1a7aa0c5a1aa186feac48a2abe8f279d.jpg"
  },
  {
    dishName: "Honey Hot Chicken Salad",
    veganfriendly: "No",
    dishType: "Salad",
    imageUrl:
    "https://i.pinimg.com/736x/77/9a/4c/779a4ccca6c4d4a85f2e8c792eacc62d.jpg"
  },
  {
    dishName: "Chin Chin",
    veganfriendly: "No",
    dishType: "Dessert",
    imageUrl:
    "https://i.pinimg.com/736x/8c/43/51/8c43517573225c2ba7b4eb857acf5c2d.jpg"
  },
  {
    dishName: "Mashed Potatoes with Corn",
    veganfriendly: "Yes",
    dishType: "Side Dish",
    imageUrl:
    "https://i.pinimg.com/736x/a8/29/b3/a829b3afd7e27d200288b7b47ddd1e94.jpg"
  },
  {
    dishName: "Curried Goat",
    veganfriendly: "No",
    dishType: "Entrées",
    imageUrl:
    "https://i.pinimg.com/736x/46/93/f8/4693f8ebe7c3de17022838602013a1b8.jpg"
  },
];
function filterVegan() {
  return menus.filter(t => t.veganfriendly.split(",")[0].trim() === "Yes");
}

function filterFingerFood() {
  return menus.filter(t => t.dishType.split(",")[0].trim() === "Finger Food");
}

function filterSoup() {
  return menus.filter(t => t.dishType.split(",")[0].trim() === "Soup");
}

function filterSalad() {
  return menus.filter(t => t.dishType.split(",")[0].trim() === "Salad");
}

function filterDessert() {
  return menus.filter(t => t.dishType.split(",")[0].trim() === "Dessert");
}

function filterSideDish() {
  return menus.filter(t => t.dishType.split(",")[0].trim() === "Side Dish");
}

function filterEntrées() {
  return menus.filter(t => t.dishType.split(",")[0].trim() === "Entrées");
}

function displayMenus(filteredList) {
  const container = document.getElementById("menuContainer");
  container.innerHTML = ""; // Clear existing content

  filteredList.forEach(t => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.innerHTML = `
      <h3>${t.dishName}</h3>
      <img src="${t.imageUrl}" alt="${t.dishName}" loading="lazy">
      <p><strong>Vegan:</strong> ${t.veganfriendly}</p>
      <p><strong>Dish Type:</strong> ${t.dishType}</p>
    `;
    container.appendChild(card);
  });
}

document.getElementById("menu").addEventListener("click", () => displayMenus(menus));
document.getElementById("vegan").addEventListener("click", () => displayMenus(filterVegan()));
document.getElementById("fingerfood").addEventListener("click", () => displayMenus(filterFingerFood()));
document.getElementById("soup").addEventListener("click", () => displayMenus(filterSoup()));
document.getElementById("salad").addEventListener("click", () => displayMenus(filterSalad()));
document.getElementById("dessert").addEventListener("click", () => displayMenus(filterDessert()));
document.getElementById("sidedish").addEventListener("click", () => displayMenus(filterSideDish()));
document.getElementById("entrées").addEventListener("click", () => displayMenus(filterEntrées()));

const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;


const modifiedSpan = document.getElementById("modified");
modifiedSpan.textContent = document.lastModified;
