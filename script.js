// Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Smooth scroll for navigation
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

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
    }
});

// Galeri Scroll Functions
function scrollGaleri(direction) {
    const galeri = document.getElementById('galeriScroll');
    const scrollAmount = 320; // width item + gap

    if (direction === 'left') {
        galeri.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        galeri.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }

    updateIndicators();
}

function goToSlide(index) {
    const galeri = document.getElementById('galeriScroll');
    const items = galeri.querySelectorAll('.galeri-item');
    const scrollAmount = 320;

    galeri.scrollTo({ left: index * scrollAmount, behavior: 'smooth' });
    updateIndicators(index);
}

function updateIndicators(activeIndex = null) {
    const galeri = document.getElementById('galeriScroll');
    const indicators = document.querySelectorAll('.indicator');
    const scrollLeft = galeri.scrollLeft;
    const itemWidth = 320;
    const currentIndex = activeIndex !== null ? activeIndex : Math.round(scrollLeft / itemWidth);

    indicators.forEach((ind, index) => {
        if (index === currentIndex) {
            ind.classList.add('active');
        } else {
            ind.classList.remove('active');
        }
    });
}

// Update indicators on scroll
document.getElementById('galeriScroll').addEventListener('scroll', () => {
    updateIndicators();
});

// Animate progress bars when section is visible
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const progressObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-fill');
            progressBars.forEach(bar => {
                const width = bar.getAttribute('style').match(/width:\s*(\d+%)/)[1];
                bar.style.width = width;
            });
        }
    });
}, observerOptions);

const modelGuruSection = document.querySelector('.model-guru');
if (modelGuruSection) {
    progressObserver.observe(modelGuruSection);
}

// Fade in animation on scroll
const fadeElements = document.querySelectorAll('.artefak-card, .penilaian-card, .competency-card, .galeri-item');

```javascript id="p4u8nk"
const fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('fade-show');
            }, index * 100);
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(el => {
    el.classList.add('fade-init');
    fadeObserver.observe(el);
});
```


// Mobile menu toggle (if needed in future)
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close modal with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            activeModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// Touch/drag support for galeri (mobile swipe)
let isDown = false;
let startX;
let scrollLeft;
const galeriScroll = document.getElementById('galeriScroll');

if (galeriScroll) {
    galeriScroll.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - galeriScroll.offsetLeft;
        scrollLeft = galeriScroll.scrollLeft;
    });

    galeriScroll.addEventListener('mouseleave', () => {
        isDown = false;
    });

    galeriScroll.addEventListener('mouseup', () => {
        isDown = false;
    });

    galeriScroll.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - galeriScroll.offsetLeft;
        const walk = (x - startX) * 2;
        galeriScroll.scrollLeft = scrollLeft - walk;
    });
}
