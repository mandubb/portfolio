// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Project filter
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-category');
        const projects = document.querySelectorAll('.project');

        projects.forEach(project => {
            project.style.transition = 'opacity 0.3s ease';
            if (category === 'all' || project.getAttribute('data-category') === category) {
                project.style.display = 'block';
                setTimeout(() => project.style.opacity = '1', 100);
            } else {
                project.style.opacity = '0';
                setTimeout(() => project.style.display = 'none', 300);
            }
        });
    });
});

// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Typed.js for hero section name animation
if (document.getElementById('typed-name')) {
    new Typed('#typed-name', {
        strings: ['Christian Angelo M. Arias', 'Technologist', 'Entrepreneur'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
}

// Particles.js for hero section background
particlesJS('particles', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: ['#3b82f6', '#ec4899'] },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#ec4899', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out' }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

// Send Email button functionality
document.getElementById('sendEmail').addEventListener('click', function() {
    const subject = encodeURIComponent('Opportunity Inquiry - Virtual Assistant Position');
    const body = encodeURIComponent(`Hi Christian,

I hope this email finds you well. I came across your portfolio and I'm impressed with your technical skills and experience in remote tech support.

I would like to discuss a potential opportunity with you. Please let me know when would be a good time to connect.

Best regards,`);
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=angeloarias007@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
});