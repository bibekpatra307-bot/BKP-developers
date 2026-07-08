// ===== STICKY HEADER =====
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
if (hamburger) {
    hamburger.addEventListener('click', function() {
        nav.querySelector('.nav-list').classList.toggle('open');
    });
}

// ===== BACK TO TOP =====
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) backBtn.classList.add('visible');
    else backBtn.classList.remove('visible');
});
backBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== COUNTER ANIMATION =====
const counters = document.querySelectorAll('.stat-number');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

function animateCounter(el, target) {
    let current = 0;
    const increment = Math.ceil(target / 50);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) { el.textContent = target; clearInterval(timer); }
        else el.textContent = current;
    }, 30);
}
