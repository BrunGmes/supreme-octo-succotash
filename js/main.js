document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão do link
            const target = document.querySelector(this.getAttribute('href')); // Obtém o elemento alvo
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth', // Rolagem suave
                    block: 'start' // Alinha o elemento no topo da viewport
                });
            } else {
                // Se o target não existir (caso do href="#"), rolar para o topo
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Scroll Animation
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .hero-content');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if(elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);