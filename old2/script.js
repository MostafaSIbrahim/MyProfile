document.addEventListener("DOMContentLoaded", () => {
    // Reveal animations on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInUp');
                entry.target.style.opacity = 1;
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.skill-card').forEach(card => {
        card.style.opacity = 0;
        card.classList.add('animate__animated');
        observer.observe(card);
    });
});