const toggleButton = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;


const modifiedSpan = document.getElementById("modified");
modifiedSpan.textContent = document.lastModified;