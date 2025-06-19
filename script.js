  window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for navigation links
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

        // Form submission
        function submitForm(event) {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            
            // Simulate form submission
            const submitBtn = form.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! I\'ll get back to you soon.');
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        }

        // Mobile menu toggle
        function toggleMenu() {
            const mobileNav = document.getElementById('mobileNav');
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            
            mobileNav.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        }

        // Close mobile menu
        function closeMobileMenu() {
            const mobileNav = document.getElementById('mobileNav');
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            
            mobileNav.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const mobileNav = document.getElementById('mobileNav');
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            
            if (!mobileMenuBtn.contains(event.target) && !mobileNav.contains(event.target)) {
                mobileNav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.addEventListener('DOMContentLoaded', function() {
            const animatedElements = document.querySelectorAll('.skill-item, .project-card, .contact-item');
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        });

        // Add typing effect to hero text
        document.addEventListener('DOMContentLoaded', function() {
            const heroTitle = document.querySelector('.hero h1');
            const heroSubtitle = document.querySelector('.hero p');
            
            // Add a subtle pulse animation to CTA button
            const ctaButton = document.querySelector('.cta-button');
            setInterval(() => {
                ctaButton.style.boxShadow = '0 0 20px rgba(99, 102, 241, 0.3)';
                setTimeout(() => {
                    ctaButton.style.boxShadow = 'none';
                }, 1000);
            }, 3000);
        });