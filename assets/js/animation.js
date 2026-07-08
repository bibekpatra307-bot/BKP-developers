// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll('.service-card, .portfolio-card, .about-content, .team-card, .plan, .blog-post');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });
revealElements.forEach(el => revealObserver.observe(el));
