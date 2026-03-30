document.addEventListener('DOMContentLoaded', () => {
    const results = document.querySelectorAll('.results');
    const showcase = document.querySelectorAll('.showcase');
    const header = document.querySelector('.navigation');
    const heading = document.querySelector('.heading');

    showcase.forEach(showcase => {
        const button = showcase.querySelector('.primary');
        const button2 = showcase.querySelector('.primary2');
        const fullCard = showcase.querySelector('.full-card');

        button.addEventListener('click', () => {
            showcase.body.style.display = "none";
            showcase.classList.add('active');
        });
        if (button && fullCard) {
            button.addEventListener('click', () => {
                fullCard.classList.add('active');
                showcase.classList.add('active');
                button.classList.add('active');
                button2.classList.add('active');
            });
        }
        button2.addEventListener('click', () => {
            fullCard.classList.remove('active');
            showcase.classList.remove('active');
            button.classList.remove('active');
            button2.classList.remove('active');
        });
    });
});