const obsever = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else { 
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElmens = document.querySelectorAll('.hidden');
hiddenElmens.forEach((el) => obsever.observe(el));