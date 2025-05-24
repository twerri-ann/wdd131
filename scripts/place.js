const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;


const modifiedSpan = document.getElementById("modified");
modifiedSpan.textContent = document.lastModified;

const temp = 27; 
const windSpeed = 8; 

function calculateWindChill(t, w) {
  return 13.12 + 0.6215 * t - 11.37 * Math.pow(w, 0.16) + 0.3965 * t * Math.pow(w, 0.16);
}

function updateWindChill() {
  const chillEl = document.getElementById("chill");
  if (temp <= 10 && windSpeed > 4.8) {
    const chill = calculateWindChill(temp, windSpeed).toFixed(1);
    chillEl.textContent = `${chill} °C`;
  } else {
    chillEl.textContent = "N/A";
  }
}

updateWindChill();