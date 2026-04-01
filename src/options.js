const filter1 = document.getElementById('filter1');
const filter2 = document.getElementById('filter2');
const filter3 = document.getElementById('filter3');
const option1 = document.getElementById('categories');
const option2 = document.getElementById('location');
const option3 = document.getElementById('custom');
const dispName = document.getElementById('filter');

filter1.classList.add('active');
option1.classList.add('active');

function toggleLocation() {
   option1.classList.add('active');
   option2.classList.remove('active');
   option3.classList.remove('active');
   dispName.innerHTML = "Listed properties by categories";
   filter1.classList.add('active');
   filter2.classList.remove('active');
   filter3.classList.remove('active');
};
function toggleCategories() {
   option2.classList.add('active');
   option1.classList.remove('active');
   option3.classList.remove('active');
   dispName.innerText = "Listed properties by location";
   filter1.classList.remove('active');
   filter2.classList.add('active');
   filter3.classList.remove('active');
};
function togglePrice() {
   option3.classList.add('active');
   option1.classList.remove('active');
   option2.classList.remove('active');
   dispName.innerHTML = "Listed properties by price";
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