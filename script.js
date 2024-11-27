const toggleArrow = document.querySelector('.toggle-arrow');
const navLinks = document.querySelector('.nav-links');

toggleArrow.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
