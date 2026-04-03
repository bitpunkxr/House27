const filter1 = document.getElementById('filter1');
const filter2 = document.getElementById('filter2');
const option1 = document.getElementById('categories');
const option2 = document.getElementById('location');
const dispName = document.getElementById('filter');
dispName.innerText = "Properties are available in the following categories and location";


filter1.classList.add('active');
option1.classList.add('active');

function toggleCategories() {
   option1.classList.add('active');
   option2.classList.remove('active');
   filter1.classList.add('active');
   filter2.classList.remove('active');
};
function toggleLocation() {
   option1.classList.remove('active');
   option2.classList.add('active');
   filter1.classList.remove('active');
   filter2.classList.add('active');
};
filter1.addEventListener('click', () => {
    toggleCategories();
});
filter2.addEventListener('click', () => {
    toggleLocation();
});

document.addEventListener('DOMContentLoaded', () => {
    const summaryCards = document.querySelectorAll('.showcase');

    summaryCards.forEach(card => {
        card.addEventListener('click', () => {
            const filterType = card.dataset.filterType; //filter location or category
            const filterValue = card.dataset.filterValue;

            window.location.href = `full-properties.html?filterType=${encodeURIComponent(filterType)}&filterValue=${encodeURIComponent(filterValue)}`;
        });
    });
});