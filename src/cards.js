document.addEventListener('DOMContentLoaded', () => {
    const briefCards = document.querySelectorAll('.brief-card');

    briefCards.forEach(briefCards => {
        const button = briefCards.querySelector('.primary');
        const fullCard = briefCards.querySelector('.full-card');

        if (button && fullCard) {
            button.addEventListener('click', () => {
                fullCard.classList.toggle('active');
                button.innerHTML = 'Show Less<div class="icon">&uArr;</div>';
            });
        }
    });
});