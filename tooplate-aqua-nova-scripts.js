/*

Tooplate 2138 Aqua Nova

https://www.tooplate.com/view/2138-aqua-nova

*/

// JavaScript Document

// Underwater Background Animation
        const underwaterBg = document.getElementById('underwater-bg');
        
        // Simple bubble creation - Reduced number
        function createBubbles() {
            for (let i = 0; i < 6; i++) {
                const bubble = document.createElement('div');
                bubble.className = 'bubble';
                bubble.style.width = Math.random() * 10 + 5 + 'px';
                bubble.style.height = bubble.style.width;
                bubble.style.left = Math.random() * 100 + '%';
                bubble.style.animationDelay = Math.random() * 10 + 's';
                bubble.style.animationDuration = Math.random() * 5 + 8 + 's';
                underwaterBg.appendChild(bubble);
            }
        }

        // Simple ocean particles
        function createOceanParticles() {
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'ocean-particle';
                particle.style.width = Math.random() * 4 + 2 + 'px';
                particle.style.height = particle.style.width;
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = Math.random() * 5 + 12 + 's';
                underwaterBg.appendChild(particle);
            }
        }

        // Research Tabs Functionality - Fixed
        const researchTabs = document.querySelectorAll('.research-tab');
        const researchContents = document.querySelectorAll('.research-content');

        if (researchTabs.length > 0 && researchContents.length > 0) {
            researchTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Remove active class from all tabs and contents
                    researchTabs.forEach(t => t.classList.remove('active'));
                    researchContents.forEach(c => c.classList.remove('active'));

                    // Add active class to clicked tab
                    tab.classList.add('active');

                    // Show corresponding content
                    const tabId = tab.getAttribute('data-tab');
                    const targetContent = document.getElementById(tabId);
                    if (targetContent) {
                        targetContent.classList.add('active');
                    }
                });
            });
        }

        // Simple initialization
        createBubbles();
        createOceanParticles();

        // Simple regeneration
        setInterval(createBubbles, 20000); // Every 20 seconds
        setInterval(createOceanParticles, 30000); // Every 30 seconds

        // Mobile menu toggle - Fixed
        const mobileToggle = document.getElementById('mobile-toggle');
        const navMenu = document.getElementById('nav-menu');

        if (mobileToggle && navMenu) {
            mobileToggle.addEventListener('click', () => {
                mobileToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Close mobile menu when clicking on links
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
        }

        // Smooth scroll - Fixed
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Navbar scroll effect - Fixed
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (navbar) {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }

            // Fade in sections
            const sections = document.querySelectorAll('.fade-in');
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.8) {
                    section.classList.add('visible');
                }
            });
        });

        // Form submissions - Fixed with error handling
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Message sent successfully! 🌊 (This is a demo)');
            });
        }

        // Newsletter form submission - Fixed with error handling
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const emailInput = document.querySelector('.newsletter-input');
                if (emailInput && emailInput.value) {
                    alert(`Thank you for subscribing! 🐠 We will keep you updated on our ocean discoveries. (This is a demo)`);
                    emailInput.value = '';
                }
            });
        }