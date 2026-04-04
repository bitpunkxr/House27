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

hLink.innerHTML = '<div class="links"><a href="#"><p>Shortlets</p></a><a href="#"><p>Penthouse</p></a><a href="#"><p>Duplex</p></a><a href="#"><p>Terrace</p></a></div><div class="links"><a href="https://x.com/house27homes"><p>@house27homes on twitter/X</p></a><a href="https//instagram.com/@house27homes_"><p>@house27homes_ on Instagram</p></a><a href="https://tiktok.com/@house27homes"><p>@house27homes on TikTok</p></a></div><div class="links"><a href="index.html"><p>Home</p></a><a href="properties.html"><p>Properties</p></a><a href="about.html"><p>About</p></a><a href="projects.html"><p>Projects</p></a><a href="contact.html"><p>Contact</p></a></div></div>';