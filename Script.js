document.addEventListener("DOMContentLoaded", () => {
    // Interactive mouse move effect for hero background
    const hero = document.querySelector('.hero-section');
    hero.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        hero.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, #e0f2fe, transparent 60%)`;
    });

    // Reveal animations on scroll
    const options = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                entry.target.style.opacity = "1";
            }
        });
    }, options);

    document.querySelectorAll('.skill-item').forEach(el => {
        el.style.opacity = "0";
        observer.observe(el);
    });
    emailjs.init("YOUR_PUBLIC_KEY");

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Change button state
        const btn = contactForm.querySelector('button');
        btn.innerText = 'Sending...';

        // These IDs come from your EmailJS dashboard
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(() => {
                alert('Message sent successfully!');
                btn.innerText = 'Send Message';
                contactForm.reset();
            }, (error) => {
                alert('Failed to send message. Please try again.');
                btn.innerText = 'Send Message';
            });
    });
});