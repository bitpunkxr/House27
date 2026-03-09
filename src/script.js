const menu = document.getElementById('ham-menu');
const option = document.getElementById('full-menu');
const filter1 = document.getElementById('filter1');
const filter2 = document.getElementById('filter2');
const filter3 = document.getElementById('filter3');
const option1 = document.getElementById('location');
const option2 = document.getElementById('categories');
const option3 = document.getElementById('price');
const dispName = document.getElementById('filter');
const card = document.querySelector('.options');

card.addEventListener('mouseover', () => {
    card.classList.add('hover');
});
card.addEventListener('mouseleave', () => {
    card.classList.remove('hover');
});


card.addEventListener('', () => {
    image.classList.toggle('hover');
    card.style.backgroundColor = "red";
});

filter1.style.backgroundColor = "var(--bg)";
filter1.style.color = "var(--secondary)";
function toggleDisplay() {
    menu.classList.toggle('fold');
    option.classList.toggle('show');
};
menu.addEventListener('click', () => {
    toggleDisplay();
});

function toggleLocation() {
   option1.style.display = "flex";
   option2.style.display = "none";
   option3.style.display = "none";
   dispName.innerHTML = "Latest Properties Based On <em>Location</em>";
   filter1.style.backgroundColor = "var(--bg)";
   filter1.style.color = "var(--secondary)";
   filter2.style.backgroundColor = "var(--tertiary)";
   filter2.style.color = "var(--primary)";
   filter3.style.backgroundColor = "var(--tertiary)";
   filter3.style.color = "var(--primary)";
};
function toggleCategories() {
   option1.style.display = "none";
   option2.style.display = "flex";
   option3.style.display = "none";
   dispName.innerHTML = "Latest Properties Based On <em>Categories</em>";
   filter2.style.backgroundColor = "var(--bg)";
   filter2.style.color = "var(--secondary)";
   filter1.style.backgroundColor = "var(--tertiary)";
   filter1.style.color = "var(--primary)";
   filter3.style.backgroundColor = "var(--tertiary)";
   filter3.style.color = "var(--primary)";
};
function togglePrice() {
   option1.style.display = "none";
   option2.style.display = "none";
   option3.style.display = "flex";
   dispName.innerHTML = "Latest Properties Based On <em>Price</em>";
   filter3.style.backgroundColor = "var(--bg)";
   filter3.style.color = "var(--secondary)";
   filter1.style.backgroundColor = "var(--tertiary)";
   filter1.style.color = "var(--primary)";
   filter2.style.backgroundColor = "var(--tertiary)";
   filter2.style.color = "var(--primary)";
};
filter1.addEventListener('click', () => {
    toggleLocation();
});
filter2.addEventListener('click', () => {
    toggleCategories();
});
filter3.addEventListener('click', () => {
    togglePrice();
});