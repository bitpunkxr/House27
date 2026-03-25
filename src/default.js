const menu = document.getElementById('ham-menu');
const option = document.getElementById('full-menu');
const header = document.querySelector('.header');
const cName = document.querySelector('.c-name');
const container = document.querySelectorAll('.container');
const hName = document.querySelector('.name');

hName.innerHTML = '<p class="capital">H<rd>O</rd>USE 27</p>';

function toggleDisplay() {
    menu.classList.toggle('fold');
    container.forEach(container => {
        container.classList.toggle('fold');
    });
    option.classList.toggle('show');
    header.classList.toggle('active');
};
menu.addEventListener('click', () => {
    toggleDisplay();
});

let nDate = new Date();
let year = nDate.getFullYear();
cName.innerHTML = '&copy; ' + year + ' H<rd>O</rd>USE 27. All Rights Reserved';