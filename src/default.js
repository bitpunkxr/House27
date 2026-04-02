const menu = document.getElementById('ham-menu');
const option = document.getElementById('full-menu');
const header = document.querySelector('.header');
const container = document.querySelectorAll('.container');
const hName = document.querySelector('.name');
const hLink = document.querySelector('.h-link');
const cName = document.querySelector('.c-name');

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

hLink.innerHTML = '<div class="links"><a href="#"><p>Apartment</p></a><a href="#"><p>Lands</p></a><a href="#"><p>Estates</p></a><a href="#"><p>Investment</p></a></div><div class="links"><a href="#"><p>House27 on Twiiter</p></a><a href="#"><p>House27 on Instagram</p></a><a href="#"><p>House27 on TikTok</p></a></div><div class="links"><a href="index.html"><p>Home</p></a><a href="properties.html"><p>Properties</p></a><a href="about.html"><p>About</p></a><a href="projects.html"><p>Projects</p></a><a href="contact.html"><p>Contact</p></a></div></div>';