const menu = document.getElementById('ham-menu');
const option = document.getElementById('full-menu');
const header = document.querySelector('.header');
function toggleDisplay() {
    menu.classList.toggle('fold');
    option.classList.toggle('show');
    header.classList.toggle('active');
};
menu.addEventListener('click', () => {
    toggleDisplay();
});

const head = document.querySelectorAll('.name');
head.innerHTML = '<p>H<rd>O</rd>USE</p> <img src="public/logo.png" alt="">';

const cName = document.querySelector('.c-name');
let nDate = new Date();
let year = nDate.getFullYear();
cName.innerHTML = '&copy; ' + year + ' H<rd>O</rd>USE 27. All Rights Reserved';