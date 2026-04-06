const b = document.querySelectorAll('.b-of-card');
b.addEventListener('wheel', e=> {
    e.preventDefault();
    b.scrollLeft += e.deltaY;
}, {passive: false});

const c = document.querySelectorAll('.carousel');
c.addEventListener('wheel', e=> {
    e.preventDefault();
    c.scrollLeft += e.deltaY;
}, {passive: false});