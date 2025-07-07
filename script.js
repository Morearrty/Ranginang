// Multi-page website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get current page name
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    
    // Update active navigation link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        const linkPage = href.replace('.html', '');
        
        if (linkPage === currentPage || 
            (currentPage === 'index' && linkPage === 'index') ||
            (currentPage === '' && linkPage === 'index')) {
            link.classList.add('active');
        }
    });
    
    // Smooth page transitions
    const pageLinks = document.querySelectorAll('a[href$=".html"]');
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Add transition effect
            document.body.style.opacity = '0.7';
            document.body.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
    
    // Page load animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });
    
    // Enhanced animations for different pages
    if (currentPage === 'index' || currentPage === '') {
        // Beranda page specific animations
        const productCards = document.querySelectorAll('.product-preview-card');
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
        
        productCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = `all 0.6s ease ${index * 0.2}s`;
            observer.observe(card);
        });
        
        // Parallax effect for hero image
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroImg = document.querySelector('.hero-main-img');
            
            if (heroImg && scrolled < window.innerHeight) {
                heroImg.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        });
        
    } else if (currentPage === 'profil') {
        // Profil page specific animations
        const profilContent = document.querySelector('.profil-content');
        if (profilContent) {
            profilContent.style.opacity = '0';
            profilContent.style.transform = 'translateY(50px)';
            profilContent.style.transition = 'all 1s ease';
            
            setTimeout(() => {
                profilContent.style.opacity = '1';
                profilContent.style.transform = 'translateY(0)';
            }, 500);
        }
        
    } else if (currentPage === 'produk') {
        // Produk page specific animations
        const productItems = document.querySelectorAll('.product-item');
        productItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(50px)';
            item.style.transition = `all 0.6s ease ${index * 0.2}s`;
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 200 + (index * 200));
        });
        
    } else if (currentPage === 'kontak') {
        // Kontak page specific animations
        const kontakCards = document.querySelectorAll('.kontak-card');
        kontakCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `all 0.6s ease ${index * 0.1}s`;
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 300 + (index * 100));
        });
        
        // Form validation and submission
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Simple form validation
                const requiredFields = this.querySelectorAll('[required]');
                let isValid = true;
                
                requiredFields.forEach(field => {
                    if (!field.value.trim()) {
                        field.style.borderColor = '#ff4444';
                        isValid = false;
                    } else {
                        field.style.borderColor = '#8FBC8F';
                    }
                });
                
                if (isValid) {
                    // Simulate form submission
                    const submitBtn = this.querySelector('.submit-btn');
                    const originalText = submitBtn.textContent;
                    
                    submitBtn.textContent = 'Mengirim...';
                    submitBtn.disabled = true;
                    
                    setTimeout(() => {
                        alert('Pesan berhasil dikirim! Kami akan segera menghubungi Anda.');
                        this.reset();
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    }, 2000);
                } else {
                    alert('Mohon lengkapi semua field yang wajib diisi.');
                }
            });
        }
    }
    
    // Mobile menu toggle functionality
    function initializeMobileMenu() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navList = document.querySelector('.nav-list');
        
        if (!mobileMenuToggle || !navList) {
            console.log('Mobile menu elements not found');
            return;
        }
        
        console.log('Initializing mobile menu...');
        
        // Toggle menu function
        function toggleMenu() {
            const isActive = navList.classList.contains('active');
            
            if (isActive) {
                navList.classList.remove('active');
                document.body.classList.remove('menu-open');
                mobileMenuToggle.innerHTML = '☰';
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            } else {
                navList.classList.add('active');
                document.body.classList.add('menu-open');
                mobileMenuToggle.innerHTML = '✕';
                mobileMenuToggle.setAttribute('aria-expanded', 'true');
            }
        }
        
        // Add click event to toggle button
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
        });
        
        // Close mobile menu when clicking on a link
        const mobileNavLinks = navList.querySelectorAll('.nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                navList.classList.remove('active');
                document.body.classList.remove('menu-open');
                mobileMenuToggle.innerHTML = '☰';
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav') && navList.classList.contains('active')) {
                navList.classList.remove('active');
                document.body.classList.remove('menu-open');
                mobileMenuToggle.innerHTML = '☰';
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navList.classList.remove('active');
                document.body.classList.remove('menu-open');
                mobileMenuToggle.innerHTML = '☰';
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Add hover effects for all cards
    const allCards = document.querySelectorAll('.product-preview-card, .product-item, .kontak-card, .detail-item');
    
    allCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
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
});

// Add CSS for mobile menu body scroll lock
const style = document.createElement('style');
style.textContent = `
    body.menu-open {
        overflow: hidden;
        position: fixed;
        width: 100%;
        height: 100vh;
    }
    
    @media (max-width: 768px) {
        .mobile-menu-toggle {
            display: flex !important;
        }
        
        .nav-list {
            position: fixed !important;
            top: 0 !important;
            left: -100% !important;
            transform: none !important;
            opacity: 1 !important;
            visibility: visible !important;
        }
        
        .nav-list.active {
            left: 0 !important;
        }
    }
    
    @media (min-width: 769px) {
        .mobile-menu-toggle {
            display: none !important;
        }
        
        .nav-list {
            position: static !important;
            left: auto !important;
            transform: none !important;
            opacity: 1 !important;
            visibility: visible !important;
        }
    }
`;

document.head.appendChild(style);
