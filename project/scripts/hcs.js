const cuisines = [
  {
    name: "Italian"
  },
  {
    name: "Chinese"
  },
  {
    name: "Mexican"
  },
  {
    name: "Indian"
  },
  {
    name: "Thai"
  },
  {
    name: "West African"
  },
  {
    name: "Mediterranean"
  },
  {
    name: "Middle Eastern"
  },
  {
    name: "Caribbean"
  },
  {
    name: "Mixed"
  },
  {
    name: "Others"
  },
];

const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;


const modifiedSpan = document.getElementById("modified");
modifiedSpan.textContent = document.lastModified;
