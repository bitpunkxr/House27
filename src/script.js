const menu = document.getElementById('ham-menu');
const option = document.getElementById('full-menu');
const filter1 = document.getElementById('filter1');
const filter2 = document.getElementById('filter2');
const filter3 = document.getElementById('filter3');
const option1 = document.getElementById('location');
const option2 = document.getElementById('categories');
const option3 = document.getElementById('price');
const dispName = document.getElementById('filter');
const cName = document.querySelector('.c-name');
let nDate = new Date();
let year = nDate.getFullYear;

cName.innerHTML = '&copy; HOUSE 27. ' + year + 'All Rights Reserved';


filter1.style.backgroundColor = "var(--bg)";
filter1.style.color = "var(--secondary)";
filter1.style.padding = "10px 50px";

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
   dispName.innerHTML = "Latest Properties Based On Location";
   filter1.style.backgroundColor = "var(--bg)";
   filter1.style.padding = "10px 50px";
   filter1.style.color = "var(--secondary)";
   filter2.style.backgroundColor = "var(--tertiary)";
   filter2.style.padding = "10px 20px";
   filter2.style.color = "var(--primary)";
   filter3.style.backgroundColor = "var(--tertiary)";
   filter3.style.padding = "10px 20px";
   filter3.style.color = "var(--primary)";
};
function toggleCategories() {
   option1.style.display = "none";
   option2.style.display = "flex";
   option3.style.display = "none";
   dispName.innerHTML = "Latest Properties Based On Categories";
   filter2.style.backgroundColor = "var(--bg)";
   filter2.style.padding = "10px 50px";
   filter2.style.color = "var(--secondary)";
   filter1.style.backgroundColor = "var(--tertiary)";
   filter1.style.padding = "10px 20px";
   filter1.style.color = "var(--primary)";
   filter3.style.backgroundColor = "var(--tertiary)";
   filter3.style.padding = "10px 20px";
   filter3.style.color = "var(--primary)";
};
function togglePrice() {
   option1.style.display = "none";
   option2.style.display = "none";
   option3.style.display = "flex";
   dispName.innerHTML = "Latest Properties Based On Price";
   filter3.style.backgroundColor = "var(--bg)";
   filter3.style.padding = "10px 50px";
   filter3.style.color = "var(--secondary)";
   filter1.style.backgroundColor = "var(--tertiary)";
   filter1.style.padding = "10px 20px";
   filter1.style.color = "var(--primary)";
   filter2.style.backgroundColor = "var(--tertiary)";
   filter2.style.padding = "10px 20px";
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