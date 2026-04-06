const c = document.querySelectorAll('.carousel');
c.addEventListener('wheel', e=> {
    e.preventDefault();
    c.scrollLeft += e.deltaY;
}, {passive: false});