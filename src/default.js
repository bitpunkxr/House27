const menu = document.getElementById('ham-menu');
const option = document.getElementById('full-menu');
const header = document.querySelector('.header');
const container = document.querySelectorAll('.container');
const hName = document.querySelector('.name');
const footer = document.querySelector('.footer');

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
footer.innerHTML = '<div class="overlay-3"><div class="form"><h3>Feel free to converse with us</h3><div class="user-input"><input type="text" name="name" id="userName" placeholder="Name" required><input type="email" name="email" id="userEmail" placeholder="Email" required> <br><input type="tel" name="" id="phoneNumber" placeholder="Phone Number" required><input type="text" name="Location/State" id="location" placeholder="Location" required><br><textarea name="userMessage" id="message" placeholder="Your Feedback" required></textarea><br><input type="submit" value="Send" id="submit"></div></div><div class="h-link"><div class="links"><a href="#"><p>Apartment</p></a><a href="#"><p>Lands</p></a><a href="#"><p>Estates</p></a><a href="#"><p>Investment</p></a></div><div class="links"><a href="#"><p>House27 on Twiiter</p></a><a href="#"><p>House27 on Instagram</p></a><a href="#"><p>House27 on TikTok</p></a></div><div class="links"><a href="index.html"><p>Home</p></a><a href="properties.html"><p>Properties</p></a><a href="about.html"><p>About</p></a><a href="projects.html"><p>Projects</p></a><a href="contact.html"><p>Contact</p></a></div></div><div class="c-name">&copy; ' + year + ' H<rd>O</rd>USE 27. All Rights Reserved</div></div>';