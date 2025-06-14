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
  {
    dishName: "Spiced Beef Kofta",
    veganfriendly: "No",
    dishType: "Finger Food",
    imageUrl:
    "https://i.pinimg.com/736x/15/bf/9f/15bf9f5477c7f004dfa19300dd5d2611.jpg"
  },
  {
    dishName: "Rasgulla",
    veganfriendly: "No",
    dishType: "Dessert",
    imageUrl:
    "https://i.pinimg.com/736x/bb/2b/85/bb2b85fb1781219b90f9ee1fb47a1a64.jpg"
  },
  {
    dishName: "Minestrone",
    veganfriendly: "Yes",
    dishType: "Soup",
    imageUrl:
    "https://i.pinimg.com/736x/6e/bc/a2/6ebca2d24359a83d693a0b12bddb6ec5.jpg"
  }
 ];
function filterVegan() {
  return menus.filter(t => t.veganfriendly.trim() === "Yes");
}

function filterFingerFood() {
  return menus.filter(t => t.dishType.trim() === "Finger Food");
}

function filterSoup() {
  return menus.filter(t => t.dishType.trim() === "Soup");
}
function filterSalad() {
  return menus.filter(t => t.dishType.trim() === "Salad");
}

function filterDessert() {
  return menus.filter(t => t.dishType.trim() === "Dessert");
}

function filterSideDish() {
  return menus.filter(t => t.dishType.trim() === "Side Dish");
}

function filterEntrées() {
  return menus.filter(t => t.dishType.trim() === "Entrées");
}

function displayMenus(filteredList) {
  const container = document.getElementById("menuContainer");
  container.innerHTML = "";

  filteredList.forEach(t => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.innerHTML = `
      <h3>${t.dishName}</h3>
      <img src="${t.imageUrl}" alt="${t.dishName}" loading="lazy" style="width: 100%; height: auto;">
      <p><strong>Vegan:</strong> ${t.veganfriendly}</p>
      <p><strong>Dish Type:</strong> ${t.dishType}</p>
    `;
    container.appendChild(card);
  });
} 

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("menu").addEventListener("click", () => {
    localStorage.setItem("lastFilter", "all");
    displayMenus(menus);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("vegan").addEventListener("click", () => {
    localStorage.setItem("lastFilter", "vegan");
    displayMenus(filterVegan());
  });

  document.getElementById("fingerfood").addEventListener("click", () => {
    localStorage.setItem("lastFilter", "fingerfood");
    displayMenus(filterFingerFood());
  });

  document.getElementById("soup").addEventListener("click", () => {
    localStorage.setItem("lastFilter", "soup");
    displayMenus(filterSoup());
  });

  document.getElementById("salad").addEventListener("click", () => {
    localStorage.setItem("lastFilter", "salad");
    displayMenus(filterSalad());
  });

  document.getElementById("dessert").addEventListener("click", () => {
    localStorage.setItem("lastFilter", "dessert");
    displayMenus(filterDessert());
  });

  document.getElementById("sidedish").addEventListener("click", () => {
    localStorage.setItem("lastFilter", "sidedish");
    displayMenus(filterSideDish());
  });

  document.getElementById("entrées").addEventListener("click", () => {
    localStorage.setItem("lastFilter", "entrées");
    displayMenus(filterEntrées());
  });

  // Restore last filter on page load
  const lastFilter = localStorage.getItem("lastFilter");
  if (lastFilter) {
    // Optional: Call displayMenus with the last filter when the page loads
    // You might want a switch or mapping here to call the right filter function
    switch (lastFilter) {
      case "vegan":
        displayMenus(filterVegan());
        break;
      case "fingerfood":
        displayMenus(filterFingerFood());
        break;
      case "soup":
        displayMenus(filterSoup());
        break;
      case "salad":
        displayMenus(filterSalad());
        break;
      case "dessert":
        displayMenus(filterDessert());
        break;
      case "sidedish":
        displayMenus(filterSideDish());
        break;
      case "entrées":
        displayMenus(filterEntrées());
        break;
      default:
        displayMenus(menus); // or show all menus by default
    }
  }
});


const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;


const modifiedSpan = document.getElementById("modified");
modifiedSpan.textContent = document.lastModified;