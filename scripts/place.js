const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;


const modifiedSpan = document.getElementById("modified");
modifiedSpan.textContent = document.lastModified;

const temperature = parseFloat(document.getElementById("temperature").textContent);
const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);

function calculateWindChill(temp, speed) {
  return (
    35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) +
    0.4275 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

function displayWindChill(temp, speed) {
  const windChillEl = document.getElementById("windChill");

  if (temp <= 50 && speed > 3) {
    windChillEl.textContent = `${calculateWindChill(temp, speed)} °F`;
  } else {
    windChillEl.textContent = "N/A";
  }
}

displayWindChill(temperature, windSpeed);