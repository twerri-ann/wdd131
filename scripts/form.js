const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;


const modifiedSpan = document.getElementById("modified");
modifiedSpan.textContent = document.lastModified;