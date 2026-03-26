document.addEventListener('DOMContentLoaded', () => {
    const showcase = document.querySelectorAll('.showcase');

    showcase.forEach(showcase => {
        const button = showcase.querySelector('.primary');
        const fullCard = showcase.querySelector('.full-card');

        if (button && fullCard) {
            button.addEventListener('click', () => {
                fullCard.classList.toggle('active');
                showcase.classList.toggle('active');
            });
        }
    });
});