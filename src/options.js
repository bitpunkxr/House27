const filter1 = document.getElementById('filter1');
const filter2 = document.getElementById('filter2');
const option1 = document.getElementById('categories');
const option2 = document.getElementById('location');
const dispName = document.getElementById('filter');

filter1.classList.add('active');
option1.classList.add('active');

function toggleLocation() {
   option1.classList.add('active');
   option2.classList.remove('active');
   dispName.innerHTML = "Listed properties by categories";
   filter1.classList.add('active');
   filter2.classList.remove('active');
};
function toggleCategories() {
   option2.classList.add('active');
   option1.classList.remove('active');
   dispName.innerText = "Listed properties by location";
   filter1.classList.remove('active');
   filter2.classList.add('active');
};
filter1.addEventListener('click', () => {
    toggleLocation();
});
filter2.addEventListener('click', () => {
    toggleCategories();
});