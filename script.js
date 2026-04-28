// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Formulario de contacto
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
        form.reset();
    });
}

// Animación de tarjetas al scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-in';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.species-card').forEach(card => {
    observer.observe(card);
});

console.log('✅ Página de Especies de Peces cargada correctamente');
