const menu = document.getElementById('ham-menu');
const option = document.getElementById('full-menu');
const header = document.querySelector('.header');
const filter1 = document.getElementById('filter1');
const filter2 = document.getElementById('filter2');
const filter3 = document.getElementById('filter3');
const option1 = document.getElementById('location');
const option2 = document.getElementById('categories');
const option3 = document.getElementById('price');
const dispName = document.getElementById('filter');
const cName = document.querySelector('.c-name');
function toggleDisplay() {
    menu.classList.toggle('fold');
    option.classList.toggle('show');
    header.classList.toggle('active');
};
menu.addEventListener('click', () => {
    toggleDisplay();
});
filter1.classList.add('active');
function toggleLocation() {
   option1.style.display = "flex";
   option2.style.display = "none";
   option3.style.display = "none";
   dispName.innerHTML = "Latest Properties Based On Location";
   filter1.classList.add('active');
   filter2.classList.remove('active');
   filter3.classList.remove('active');
};
function toggleCategories() {
   option1.style.display = "none";
   option2.style.display = "flex";
   option3.style.display = "none";
   dispName.innerHTML = "Latest Properties Based On Categories";
   filter1.classList.remove('active');
   filter2.classList.add('active');
   filter3.classList.remove('active');
};
function togglePrice() {
   option1.style.display = "none";
   option2.style.display = "none";
   option3.style.display = "flex";
   dispName.innerHTML = "Latest Properties Based On Price";
   filter1.classList.remove('active');
   filter2.classList.remove('active');
   filter3.classList.add('active');
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
let nDate = new Date();
let year = nDate.getFullYear();
cName.innerHTML = '&copy; ' + year + ' H<rd>O</rd>USE 27. All Rights Reserved';