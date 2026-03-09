const menu = document.getElementById('ham-menu');
const option = document.getElementById('full-menu');
function toggleDisplay() {
    menu.classList.toggle('fold');
    option.classList.toggle('show');
};

menu.addEventListener('click', () => {
    toggleDisplay();
});