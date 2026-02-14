// ===================================
// Page Loader
// ===================================

window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1000);
});

// ===================================
// Navigation Bar - Scroll Effect
// ===================================

const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// Mobile Navigation Toggle
// ===================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===================================
// Active Navigation Link on Scroll
// ===================================

const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ===================================
// Smooth Scrolling
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Scroll Reveal Animation
// ===================================

const revealElements = document.querySelectorAll(
    '.reveal-left, .reveal-right, .reveal-top, .reveal-bottom'
);

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('revealed');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Initial check on page load
revealOnScroll();

// ===================================
// Skill Progress Bar Animation
// ===================================

const skillSection = document.getElementById('skills');
let skillsAnimated = false;

const animateSkills = () => {
    if (skillsAnimated) return;

    const skillsTop = skillSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (skillsTop < windowHeight - 100) {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        });

        skillsAnimated = true;
    }
};

window.addEventListener('scroll', animateSkills);

// ===================================
// Scroll to Top Button
// ===================================

const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Contact Form Handling
// ===================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    formMessage.style.display = 'none';

    // Simulate form submission (replace with actual API call)
    try {
        // Simulated delay for demo purposes
        await new Promise(resolve => setTimeout(resolve, 2000));

        // For demonstration - in production, you would send data to your backend
        console.log('Form submitted:', formData);

        // Show success message
        formMessage.textContent = 'Thank you! Your message has been sent successfully.';
        formMessage.className = 'form-message success';
        formMessage.style.display = 'block';

        // Reset form
        contactForm.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);

    } catch (error) {
        // Show error message
        formMessage.textContent = 'Oops! Something went wrong. Please try again.';
        formMessage.className = 'form-message error';
        formMessage.style.display = 'block';
    } finally {
        // Remove loading state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
});

// ===================================
// Form Input Animation
// ===================================

const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.parentElement.classList.remove('focused');
        }
    });
});

// ===================================
// Typing Effect for Hero Section (Optional Enhancement)
// ===================================

const taglineElement = document.querySelector('.hero-tagline');
if (taglineElement) {
    const taglineText = taglineElement.textContent;
    taglineElement.textContent = '';
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < taglineText.length) {
            taglineElement.textContent += taglineText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50);
        }
    }

    // Start typing effect after page loads
    setTimeout(typeWriter, 1500);
}

// ===================================
// Parallax Effect for Hero Section
// ===================================

const heroSection = document.querySelector('.hero');
const floatingCards = document.querySelectorAll('.floating-card');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;

    if (scrolled < window.innerHeight) {
        floatingCards.forEach((card, index) => {
            const speed = parallaxSpeed * (index + 1) * 0.3;
            card.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }
});

// ===================================
// Project Card Tilt Effect (3D Effect)
// ===================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// ===================================
// Intersection Observer for Better Performance
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

// Observe all reveal elements
revealElements.forEach(element => {
    observer.observe(element);
});

// ===================================
// Performance Optimization - Debounce Scroll Events
// ===================================

function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(updateActiveLink, 10));
window.addEventListener('scroll', debounce(revealOnScroll, 10));

// ===================================
// Console Easter Egg
// ===================================

console.log('%c👋 Hey there, fellow developer!', 'color: #667eea; font-size: 24px; font-weight: bold;');
console.log('%cLike what you see? Let\'s connect!', 'color: #764ba2; font-size: 16px;');
console.log('%cGitHub: https://github.com/yourprofile', 'color: #a0a0b8; font-size: 14px;');

// ===================================
// Initialize Everything on DOM Load
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Initial reveal check
    revealOnScroll();
    
    // Initial active link update
    updateActiveLink();
    
    // Log that everything is loaded
    console.log('✨ Portfolio loaded successfully!');
});

// ===================================
// Preload Images (Optional)
// ===================================

function preloadImages() {
    const images = [
        // Add your project images here if you add them later
        // 'images/project1.jpg',
        // 'images/project2.jpg',
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Call preload on load
window.addEventListener('load', preloadImages);

// ===================================
// Dark Mode Toggle (Optional Enhancement)
// You can add a toggle button in HTML and uncomment this
// ===================================

/*
const darkModeToggle = document.getElementById('darkModeToggle');
const root = document.documentElement;

darkModeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    // Save preference
    const isLightMode = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
}
*/

// ===================================
// Email Protection (Simple obfuscation)
// ===================================

const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // You can add analytics tracking here
        console.log('Email link clicked');
    });
});

// ===================================
// External Links - Open in New Tab
// ===================================

const externalLinks = document.querySelectorAll('a[href^="http"]');
externalLinks.forEach(link => {
    if (!link.hasAttribute('target')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ===================================
// Image Modal for Education Certificates
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalError = document.getElementById('modalError');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.querySelector('.modal-overlay');

    // Check if all elements exist
    if (!imageModal || !modalImage || !modalError || !modalClose || !modalOverlay) {
        console.error('Modal elements not found');
        return;
    }

    // Get all marksheet buttons
    const marksheetButtons = document.querySelectorAll('.marksheet-btn');
    console.log('Found', marksheetButtons.length, 'certificate buttons');

    // Open modal function
    function openModal(imagePath) {
        console.log('Opening modal with image:', imagePath);
        
        // Reset states
        modalError.classList.remove('active');
        modalImage.style.display = 'none';
        
        // Check if image exists by trying to load it
        const testImage = new Image();
        
        testImage.onload = function() {
            console.log('Image loaded successfully');
            // Image exists, show it
            modalImage.src = imagePath;
            modalImage.style.display = 'block';
            imageModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        };
        
        testImage.onerror = function() {
            console.log('Image failed to load');
            // Image doesn't exist, show error
            modalError.classList.add('active');
            imageModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        };
        
        testImage.src = imagePath;
    }

    // Close modal function
    function closeModal() {
        imageModal.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scroll
        
        // Clear image after animation
        setTimeout(() => {
            modalImage.src = '';
            modalError.classList.remove('active');
        }, 300);
    }

    // Add click event to all marksheet buttons
    marksheetButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Button clicked');
            const imagePath = this.getAttribute('data-image');
            console.log('Image path:', imagePath);
            if (imagePath) {
                openModal(imagePath);
            } else {
                console.error('No data-image attribute found');
            }
        });
    });

    // Close modal events
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && imageModal.classList.contains('active')) {
            closeModal();
        }
    });
});

// ===================================
// Print Styles Handler
// ===================================

window.addEventListener('beforeprint', () => {
    // Expand all sections for printing
    document.querySelectorAll('.reveal-left, .reveal-right, .reveal-top, .reveal-bottom')
        .forEach(el => el.classList.add('revealed'));
});
