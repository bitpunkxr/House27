const menu = document.getElementById('ham-menu');
const option = document.getElementById('full-menu');
function toggleDisplay() {
    menu.classList.toggle('fold');
    option.classList.toggle('show');
};

menu.addEventListener('click', () => {
    toggleDisplay();
});

const filter1 = document.getElementById('filter1');
const filter2 = document.getElementById('filter2');
const filter3 = document.getElementById('filter3');
const option1 = document.getElementById('location');
const option2 = document.getElementById('categories');
const option3 = document.getElementById('price');
const dispName = document.getElementById('filter');

function toggleLocation() {
   option1.style.display = "flex";
   option2.style.display = "none";
   option3.style.display = "none";
   dispName.innerHTML = "Best Properties Based On <em>Location</em>";
};
function toggleCategories() {
   option1.style.display = "none";
   option2.style.display = "flex";
   option3.style.display = "none";
   dispName.innerHTML = "Best Properties Based On <em>Categories</em>";
};
function togglePrice() {
   option1.style.display = "none";
   option2.style.display = "none";
   option3.style.display = "flex";
   dispName.innerHTML = "Best Properties Based On <em>Price</em>";
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