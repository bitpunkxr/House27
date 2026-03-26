document.addEventListener('DOMContentLoaded', () => {
    const briefCards = document.querySelectorAll('.brief-card');

    briefCards.forEach(briefCards => {
        const button = briefCards.querySelector('.primary');
        const button2 = briefCards.querySelector('.primary2');
        const fullCard = briefCards.querySelector('.full-card');

        if (button && fullCard) {
            button.addEventListener('click', () => {
                fullCard.classList.add('active');
                button.classList.add('active');
                button2.classList.add('active');
            });
        }
        button2.addEventListener('click', () => {
            fullCard.classList.remove('active');
            button.classList.remove('active');
            button2.classList.remove('active');
        });
    });
});