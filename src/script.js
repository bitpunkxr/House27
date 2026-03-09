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

function toggleLocation() {
   option1.style.display = "block";
   option2.style.display = "none";
   option3.style.display = "none";
};
function toggleCategories() {
   option1.style.display = "none";
   option2.style.display = "block";
   option3.style.display = "none";
};
function togglePrice() {
   option1.style.display = "none";
   option2.style.display = "none";
   option3.style.display = "block";
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